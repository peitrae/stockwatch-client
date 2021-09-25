import { createAsyncThunk } from '@reduxjs/toolkit';

import { IUserSignUpData } from '@/types/authentication/signup';
import userAPI from '@/api/user';
import { UserLoginData } from '@/types/authentication';

export const register = createAsyncThunk(
	'user/register',
	async (userData: IUserSignUpData, { rejectWithValue }) => {
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
