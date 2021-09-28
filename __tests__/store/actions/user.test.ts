import actions from '@/store/actions/user';
import { initialState as initialUserState } from '@/store/reducers/user';

import userAPI from '@/api/user';
import { generateRandomEmail, generateRandomString } from '@/test/utils';
import userReducer from '@/store/reducers/user';
import { configureStore } from '@reduxjs/toolkit';

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

	describe('register', () => {});
});

// describe('store/actions/user: login', () => {
// 	let api: jest.Mocked<typeof userAPI>;
// 	let store: ReturnType<typeof configureTestStore>;

// 	const loginData = {
// 		email: generateRandomEmail(),
// 		password: generateRandomString(),
// 	};

// 	const loginSuccess: any = {
// 		data: {
// 			token: 'token',
// 			refreshToken: 'refreshToken',
// 			expiresIn: 3600,
// 		},
// 	};

// 	const loginError = {
// 		code: 400,
// 		domain: 'authentication',
// 		message: 'User not found',
// 		name: 'USER_NOT_FOUND',
// 	};

// 	beforeAll(() => {
// 		api = userAPI as any;
// 	});

// 	beforeEach(() => {
// 		store = configureTestStore();
// 		api.login.mockClear();
// 	});

// 	afterAll(() => {
// 		jest.unmock('@/api/user');
// 	});

// 	it('should fullfilled', async () => {
// 		api.login.mockResolvedValueOnce(loginSuccess);

// 		await store.dispatch(actions.login(loginData));
// 		const state = store.getState();

// 		expect(state.user).toEqual({
// 			...initialUserState,
// 			data: { ...initialUserState.data, ...loginSuccess.data },
// 		});
// 	});

// 	it('should pending', () => {
// 		api.login.mockImplementationOnce(() => {
// 			return new Promise((resolve) => {
// 				setTimeout(() => {
// 					resolve(loginSuccess);
// 				}, 2000);
// 			});
// 		});

// 		store.dispatch(actions.login(loginData));
// 		const state = store.getState();

// 		expect(state.user).toEqual({ ...initialUserState, loading: true });
// 	});

// 	it('should rejected', async () => {
// 		api.login.mockRejectedValueOnce(loginError);

// 		await store.dispatch(actions.login(loginData));
// 		const state = store.getState();

// 		expect(state.user).toEqual({ ...initialUserState, error: loginError });
// 	});
// });
