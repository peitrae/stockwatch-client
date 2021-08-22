import styled from '@emotion/styled';
import type { NextPage } from 'next';

import Page from '@/components/layouts/Page';
import Navbar from '@/components/layouts/Navbar';
import LoginSection from '@/modules/authentication/Login';

const LoginPage = styled(Page)`
	background-color: ${({ theme }) => theme.colors.gray.lightest100};
	display: flex;
	flex-direction: column;
`;

const Login: NextPage = () => {
	return (
		<LoginPage>
			<Navbar />
			<LoginSection />
		</LoginPage>
	);
};

export default Login;
