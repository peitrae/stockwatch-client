import { useState } from 'react';
import styled from '@emotion/styled';
import type { NextPage } from 'next';

import Page from '@/components/layouts/Page';
import Navbar from '@/components/layouts/Navbar';
import SignUpOpts from '@/modules/authentication/SignUpOpts';
import SignUpEmail from '@/modules/authentication/SignUpEmail';

const SignUpPage = styled(Page)`
	background-color: ${({ theme }) => theme.colors.gray.lightest100};
	display: flex;
	flex-direction: column;
`;

const SignUp: NextPage = () => {
	const [isShowSignUpWithEmail, setIsShowSignUpWithEmail] = useState(false);

	const toogleShowSignUpWithEmail = () => {
		return setIsShowSignUpWithEmail(!isShowSignUpWithEmail);
	};

	return (
		<SignUpPage>
			<Navbar />
			{isShowSignUpWithEmail ? (
				<SignUpEmail anotherMethodsOnClick={toogleShowSignUpWithEmail} />
			) : (
				<SignUpOpts withEmailOnClick={toogleShowSignUpWithEmail} />
			)}
		</SignUpPage>
	);
};

export default SignUp;
