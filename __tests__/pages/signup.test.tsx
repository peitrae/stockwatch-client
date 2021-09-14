import { fireEvent, render, screen } from '@testing-library/react';

import { GlobalWrapper } from '@/pages/_app';
import SignUp from '@/pages/signup';

const renderSignUp = () => {
	return render(
		<GlobalWrapper>
			<SignUp />
		</GlobalWrapper>
	);
};

describe('<SignUp />', () => {
	it('should render correctly', () => {
		renderSignUp();

		expect(screen.getByRole('navigation')).toBeVisible();
		expect(screen.getByTestId('signup-opts')).toBeVisible();
	});

	it('should render <SignUpEmail /> when Sign Up with Email button is clicked', () => {
		renderSignUp();

		fireEvent.click(screen.getByText('Sign Up with Email'));

		expect(screen.getByRole('heading', { name: 'Sign Up' })).toBeVisible();
		expect(screen.getByTestId('signup-email')).toBeVisible();
	});

	it('should render <SignUpOpts /> when Sign Up with another methods button is clicked', () => {
		renderSignUp();

		fireEvent.click(screen.getByText('Sign Up with Email'));

		fireEvent.click(screen.getByText('Sign Up with another methods'));

		expect(screen.getByRole('heading', { name: 'Sign Up' })).toBeVisible();
		expect(screen.getByTestId('signup-opts')).toBeVisible();
	});
});
