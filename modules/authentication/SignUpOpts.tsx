import { EnvelopeIcon, FacebookIcon, GoogleIcon } from '@/components/icons';
import Link from '@/components/typhographies/Link';
import Text from '@/components/typhographies/Text';
import Flex from '@/components/layouts/Flex';
import { mb16, my24 } from '@/styles/margin';
import Auth, { AuthCSS } from './_Auth';

interface ISignUpOpts {
	withEmailOnClick: () => void;
}

const SignUpOpts: React.FC<ISignUpOpts> = ({ withEmailOnClick }) => (
	<Auth.Card>
		<Auth.InnerWrapper>
			<Text as="h1" type="sans-serif">
				Sign Up
			</Text>
			<Auth.DescriptionWrapper>
				<Text css={AuthCSS.secondaryLighterColor} type="sans-serif">
					Already have an account?&nbsp;
				</Text>
				<Link weight="700" href="/login">
					Login
				</Link>
			</Auth.DescriptionWrapper>
			<Auth.Button
				css={[AuthCSS.google, mb16]}
				startIcon={<GoogleIcon />}
				size="lg"
				onClick={() => {}}
			>
				Sign Up with Google
			</Auth.Button>
			<Auth.Button
				css={AuthCSS.facebook}
				startIcon={<FacebookIcon />}
				size="lg"
				onClick={() => {}}
			>
				Sign Up with Facebook
			</Auth.Button>
			<Flex css={my24} justifyContent="center" alignItems="center">
				<Auth.VLine />
				<Text css={AuthCSS.secondaryLighterColor}>or</Text>
				<Auth.VLine />
			</Flex>
			<Auth.Button
				startIcon={<EnvelopeIcon />}
				size="lg"
				onClick={withEmailOnClick}
			>
				Sign Up with Email
			</Auth.Button>
		</Auth.InnerWrapper>
	</Auth.Card>
);

export default SignUpOpts;
