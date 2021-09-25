import axios from 'axios';

import generateResponseError from '@/utils/generateResponseError';
import { UserSignUpData, UserLoginData } from '@/types';

export const register = async (userData: UserSignUpData) => {
	const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/user/signup`;

	try {
		return await axios.post(url, userData);
	} catch (err) {
		throw generateResponseError(err);
	}
};

const login = async (user: UserLoginData) => {
	const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/user/login`;

	try {
		return await axios.post(url, user);
	} catch (err) {
		throw generateResponseError(err);
	}
};

const user = {
	register,
	login,
};

export default user;
