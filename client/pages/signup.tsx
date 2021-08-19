import styled from '@emotion/styled';
import type { NextPage } from 'next';

import Page from '@/components/layouts/Page';
import Navbar from '@/components/layouts/Navbar';
import SignUpOpts from '@/modules/signup/SignUpOpts';

const SignUpPage = styled(Page)`
	background-color: ${({ theme }) => theme.colors.gray.lightest100};
	display: flex;
	flex-direction: column;
`;

const SignUp: NextPage = () => (
	<SignUpPage>
		<Navbar />
		<SignUpOpts />
	</SignUpPage>
);

export default SignUp;
