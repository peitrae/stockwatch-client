import actions, { register } from '@/store/actions/user';
import { configureStore } from '@reduxjs/toolkit';

import userAPI from '@/api/user';
import { generateRandomEmail, generateRandomString } from '@/test/utils';
import userReducer, {
	initialState as initialUserState,
} from '@/store/reducers/user';

jest.mock('@/api/user');

const configureTestStore = () => {
	const store = configureStore({
		reducer: {
			user: userReducer,
		},
	});

	return store;
};

describe('store/actions/user', () => {
	let api: jest.Mocked<typeof userAPI>;
	let store: ReturnType<typeof configureTestStore>;

	beforeAll(() => {
		api = userAPI as any;
	});

	beforeEach(() => {
		store = configureTestStore();
		api.login.mockClear();
	});

	afterAll(() => {
		jest.unmock('@/api/user');
	});

	describe('login', () => {
		const loginData = {
			email: generateRandomEmail(),
			password: generateRandomString(),
		};

		const loginSuccess: any = {
			data: {
				token: 'token',
				refreshToken: 'refreshToken',
				expiresIn: 3600,
			},
		};

		const loginError = {
			code: 400,
			domain: 'authentication',
			message: 'User not found',
			name: 'USER_NOT_FOUND',
		};

		it('should fullfilled', async () => {
			const loginAPI = api.login.mockResolvedValueOnce(loginSuccess);

			await store.dispatch(actions.login(loginData));
			const state = store.getState();

			expect(loginAPI).toHaveBeenLastCalledWith(loginData);
			expect(state.user).toEqual({
				...initialUserState,
				data: { ...initialUserState.data, ...loginSuccess.data },
			});
		});

		it('should pending', () => {
			const loginAPI = api.login.mockImplementationOnce(() => {
				return new Promise((resolve) => {
					setTimeout(() => {
						resolve(loginSuccess);
					}, 2000);
				});
			});

			store.dispatch(actions.login(loginData));
			const state = store.getState();

			expect(loginAPI).toHaveBeenLastCalledWith(loginData);
			expect(state.user).toEqual({ ...initialUserState, loading: true });
		});

		it('should rejected', async () => {
			const loginAPI = api.login.mockRejectedValueOnce(loginError);

			await store.dispatch(actions.login(loginData));
			const state = store.getState();

			expect(loginAPI).toHaveBeenLastCalledWith(loginData);
			expect(state.user).toEqual({ ...initialUserState, error: loginError });
		});
	});

	describe('register', () => {
		const registerData = {
			email: generateRandomEmail(),
			password: generateRandomString(),
		};

		const registerSuccess: any = {
			data: {
				token: 'token',
				refreshToken: 'refreshToken',
				expiresIn: 3600,
			},
		};

		const registerError = {
			name: 'EMAIL_EXIST',
			code: 400,
			message: 'The email address is already in use by another account',
			domain: 'authentication',
		};

		it('should fullfilled', async () => {
			const registerAPI = api.register.mockResolvedValueOnce(registerSuccess);
			const registerDataWithName = {
				...registerData,
				name: generateRandomString(),
			};

			await store.dispatch(register(registerDataWithName));
			const state = store.getState();

			expect(registerAPI).toHaveBeenCalledWith(registerDataWithName);
			expect(state.user).toEqual({
				...initialUserState,
				data: { ...initialUserState.data, ...registerSuccess.data },
			});
		});

		it('should fullfilled without a name', async () => {
			const registerAPI = api.register.mockResolvedValueOnce(registerSuccess);

			await store.dispatch(register(registerData));
			const state = store.getState();

			expect(registerAPI).toHaveBeenCalledWith(registerData);
			expect(state.user).toEqual({
				...initialUserState,
				data: { ...initialUserState.data, ...registerSuccess.data },
			});
		});

		it('should pending', () => {
			const registerAPI = api.register.mockImplementationOnce(() => {
				return new Promise((resolve) => {
					setTimeout(() => {
						resolve(registerSuccess);
					}, 2000);
				});
			});

			store.dispatch(register(registerData));
			const state = store.getState();

			expect(registerAPI).toHaveBeenLastCalledWith(registerData);
			expect(state.user).toEqual({
				...initialUserState,
				loading: true,
			});
		});

		it('should rejected', async () => {
			const registerAPI = api.register.mockRejectedValueOnce(registerError);

			await store.dispatch(register(registerData));
			const state = store.getState();

			expect(registerAPI).toHaveBeenCalledWith(registerData);
			expect(state.user).toEqual({
				...initialUserState,
				error: registerError,
			});
		});
	});
});
