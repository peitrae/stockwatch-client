import axios from 'axios';

import { IUserSignUpData } from '@/types/authentication/signup';
import generateResponseError from '@/utils/generateResponseError';

export const register = async (userData: IUserSignUpData) => {
	const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/user/signup`;

	try {
		return await axios.post(url, userData);
	} catch (err) {
		throw generateResponseError(err);
	}
};

const user = {
	register,
};

export default user;
