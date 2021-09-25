import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Page from '@/components/layouts/Page';
import Navbar from '@/components/layouts/Navbar';
import LoginSection from '@/modules/authentication/Login';
import useAppSelector from '@/hooks/useAppSelector';
import useAppDispatch from '@/hooks/useAppDispatch';
import { login } from '@/store/actions/user';
import { userSelector } from '@/store/selectors/user';
import { UserLoginData } from '@/types/authentication';

const LoginPage = styled(Page)`
	background-color: ${({ theme }) => theme.colors.gray.lightest100};
	display: flex;
	flex-direction: column;
`;

const Login: NextPage = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const user = useAppSelector(userSelector);

	const onSubmitLogin = (loginData: UserLoginData) => {
		dispatch(login(loginData)).then(({ type }) => {
			if (type === 'user/login/fulfilled') {
				router.push('/dashboard');
			}
		});
	};

	return (
		<LoginPage>
			<Navbar />
			<LoginSection
				error={user.error}
				isLoading={user.loading}
				onSubmit={onSubmitLogin}
			/>
		</LoginPage>
	);
};

export default Login;
