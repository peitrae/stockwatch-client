/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'next/link';

import mediaQueries from '@/styles/mediaQueries';
import { mr16, mr8 } from '@/styles/margin';
import useWindowSize from '@/hooks/useWindowSize';
import Button from '../inputs/Button';
import Flex from './Flex';
import LogoLink from '../ui/LogoLink';
import IconButton from '../inputs/Button/IconButton';
import { MenuIcon, SearchIcon, UserIcon } from '../icons';


interface AuthenticatedNavbarProps {
	menuOnClick: () => void;
}

const BaseNavbarWrapper = styled.nav`
	background-color: ${({ theme }) => theme.colors.white.default};
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NavbarWrapper = styled(BaseNavbarWrapper)`
	height: min-content;
	padding: 13px 48px;
	box-shadow: ${({ theme }) => theme.elevations.one};

	${mediaQueries.sm} {
		padding: 13px 32px;
	}
`;

const AuthenticatedNavbarWrapper = styled(BaseNavbarWrapper)`
	height: 64px;
	width: 100vw;
	padding: 0 48px 0 116px;

	${mediaQueries.sm} {
		padding: 0 32px 0 100px;
	}

	${mediaQueries.xs} {
		padding: 0 32px 0 24px;
	}
`;

const SmallScreenButtonCSS = css`
	display: none;

	${mediaQueries.xs} {
		display: initial;
	}
`;

const Radius50 = css`
	border-radius: 50%;
`;

export const Navbar = () => {
	const windowSize = useWindowSize();
	const isMobileScreen = !!windowSize.width && windowSize.width < 480;

	return (
		<NavbarWrapper>
			<LogoLink href="/" iconOnly={isMobileScreen} />
			<Flex>
				<Link href="/login" passHref>
					<Button as="a" css={mr16} variant="shadow">
						Login
					</Button>
				</Link>
				<Link href="/signup" passHref>
					<Button as="a">Get Started</Button>
				</Link>
			</Flex>
		</NavbarWrapper>
	);
};

export const AuthenticatedNavbar: React.FC<AuthenticatedNavbarProps> = ({
	menuOnClick,
}) => (
	<AuthenticatedNavbarWrapper>
		<Flex>
			<IconButton
				css={[SmallScreenButtonCSS, mr16]}
				variant="text"
				onClick={menuOnClick}
			>
				<MenuIcon />
			</IconButton>
			<LogoLink href="/dashboard" iconOnly />
		</Flex>
		<Flex>
			<IconButton
				css={[SmallScreenButtonCSS, mr8]}
				variant="text"
				color="secondary"
				onClick={() => {}}
			>
				<SearchIcon />
			</IconButton>
			<IconButton css={Radius50} variant="shadow" onClick={() => {}}>
				<UserIcon />
			</IconButton>
		</Flex>
	</AuthenticatedNavbarWrapper>
);

export default Navbar;
