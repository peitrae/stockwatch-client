import { createAsyncThunk } from '@reduxjs/toolkit';

import userAPI from '@/api/user';
import { UserSignUpData, UserLoginData } from '@/types';

export const register = createAsyncThunk(
	'user/register',
	async (userData: UserSignUpData, { rejectWithValue }) => {
		try {
			const { data } = await userAPI.register(userData);

			return data;
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

export const login = createAsyncThunk(
	'user/login',
	async (user: UserLoginData, { rejectWithValue }) => {
		try {
			const { data } = await userAPI.login(user);

			return data;
		} catch (err) {
			console.log(err);

			return rejectWithValue(err);
		}
	}
);

const actions = {
	register,
	login,
};

export default actions;
