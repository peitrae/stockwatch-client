import styled from '@emotion/styled';

import mediaQueries from '@/styles/mediaQueries';
import { mr16 } from '@/styles/margin';
import useWindowSize from '@/hooks/useWindowSize';
import Button from '../inputs/Button';
import Flex from './Flex';
import LogoLink from '../ui/LogoLink';

const NavbarWrapper = styled.nav`
	width: 100vw;
	height: fit-content;
	background-color: ${({ theme }) => theme.colors.white.default};
	padding: 13px 48px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: ${({ theme }) => theme.elevations.one};

	${mediaQueries.sm} {
		padding: 13px 32px;
	}
`;

export const Navbar = () => {
	const windowSize = useWindowSize();
	const isMobileScreen = !!windowSize.width && windowSize.width < 480;

	return (
		<NavbarWrapper>
			<LogoLink href="/" iconOnly={isMobileScreen} />
			<Flex>
				<Button as="a" href="/login" css={mr16} variant="shadow">
					Login
				</Button>
				<Button as="a" href="/signup">
					Get Started
				</Button>
			</Flex>
		</NavbarWrapper>
	);
};

export default Navbar;
