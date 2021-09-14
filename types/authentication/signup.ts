export interface IUserSignUpData {
	name?: string;
	email: string;
	password: string;
}

export interface IUserSignUpFormData extends IUserSignUpData {
	confirmPassword: string;
}

export interface IUserSignUpForm {
	data: IUserSignUpFormData;
	error: TUserSignUpFormError | null;
}

export type TUserSignUpFormError = Partial<
	Record<keyof IUserSignUpFormData, string | null>
>;
