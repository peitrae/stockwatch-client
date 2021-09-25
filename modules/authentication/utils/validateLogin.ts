import { UserLoginData } from '@/types/authentication';
import isEmail from '@/utils/isEmail';

const validateLogin = (data: UserLoginData) => {
	let error: Partial<UserLoginData> = {
		email: undefined,
		password: undefined,
	};

	if (data.email === '') {
		error.email = 'Email cannot be empty';
	}

	if (data.email !== '' && !isEmail(data.email)) {
		error.email = 'Please fill a valid email address';
	}

	if (data.password === '') {
		error.password = 'Password cannot be empty';
	}

	const hasError = Object.values(error).find((message) => message);

	return hasError ? { error } : { data };
};

export default validateLogin;
