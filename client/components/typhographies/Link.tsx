/** @jsxImportSource @emotion/react */

import { Interpolation, Theme } from '@emotion/react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
	css?: Interpolation<Theme>;
	className?: string;
}

const Link: React.FC<LinkProps> = ({ href, css, className, children }) => (
	<NextLink href={href}>
		<a css={css} className={className}>
			{children}
		</a>
	</NextLink>
);

export default Link;
