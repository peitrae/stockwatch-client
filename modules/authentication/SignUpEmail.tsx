/** @jsxImportSource @emotion/react */

import Link from '@/components/typhographies/Link';
import Text from '@/components/typhographies/Text';
import { mb16, mb32 } from '@/styles/margin';
import TextInput from '@/components/inputs/TextInput';
import Auth, { AuthCSS } from './_Auth';

interface ISignUpEmail {
	anotherMethodsOnClick: () => void;
}

const SignUpEmail: React.FC<ISignUpEmail> = ({ anotherMethodsOnClick }) => (
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
			{/* <Auth.Error css={mb16} color="danger">This is an error message</Auth.Error> */}
			<form css={mb32}>
				<TextInput
					id="fullname"
					label="Full Name"
					css={mb16}
					placeholder="Enter your full name"
					inputSize="lg"
				/>
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
				<TextInput
					id="confirm-password"
					label="Confirm Password"
					type="password"
					placeholder="Enter your password again"
					inputSize="lg"
				/>
			</form>
			<Auth.Button size="lg" css={mb16} onClick={() => {}}>
				Sign Up with Email
			</Auth.Button>
			<Auth.Button
				size="lg"
				variant="shadow"
				color="secondary"
				onClick={anotherMethodsOnClick}
			>
				Sign Up with another methods
			</Auth.Button>
		</Auth.InnerWrapper>
	</Auth.Card>
);

export default SignUpEmail;
