import { fireEvent, render, screen } from '@testing-library/react';

import Navbar from '@/components/layouts/Navbar';
import { GlobalWrapper } from '@/pages/_app';

const renderNavbar = () => {
	return render(
		<GlobalWrapper>
			<Navbar />
		</GlobalWrapper>
	);
};

describe('<Navbar />', () => {
	it('should render correctly', () => {
		renderNavbar();

		expect(screen.getByLabelText('Logo', { selector: 'a' })).toBeVisible();
		expect(screen.getByText('Login', { selector: 'a' })).toBeVisible();
		expect(screen.getByText('Get Started', { selector: 'a' })).toBeVisible();
	});

	it('should navigate to home page when logo is clicked', () => {
		renderNavbar();

		expect(screen.getByLabelText('Logo', { selector: 'a' })).toHaveAttribute(
			'href',
			'/'
		);
	});

	it('should navigate to login page when Login button is clicked', () => {
		renderNavbar();

		expect(screen.getByText('Login', { selector: 'a' })).toHaveAttribute(
			'href',
			'/login'
		);
	});

	it('should navigate to signup page when Get Started button is clicked', () => {
		renderNavbar();

		expect(screen.getByText('Get Started', { selector: 'a' })).toHaveAttribute(
			'href',
			'/signup'
		);
	});
});
