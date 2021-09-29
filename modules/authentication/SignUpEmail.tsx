/** @jsxImportSource @emotion/react */

import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { AxiosError } from 'axios';

import Link from '@/components/typhographies/Link';
import Text from '@/components/typhographies/Text';
import TextInput from '@/components/inputs/TextInput';
import ProgressIndeterminate from '@/components/ui/ProgressIndeterminate';
import { mb16, mb32 } from '@/styles/margin';
import Auth, { AuthCSS } from './_Auth';
import validateSignUp from './utils/validateSignUp';
import { UserSignUpData, UserSignUpForm, ErrorRes } from '@/types';

export interface SignUpEmailProps {
	isLoading: boolean;
	error?: ErrorRes | AxiosError | null;
	onSubmit: (userData: UserSignUpData) => void;
	anotherMethodsOnClick: () => void;
}

const SignUpEmail: React.FC<SignUpEmailProps> = ({
	isLoading,
	error,
	onSubmit,
	anotherMethodsOnClick,
}) => {
	const [form, setForm] = useState<UserSignUpForm>({
		data: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		error: null,
	});

	const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setForm({
			data: { ...form.data, [e.target.name]: e.target.value },
			error: { ...form.error, [e.target.name]: null },
		});
	};

	const submit = (e: SyntheticEvent) => {
		e.preventDefault();
		const isValid = validateSignUp(form.data);

		if (isValid === true) {
			onSubmit({
				name: form.data.name !== '' ? form.data.name : undefined,
				email: form.data.email,
				password: form.data.password,
			});
		} else {
			setForm({ ...form, error: isValid });
		}
	};

	return (
		<Auth.Card data-testid="signup-email">
			{isLoading && (
				<>
					<Auth.Overlay opacity="0.15" data-testid="signup-overlay" />
					<ProgressIndeterminate css={AuthCSS.loading} />
				</>
			)}
			<Auth.InnerWrapper>
				<Text as="h1" type="sans-serif">
					Sign Up
				</Text>
				<Auth.DescriptionWrapper>
					<Text css={AuthCSS.secondaryLighterColor} type="sans-serif">
						Already have an account?&nbsp;
					</Text>
					<Link weight="700" href="/login">
						Login
					</Link>
				</Auth.DescriptionWrapper>
				{error && (
					<Auth.Error css={mb16} color="danger">
						{error.message}
					</Auth.Error>
				)}
				<form css={mb32} onSubmit={submit}>
					<TextInput
						id="signup-name"
						name="name"
						label="Full Name (Optional)"
						css={mb16}
						placeholder="Enter your full name"
						inputSize="lg"
						value={form.data.name || ''}
						onChange={inputOnChange}
					/>
					<TextInput
						id="signup-email"
						name="email"
						label="Email"
						css={mb16}
						type="email"
						placeholder="Enter your email"
						inputSize="lg"
						value={form.data.email}
						error={form.error?.email}
						onChange={inputOnChange}
					/>
					<TextInput
						id="signup-password"
						name="password"
						label="Password"
						css={mb16}
						type="password"
						placeholder="Enter your password"
						inputSize="lg"
						value={form.data.password}
						error={form.error?.password}
						onChange={inputOnChange}
					/>
					<TextInput
						id="signup-confirm-password"
						name="confirmPassword"
						label="Confirm Password"
						type="password"
						placeholder="Enter your password again"
						inputSize="lg"
						value={form.data.confirmPassword}
						error={form.error?.confirmPassword}
						onChange={inputOnChange}
					/>
				</form>
				<Auth.Button size="lg" css={mb16} onClick={submit}>
					Sign Up
				</Auth.Button>
				<Auth.Button
					size="lg"
					variant="shadow"
					color="secondary"
					onClick={anotherMethodsOnClick}
				>
					Sign Up with another methods
				</Auth.Button>
			</Auth.InnerWrapper>
		</Auth.Card>
	);
};

export default SignUpEmail;
