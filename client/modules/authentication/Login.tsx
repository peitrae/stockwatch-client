/** @jsxImportSource @emotion/react */

import Link from '@/components/typhographies/Link';
import Text from '@/components/typhographies/Text';
import { mb16, mb32, my24 } from '@/styles/margin';
import TextInput from '@/components/inputs/TextInput';
import Auth, { AuthCSS } from './_Auth';
import { GoogleIcon, FacebookIcon } from '@/components/icons';
import Flex from '@/components/layouts/Flex';

const Login: React.FC = () => (
	<Auth.Card>
		<Auth.InnerWrapper>
			<Text as="h1" type="sans-serif">
				Login
			</Text>
			<Auth.DescriptionWrapper>
				<Text css={AuthCSS.secondaryLighterColor} type="sans-serif">
					Don&apos;t have an account?&nbsp;
				</Text>
				<Link weight="700" href="/signup">
					Sign up now
				</Link>
			</Auth.DescriptionWrapper>
			{/* <Auth.Error css={mb16} color="danger">This is an error message</Auth.Error> */}
			<Auth.Button
				css={[AuthCSS.google, mb16]}
				startIcon={<GoogleIcon />}
				size="lg"
				onClick={() => {}}
			>
				Login with Google
			</Auth.Button>
			<Auth.Button
				css={AuthCSS.facebook}
				startIcon={<FacebookIcon />}
				size="lg"
				onClick={() => {}}
			>
				Login with Facebook
			</Auth.Button>
			<Flex css={my24} justifyContent="center" alignItems="center">
				<Auth.VLine />
				<Text css={AuthCSS.secondaryLighterColor}>or</Text>
				<Auth.VLine />
			</Flex>
			<form css={mb32}>
				<TextInput
					id="email"
					label="Email"
					css={mb16}
					type="email"
					placeholder="Enter your email"
					inputSize="lg"
				/>
				<TextInput
					id="password"
					label="Password"
					css={mb16}
					type="password"
					placeholder="Enter your password"
					inputSize="lg"
				/>
			</form>
			<Auth.Button size="lg" onClick={() => {}}>
				Login
			</Auth.Button>
		</Auth.InnerWrapper>
	</Auth.Card>
);

export default Login;
