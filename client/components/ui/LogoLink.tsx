import Link from 'next/link';
import styled from '@emotion/styled';

import mediaQueries from '@/styles/mediaQueries';
import { LogoIcon } from '../icons';

interface LogoLinkProps {
	className?: string;
	href: string;
	iconOnly?: boolean;
}

const LinkWrapper = styled.a`
	height: 38px;

	.logo-icon {
		height: 100%;
	}

	${mediaQueries.xs} {
		height: 48px;
	}
`;

const LogoLink: React.FC<LogoLinkProps> = ({ href, className, iconOnly }) => (
	<Link href={href} passHref>
		<LinkWrapper className={className}>
			<LogoIcon iconOnly={iconOnly} />
		</LinkWrapper>
	</Link>
);

export default LogoLink;
