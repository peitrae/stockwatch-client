import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import Button from '@/components/inputs/Button';
import Card from '@/components/layouts/Card';
import mediaQueries from '@/styles/mediaQueries';
import Text from '@/components/typhographies/Text';
import Overlay from '@/components/layouts/Overlay';

const AuthCard = styled(Card)`
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	padding: 40px 32px;
	display: flex;
	justify-content: center;
	margin: 32px 0 48px 0;

	${mediaQueries.xs} {
		margin: 2px 0 0 0;
		width: 100vw;
		min-height: calc(100vh - 76px);
		box-shadow: none;
		border-radius: 0;
	}
`;

const AuthOverlay = styled(Overlay)`
	border-radius: 12px;
`;

const AuthInnerWrapper = styled.div`
	width: 300px;

	${mediaQueries.xs} {
		max-width: 300px;
		width: 100%;
	}
`;

const AuthDescriptionWrapper = styled.div`
	margin: 6px 0 32px 0;
`;

const AuthError = styled(Text)`
	font-size: 12px;
	display: block;
	text-align: center;
`;

const AuthButton = styled(Button)`
	width: 100%;
`;

const AuthVLine = styled.hr`
	background-color: ${({ theme }) => theme.colors.secondary.lighter};
	width: 117px;
`;

const AuthSecondaryDarkestColorCSS = (theme: Theme) => css`
	color: ${theme.colors.secondary.darkest};
`;

const AuthSecondaryLighterColorCSS = (theme: Theme) => css`
	color: ${theme.colors.secondary.lighter};
`;

const AuthGoogleCSS = css`
	background-color: #3e7ee8;

	&:hover {
		background-color: #2e5eae;
	}
`;

const AuthFacebookCSS = css`
	background-color: #3b5998;

	&:hover {
		background-color: #2c4372;
	}
`;

const AuthLoadingCSS = css`
	top: 0px;
  border-radius: 50px 50px 0 0;
  z-index: 10;
`;

export const Auth = {
	Card: AuthCard,
	Overlay: AuthOverlay,
	InnerWrapper: AuthInnerWrapper,
	DescriptionWrapper: AuthDescriptionWrapper,
	Error: AuthError,
	Button: AuthButton,
	VLine: AuthVLine,
};

export const AuthCSS = {
	loading: AuthLoadingCSS,
	secondaryDarkestColor: AuthSecondaryDarkestColorCSS,
	secondaryLighterColor: AuthSecondaryLighterColorCSS,
	google: AuthGoogleCSS,
	facebook: AuthFacebookCSS,
};

export default Auth;
