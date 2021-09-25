import { GlobalWrapper } from '@/pages/_app';
import { fireEvent, render, screen } from '@testing-library/react';
import { AxiosError } from 'axios';

import Login, { LoginProps } from '@/modules/authentication/Login';
import IErrorRes from '@/types/IErrorRes';
import { UserLoginData } from '@/types/authentication';
import { generateRandomEmail, generateRandomString } from '@/test/utils';

interface LoginTestProps {
	isLoading?: boolean;
	error?: IErrorRes | AxiosError;
	onSubmit?: (user: UserLoginData) => void;
}

const renderLogin = (
	props: LoginTestProps = {
		isLoading: false,
		error: undefined,
		onSubmit: jest.fn(),
	}
) => {
	return render(
		<GlobalWrapper>
			<Login {...(props as LoginProps)} />
		</GlobalWrapper>
	);
};

describe('modules/authentication/Login', () => {
	it('should render correctly ', () => {
		renderLogin();

		const header = screen.getByRole('heading', { name: 'Login' });
		const loginGoogle = screen.getByRole('button', {
			name: 'Login with Google',
		});
		const loginFacebook = screen.getByRole('button', {
			name: 'Login with Facebook',
		});
		const inputEmail = screen.getByLabelText('Email');
		const inputPassword = screen.getByLabelText('Password');
		const submitButton = screen.getByRole('button', { name: 'Login' });

		expect(header).toBeVisible();
		expect(loginGoogle).toBeVisible();
		expect(loginFacebook).toBeVisible();
		expect(inputEmail).toBeVisible();
		expect(inputPassword).toBeVisible();
		expect(submitButton).toBeVisible();
	});

	it('should redirect to signup page when "Sign up now" button is clicked', () => {
		renderLogin();

		const signUpLink = screen.getByRole('link', { name: 'Sign up now' });

		expect(signUpLink).toHaveAttribute('href', '/signup');
	});

	describe('submit login form', () => {
		it('should successfully call login action', () => {
			const onSubmit = jest.fn((data) => data);

			renderLogin({ onSubmit });

			const inputEmail = screen.getByLabelText('Email');
			const inputPassword = screen.getByLabelText('Password');
			const submitButton = screen.getByRole('button', { name: 'Login' });

			const email = generateRandomEmail();
			const password = generateRandomString();

			fireEvent.change(inputEmail, {
				target: { value: email },
			});
			fireEvent.change(inputPassword, {
				target: { value: password },
			});
			fireEvent.click(submitButton);

			expect(onSubmit).toHaveBeenCalledTimes(1);
			expect(onSubmit.mock.results[0].value).toEqual({
				email,
				password,
			});
		});

		it('should show login is loading', () => {
			renderLogin({ isLoading: true });

			const progress = screen.getByTestId('progress-indeterminate');
			const overlay = screen.getByTestId('login-section-overlay');

			expect(progress).toBeVisible();
			expect(overlay).toBeVisible();
		});

		it('should show error when email is empty', () => {
			renderLogin();

			const inputPassword = screen.getByLabelText('Password');
			const submitButton = screen.getByRole('button', { name: 'Login' });

			fireEvent.change(inputPassword, {
				target: { value: generateRandomString() },
			});
			fireEvent.click(submitButton);

			const error = screen.getByText('Email cannot be empty');

			expect(error).toBeVisible();
		});

		it('should show error when password is empty', () => {
			renderLogin();

			const inputEmail = screen.getByLabelText('Email');
			const submitButton = screen.getByRole('button', { name: 'Login' });

			fireEvent.change(inputEmail, {
				target: { value: generateRandomEmail() },
			});
			fireEvent.click(submitButton);

			const error = screen.getByText('Password cannot be empty');

			expect(error).toBeVisible();
		});

		it('should show error when email is not valid', () => {
			renderLogin();

			const inputEmail = screen.getByLabelText('Email');
			const inputPassword = screen.getByLabelText('Password');
			const submitButton = screen.getByRole('button', { name: 'Login' });

			fireEvent.change(inputEmail, {
				target: { value: generateRandomString() },
			});
			fireEvent.change(inputPassword, {
				target: { value: generateRandomString() },
			});
			fireEvent.click(submitButton);

			const error = screen.getByText('Please fill a valid email address');

			expect(error).toBeVisible();
		});
	});
});
