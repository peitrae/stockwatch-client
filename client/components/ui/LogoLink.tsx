/** @jsxImportSource @emotion/react */

import Link from 'next/link';
import styled from '@emotion/styled';

import mediaQueries from '@/styles/mediaQueries';
import { LogoIcon } from '../icons';
import TCSSHelper from '@/types/TCSSHelper';

interface LogoLinkProps {
	css?: TCSSHelper;
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

const LogoLink: React.FC<LogoLinkProps> = ({
	href,
	css,
	className,
	iconOnly,
}) => (
	<Link href={href} passHref>
		<LinkWrapper css={css} className={className}>
			<LogoIcon iconOnly={iconOnly} />
		</LinkWrapper>
	</Link>
);

export default LogoLink;
