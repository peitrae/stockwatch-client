import { useState } from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Page from '@/components/layouts/Page';
import Navbar from '@/components/layouts/Navbar';
import SignUpOpts from '@/modules/authentication/SignUpOpts';
import SignUpEmail from '@/modules/authentication/SignUpEmail';
import { IUserSignUpData } from '@/types/authentication/signup';
import useAppDispatch from '@/hooks/useAppDispatch';
import { register } from '@/store/actions/user';
import useAppSelector from '@/hooks/useAppSelector';
import { userSelector } from '@/store/selectors/user';

const SignUpPage = styled(Page)`
	background-color: ${({ theme }) => theme.colors.gray.lightest100};
	display: flex;
	flex-direction: column;
`;

const SignUp: NextPage = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const [isShowSignUpWithEmail, setIsShowSignUpWithEmail] = useState(false);

	const userState = useAppSelector(userSelector);

	const toogleShowSignUpWithEmail = () => {
		return setIsShowSignUpWithEmail(!isShowSignUpWithEmail);
	};

	const onSubmitSignupEmail = (userData: IUserSignUpData) => {
		dispatch(
			register({
				name: userData.name,
				email: userData.email,
				password: userData.password,
			})
		).then(({ type }) => {
			if (type === 'user/register/fulfilled') {
				router.push('/dashboard');
			}
		});
	};

	return (
		<>
			<Head>
				<title>Sign Up</title>
			</Head>
			<SignUpPage>
				<Navbar />
				{isShowSignUpWithEmail ? (
					<SignUpEmail
						isLoading={userState.loading}
						error={userState.error}
						onSubmit={onSubmitSignupEmail}
						anotherMethodsOnClick={toogleShowSignUpWithEmail}
					/>
				) : (
					<SignUpOpts withEmailOnClick={toogleShowSignUpWithEmail} />
				)}
			</SignUpPage>
		</>
	);
};

export default SignUp;
