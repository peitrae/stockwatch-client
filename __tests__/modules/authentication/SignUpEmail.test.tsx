import { fireEvent, render, screen } from '@testing-library/react';
import { AxiosError } from 'axios';

import { GlobalWrapper } from '@/pages/_app';
import SignUpEmail from '@/modules/authentication/SignUpEmail';
import { generateRandomEmail, generateRandomString } from '@/test/utils';
import { ISignUpEmail } from '@/modules/authentication/SignUpEmail';
import IErrorRes from '@/types/IErrorRes';

jest.mock('@/api/user');

interface IRenderSignUpEmail {
	isLoading?: boolean;
	error?: IErrorRes | AxiosError<any> | null;
	onSubmit?: jest.Mock;
	anotherMethodsOnClick?: jest.Mock;
}

const renderSignUpEmail = (
	params: IRenderSignUpEmail = {
		isLoading: false,
		error: null,
		onSubmit: jest.fn(),
		anotherMethodsOnClick: jest.fn(),
	}
) =>
	render(
		<GlobalWrapper>
			<SignUpEmail {...(params as ISignUpEmail)} />
		</GlobalWrapper>
	);

describe('<SignUpEmail />', () => {
	it('should render correctly', () => {
		renderSignUpEmail();

		expect(screen.getByRole('heading', { name: 'Sign Up' })).toBeVisible();
		expect(screen.getByLabelText('Full Name (Optional)')).toBeVisible();
		expect(screen.getByLabelText('Email')).toBeVisible();
		expect(screen.getByLabelText('Password')).toBeVisible();
		expect(screen.getByLabelText('Confirm Password')).toBeVisible();
		expect(screen.getByRole('button', { name: 'Sign Up' })).toBeVisible();
		expect(
			screen.getByRole('button', { name: 'Sign Up with another methods' })
		).toBeVisible();
	});

	it('should navigate to login page when Login link is clicked', () => {
		renderSignUpEmail();

		expect(screen.getByText('Login', { selector: 'a' })).toHaveAttribute(
			'href',
			'/login'
		);
	});

	describe('Submit sign up form', () => {
		it('should success submit sign up form and redirect to dahboard page', async () => {
			const onSubmit = jest.fn((data) => data);

			renderSignUpEmail({ onSubmit });

			const inputName = screen.getByLabelText('Full Name (Optional)');
			const inputEmail = screen.getByLabelText('Email');
			const inputPassword = screen.getByLabelText('Password');
			const inputConfirmPassword = screen.getByLabelText('Confirm Password');
			const submitBtn = screen.getByRole('button', { name: 'Sign Up' });

			const name = generateRandomString();
			const email = generateRandomEmail();
			const password = generateRandomString();

			fireEvent.change(inputName, {
				target: { value: name },
			});
			fireEvent.change(inputEmail, {
				target: { value: email },
			});
			fireEvent.change(inputPassword, {
				target: { value: password },
			});
			fireEvent.change(inputConfirmPassword, {
				target: { value: password },
			});
			fireEvent.click(submitBtn);

			expect(onSubmit).toHaveBeenCalledTimes(1);
			expect(onSubmit.mock.results[0].value).toEqual({
				name,
				email,
				password,
			});
		});

		it('should submit sign up form without a full name', () => {
			const onSubmit = jest.fn((data) => data);

			renderSignUpEmail({ onSubmit });

			const inputEmail = screen.getByLabelText('Email');
			const inputPassword = screen.getByLabelText('Password');
			const inputConfirmPassword = screen.getByLabelText('Confirm Password');
			const submitBtn = screen.getByRole('button', { name: 'Sign Up' });

			const email = generateRandomEmail();
			const password = generateRandomString();

			fireEvent.change(inputEmail, {
				target: { value: email },
			});
			fireEvent.change(inputPassword, {
				target: { value: password },
			});
			fireEvent.change(inputConfirmPassword, {
				target: { value: password },
			});
			fireEvent.click(submitBtn);

			expect(onSubmit).toHaveBeenCalledTimes(1);
			expect(onSubmit.mock.results[0].value).toEqual({
				email,
				password,
			});
		});

		it('should show sign up loading', () => {
			renderSignUpEmail({ isLoading: true });

			const progress = screen.getByTestId('progress-indeterminate');
			const overlay = screen.getByTestId('signup-overlay');

			expect(progress).toBeVisible();
			expect(overlay).toBeVisible();
		});

		it('should show sign up error', () => {
			renderSignUpEmail({
				error: {
					name: 'EMAIL_EXIST',
					code: 400,
					message: 'The email address is already in use by another account',
					domain: 'authentication',
				},
			});

			const error = screen.getByText(
				'The email address is already in use by another account'
			);

			expect(error).toBeVisible();
		});

		it('should show error when email is empty', () => {
			renderSignUpEmail();

			const submitBtn = screen.getByRole('button', { name: 'Sign Up' });

			fireEvent.click(submitBtn);

			const error = screen.getByText('Email cannot be empty');

			expect(error).toBeVisible();
		});

		it('should show error when password is empty', () => {
			renderSignUpEmail();

			const submitBtn = screen.getByRole('button', { name: 'Sign Up' });
			const inputEmail = screen.getByLabelText('Email');

			fireEvent.change(inputEmail, {
				target: { value: generateRandomEmail() },
			});

			fireEvent.click(submitBtn);

			const error = screen.getByText('Password cannot be empty');

			expect(error).toBeVisible();
		});

		it('should show error when password is less than 6 characters', () => {
			renderSignUpEmail();

			const inputEmail = screen.getByLabelText('Email');
			const inputPassword = screen.getByLabelText('Password');
			const inputConfirmPassword = screen.getByLabelText('Confirm Password');
			const submitBtn = screen.getByRole('button', { name: 'Sign Up' });

			const password = generateRandomString().slice(0, 5);

			fireEvent.change(inputEmail, {
				target: { value: generateRandomEmail() },
			});
			fireEvent.change(inputPassword, { target: { value: password } });
			fireEvent.change(inputConfirmPassword, { target: { value: password } });
			fireEvent.click(submitBtn);

			const error = screen.getByText(
				'Password must have at least 6 characters'
			);

			expect(error).toBeVisible();
		});

		it("should show error when password and confirm password doesn't match", () => {
			renderSignUpEmail();

			const inputEmail = screen.getByLabelText('Email');
			const inputPassword = screen.getByLabelText('Password');
			const inputConfirmPassword = screen.getByLabelText('Confirm Password');
			const submitBtn = screen.getByRole('button', { name: 'Sign Up' });

			fireEvent.change(inputEmail, {
				target: { value: generateRandomEmail() },
			});
			fireEvent.change(inputPassword, {
				target: { value: generateRandomString() },
			});
			fireEvent.change(inputConfirmPassword, {
				target: { value: generateRandomString() },
			});
			fireEvent.click(submitBtn);

			const error = screen.getByText(
				'Password and confirm password does not match'
			);

			expect(error).toBeVisible();
		});
	});
});
