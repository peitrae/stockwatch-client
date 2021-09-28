import { AxiosError } from 'axios';
import { createReducer } from '@reduxjs/toolkit';

import { ErrorRes } from '@/types';
import { register, login } from '../actions/user';

export interface IUserState {
	data: {
		token: string | null;
		refreshToken: string | null;
		expiresIn: number;
		localId: string | null;
		name: string | null;
		email: string | null;
	};
	loading: boolean;
	error?: ErrorRes | AxiosError;
}

export const initialState: IUserState = {
	data: {
		token: null,
		refreshToken: null,
		expiresIn: 0,
		localId: null,
		name: null,
		email: null,
	},
	loading: false,
	error: undefined,
};

const userReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(register.pending, (state) => {
			state.loading = true;
		})
		.addCase(register.fulfilled, (state, { payload }) => {
			state.data = payload;
			state.loading = false;
			state.error = undefined;
		})
		.addCase(register.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload as ErrorRes | AxiosError;
		})
		.addCase(login.fulfilled, (state, { payload }) => {
			state.data = { ...state.data, ...payload };
			state.loading = false;
			state.error = undefined;
		})
		.addCase(login.pending, (state) => {
			state.loading = true;
			state.error = undefined;
		})
		.addCase(login.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload as ErrorRes | AxiosError;
		});
});

export default userReducer;
