/** @jsxImportSource @emotion/react */

import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { AxiosError } from 'axios';

import Link from '@/components/typhographies/Link';
import Text from '@/components/typhographies/Text';
import { mb16, mb32, my24 } from '@/styles/margin';
import TextInput from '@/components/inputs/TextInput';
import Auth, { AuthCSS } from './_Auth';
import { GoogleIcon, FacebookIcon } from '@/components/icons';
import Flex from '@/components/layouts/Flex';
import validateLogin from './utils/validateLogin';
import { UserLoginData, UserLoginForm } from '@/types/authentication';
import IErrorRes from '@/types/IErrorRes';
import ProgressIndeterminate from '@/components/ui/ProgressIndeterminate';

export interface LoginProps {
	isLoading: boolean;
	error?: IErrorRes | AxiosError;
	onSubmit: (user: UserLoginData) => void;
}

const Login: React.FC<LoginProps> = ({ isLoading, error, onSubmit }) => {
	const [form, setForm] = useState<UserLoginForm>({
		data: {
			email: '',
			password: '',
		},
		error: {
			email: undefined,
			password: undefined,
		},
	});

	const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setForm({
			data: { ...form.data, [e.target.name]: e.target.value },
			error: { ...form.error, [e.target.name]: undefined },
		});
	};

	const submit = (e: SyntheticEvent) => {
		e.preventDefault();

		const validated = validateLogin(form.data);

		if (!validated.error) {
			onSubmit(validated.data);
		} else {
			setForm({ ...form, error: validated.error });
		}
	};

	return (
		<Auth.Card data-testid="login-section">
			{isLoading && (
				<>
					<Auth.Overlay opacity="0.15" data-testid="login-section-overlay" />
					<ProgressIndeterminate
						css={AuthCSS.loading}
						data-testid="login-section-progress"
					/>
				</>
			)}
			<Auth.InnerWrapper>
				<Text as="h1" type="sans-serif">
					Login
				</Text>
				<Auth.DescriptionWrapper>
					<Text css={AuthCSS.secondaryLighterColor} type="sans-serif">
						Don&apos;t have an account?&nbsp;
					</Text>
					<Link weight="700" href="/signup">
						Sign up now
					</Link>
				</Auth.DescriptionWrapper>
				<Auth.Button
					css={[AuthCSS.google, mb16]}
					startIcon={<GoogleIcon />}
					size="lg"
				>
					Login with Google
				</Auth.Button>
				<Auth.Button
					css={AuthCSS.facebook}
					startIcon={<FacebookIcon />}
					size="lg"
				>
					Login with Facebook
				</Auth.Button>
				<Flex css={my24} justifyContent="center" alignItems="center">
					<Auth.VLine />
					<Text css={AuthCSS.secondaryLighterColor}>or</Text>
					<Auth.VLine />
				</Flex>
				{error && (
					<Auth.Error css={mb16} color="danger">
						{error.message}
					</Auth.Error>
				)}
				<form css={mb32} onSubmit={submit}>
					<TextInput
						id="login-email"
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
						id="login-password"
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
				</form>
				<Auth.Button size="lg" onClick={submit}>
					Login
				</Auth.Button>
			</Auth.InnerWrapper>
		</Auth.Card>
	);
};

export default Login;
