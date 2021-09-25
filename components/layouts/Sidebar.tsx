/** @jsxImportSource @emotion/react */

import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import mediaQueries from '@/styles/mediaQueries';
import Stack from './Stack';
import Overlay from './Overlay';
import IconButton from '../inputs/Button/IconButton';
import { DashboardIcon, MenuIcon, NewsIcon, WatchlistIcon } from '../icons';
import LogoLink from '../ui/LogoLink';
import Button from '../inputs/Button';
import { mr12 } from '@/styles/margin';
import Text from '../typhographies/Text';
import Flex from './Flex';
import { IconMultiVariantProps } from '@/types';

interface SidebarWrapperProps {
	isExpanded: boolean;
}

interface SidebarProps extends SidebarWrapperProps {
	menuOnClick: () => void;
}

interface NavLinkBaseProps {
	isActive?: boolean;
	isShowLabel?: boolean;
}

interface NavLinkProps extends NavLinkBaseProps {
	href: string;
	leftIcon: React.FC<IconMultiVariantProps>;
}

const SidebarWrapper = styled.aside<SidebarWrapperProps>`
	width: ${({ isExpanded }) => (isExpanded ? 'fit-content' : '68px')};
	height: 100vh;
	padding: 0 12px;
	background-color: ${({ theme }) => theme.colors.primary.lightest200};
	transition: width ease-in-out 0.1s;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1001;

	${mediaQueries.md} {
		width: ${({ isExpanded }) => (isExpanded ? '68px' : 'fit-content')};
	}

	${mediaQueries.xs} {
		left: ${({ isExpanded }) => (isExpanded ? '-68px' : '0')};
	}

	.sidebar-logo {
		display: ${({ isExpanded }) => (isExpanded ? 'block' : 'none')};

		${mediaQueries.md} {
			display: ${({ isExpanded }) => (!isExpanded ? 'block' : 'none')};
		}
	}
`;

const SidebarHeader = styled(Flex)`
	height: 64px;
	padding: 0 14px 0 2px;
`;

const SidebarOverlay = styled(Overlay)`
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1000;

	${mediaQueries.xs} {
		display: block;
	}
`;

const NavLinkList = styled(Stack)`
	position: relative;
	top: 28px;
`;

const NavBaseLink = styled(Button)`
	padding: 4px 2px;
	margin: 4px 0;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.lightest100};
	}
`;

const NavBaseLinkIconWrapper = styled.i<NavLinkBaseProps>`
	width: 38px;
	height: 38px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;

	background-color: ${({ isActive, theme }) =>
		isActive && theme.colors.primary.lightest100};

	.icon {
		width: 20px;
		height: 20px;
	}
`;

const NavBaseLinkLabel = styled(Text)<NavLinkBaseProps>`
	color: inherit;
	margin-left: 10px;
	display: ${({ isShowLabel }) => (isShowLabel ? 'block' : 'none')};

	${mediaQueries.md} {
		display: ${({ isShowLabel }) => (!isShowLabel ? 'block' : 'none')};
	}
`;

const NavLink: React.FC<NavLinkProps> = ({
	href,
	leftIcon: LeftIcon,
	children,
	isActive,
	isShowLabel,
}) => (
	<NextLink href={href} passHref>
		<NavBaseLink
			as="a"
			variant="text"
			size="lg"
			color={isActive ? 'primary' : 'secondary'}
			align="left"
		>
			<NavBaseLinkIconWrapper isActive={isActive}>
				<LeftIcon variant={isActive ? 'solid' : 'outlined'} />
			</NavBaseLinkIconWrapper>
			<NavBaseLinkLabel isShowLabel={isShowLabel} weight="800">
				{children}
			</NavBaseLinkLabel>
		</NavBaseLink>
	</NextLink>
);

const navMenu = [
	{
		label: 'Dashboard',
		href: '/dashboard',
		leftIcon: DashboardIcon,
	},
	{
		label: 'Watchlist',
		href: '/watchlist',
		leftIcon: WatchlistIcon,
	},
	{
		label: 'News',
		href: '/news',
		leftIcon: NewsIcon,
	},
];

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, menuOnClick }) => {
	const { pathname } = useRouter();

	return (
		<>
			<SidebarWrapper isExpanded={isExpanded}>
				<SidebarHeader alignItems="center">
					<IconButton css={mr12} variant="text" onClick={menuOnClick}>
						<MenuIcon />
					</IconButton>
					<LogoLink href="/dashboard" className="sidebar-logo" />
				</SidebarHeader>
				<nav>
					<NavLinkList as="ul">
						{navMenu.map((item) => (
							<li key={item.label}>
								<NavLink
									{...item}
									isActive={pathname === item.href}
									isShowLabel={isExpanded}
								>
									{item.label}
								</NavLink>
							</li>
						))}
					</NavLinkList>
				</nav>
			</SidebarWrapper>
			{!isExpanded && <SidebarOverlay onClick={menuOnClick} />}
		</>
	);
};

export default Sidebar;
