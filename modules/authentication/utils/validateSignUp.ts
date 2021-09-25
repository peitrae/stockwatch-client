import { UserSignUpFormData, UserSignUpFormError } from '@/types';

const validateSignUp = (data: UserSignUpFormData) => {
	let validationError: UserSignUpFormError = {
		name: null,
		email: null,
		password: null,
		confirmPassword: null,
	};

	if (data.email === '') {
		validationError.email = 'Email cannot be empty';
	}

	if (data.password === '') {
		validationError.password = 'Password cannot be empty';
	}

	if (data.password && data.password.length < 6) {
		validationError.password = 'Password must have at least 6 characters';
	}

	if (data.password !== data.confirmPassword) {
		validationError.confirmPassword =
			'Password and confirm password does not match';
	}

	const hasError = Object.values(validationError).find((message) => message);

	return hasError ? validationError : true;
};

export default validateSignUp;
