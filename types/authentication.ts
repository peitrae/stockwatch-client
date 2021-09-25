export interface UserLoginData {
	email: string;
	password: string;
}

export interface UserLoginForm {
	data: UserLoginData;
	error: Partial<UserLoginData>;
}

export interface AuthSuccess {
	token: string;
	refreshToken: string;
	expiresIn: number;
}
