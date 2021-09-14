import { screen, render } from '@testing-library/react';

import SignUpOpts from '@/modules/authentication/SignUpOpts';
import { GlobalWrapper } from '@/pages/_app';

const renderSignUpOpts = (mockwithEmailOnClick: jest.Mock) => {
	return render(
		<GlobalWrapper>
			<SignUpOpts withEmailOnClick={mockwithEmailOnClick} />
		</GlobalWrapper>
	);
};

describe('<SignUpOpts />', () => {
	it('should render correctly', () => {
		const mockwithEmailOnClick = jest.fn();

		renderSignUpOpts(mockwithEmailOnClick);

		const signUpGoogle = screen.getByRole('button', {
			name: 'Sign Up with Google',
		});
		const signUpFacebook = screen.getByRole('button', {
			name: 'Sign Up with Facebook',
		});
		const signUpEmail = screen.getByRole('button', {
			name: 'Sign Up with Email',
		});

		expect(screen.getByRole('heading', { name: 'Sign Up' })).toBeVisible();
		expect(signUpGoogle).toBeVisible();
		expect(signUpFacebook).toBeVisible();
		expect(signUpEmail).toBeVisible();
	});

	it('should navigate to login page when Login link is clicked', () => {
		const mockwithEmailOnClick = jest.fn();

		renderSignUpOpts(mockwithEmailOnClick);

		expect(screen.getByText('Login', { selector: 'a' })).toHaveAttribute(
			'href',
			'/login'
		);
	});
});
