import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { EnvelopeIcon, FacebookIcon, GoogleIcon } from '@/components/icons';
import Button from '@/components/inputs/Button';
import Card from '@/components/layouts/Card';
import Link from '@/components/typhographies/Link';
import Text from '@/components/typhographies/Text';
import Flex from '@/components/layouts/Flex';
import { mx24 } from '@/styles/margin';
import mediaQueries from '@/styles/mediaQueries';

const SignUpCard = styled(Card)`
	position: relative;
	top: 32px;
	left: 50%;
	transform: translateX(-50%);
	padding: 40px 32px;
	display: flex;
	justify-content: center;

	${mediaQueries.xs} {
		top: 2px;
		width: 100vw;
		height: calc(100vh - 76px);
		box-shadow: none;
		border-radius: 0;
	}
`;

const SignUpWrapper = styled.div`
	width: 280px;

	${mediaQueries.xs} {
    max-width: 280px;
		width: 100%;
	}
`;

const DescriptionWrapper = styled.div`
	margin: 6px 0 32px 0;
`;

const SignUpButton = styled(Button)`
	width: 100%;
`;

const Line = styled.hr`
	background-color: ${({ theme }) => theme.colors.secondary.lighter};
	width: 117px;
`;

const LoginCSS = (theme: Theme) => css`
	color: ${theme.colors.secondary.darkest};
`;

const SecondaryLighterColorCSS = (theme: Theme) => css`
	color: ${theme.colors.secondary.lighter};
`;

const GoogleCSS = css`
	background-color: #3e7ee8;
	margin-bottom: 16px;

	&:hover {
		background-color: #2e5eae;
	}
`;

const FacebookCSS = css`
	background-color: #3b5998;

	&:hover {
		background-color: #2c4372;
	}
`;

const SignUpOpts: React.FC = () => (
	<SignUpCard>
		<SignUpWrapper>
			<Text as="h1" fontType="sans-serif">
				Sign Up
			</Text>
			<DescriptionWrapper>
				<Text css={SecondaryLighterColorCSS} fontType="sans-serif">
					Already have an account?&nbsp;
				</Text>
				<Link css={LoginCSS} href="/login">
					Login
				</Link>
			</DescriptionWrapper>
			<SignUpButton css={GoogleCSS} startIcon={<GoogleIcon />} size="lg">
				Sign Up with Google
			</SignUpButton>
			<SignUpButton css={FacebookCSS} startIcon={<FacebookIcon />} size="lg">
				Sign Up with Facebook
			</SignUpButton>
			<Flex css={mx24} justifyContent="center" alignItems="center">
				<Line />
				<Text css={SecondaryLighterColorCSS}>or</Text>
				<Line />
			</Flex>
			<SignUpButton startIcon={<EnvelopeIcon />} size="lg">
				Sign Up with Email
			</SignUpButton>
		</SignUpWrapper>
	</SignUpCard>
);

export default SignUpOpts;
