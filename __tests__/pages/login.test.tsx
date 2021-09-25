import { render, screen } from '@testing-library/react';

import Login from '@/pages/login';
import { GlobalWrapper } from '@/pages/_app';

const renderLogin = () => {
	return render(
		<GlobalWrapper>
			<Login />
		</GlobalWrapper>
	);
};

describe('pages/login', () => {
	it('should render correctly', () => {
		renderLogin();

		const navbar = screen.getByRole('navigation');
		const loginSection = screen.getByTestId('login-section');

		expect(navbar).toBeVisible();
		expect(loginSection).toBeVisible();
	});
});
