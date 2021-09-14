import IErrorRes from '@/types/IErrorRes';
import { createReducer } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { register } from '../actions/user';

export interface IUserState {
	data: {
		token: string | null;
		refreshToken: string | null;
		localId: string | null;
		name: string | null;
		email: string | null;
	};
	loading: boolean;
	error: null | IErrorRes | AxiosError;
}

const initialState: IUserState = {
	data: {
		token: null,
		refreshToken: null,
		localId: null,
		name: null,
		email: null,
	},
	loading: false,
	error: null,
};

const userReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(register.pending, (state) => {
			state.loading = true;
		})
		.addCase(register.fulfilled, (state, { payload }) => {
			state.data = payload;
			state.loading = false;
			state.error = null;
		})
		.addCase(register.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload as IErrorRes | AxiosError;
		});
});

export default userReducer;
