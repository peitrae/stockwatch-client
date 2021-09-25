export interface UserLoginData {
	email: string;
	password: string;
}

export interface UserLoginForm {
	data: UserLoginData;
	error: Partial<UserLoginData>;
}

export interface UserSignUpData extends UserLoginData {
	name?: string;
}

export interface UserSignUpFormData extends UserSignUpData {
	confirmPassword: string;
}

export type UserSignUpFormError = Partial<
	Record<keyof UserSignUpFormData, string | null>
>;

export interface UserSignUpForm {
	data: UserSignUpFormData;
	error: UserSignUpFormError | null;
}

export interface AuthSuccess {
	token: string;
	refreshToken: string;
	expiresIn: number;
}
