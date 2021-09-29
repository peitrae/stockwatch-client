/** @jsxImportSource @emotion/react */

import Link from 'next/link';
import styled from '@emotion/styled';

import mediaQueries from '@/styles/mediaQueries';
import { LogoIcon } from '../icons';
import { CSS } from '@/types/style';

interface LogoLinkProps {
	css?: CSS;
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
		height: 44px;
	}
`;

const LogoLink: React.FC<LogoLinkProps> = ({
	href,
	css,
	className,
	iconOnly,
}) => (
	<Link href={href} passHref>
		<LinkWrapper aria-label="Logo" css={css} className={className}>
			<LogoIcon iconOnly={iconOnly} />
		</LinkWrapper>
	</Link>
);

export default LogoLink;
