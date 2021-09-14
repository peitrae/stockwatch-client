import { createAsyncThunk } from '@reduxjs/toolkit';

import { IUserSignUpData } from '@/types/authentication/signup';
import userAPI from '@/api/user';

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

const actions = {
	register,
};

export default actions;
