import styled from '@emotion/styled';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

import Text, { TextProps } from './Text';

type TLink = NextLinkProps & TextProps;

const BaseLink = styled(Text)`
	color: ${({ theme }) => theme.colors.accentOne.default};
  
	&: hover {
		color: ${({ theme }) => theme.colors.accentOne.darkest};
	}
`;

const Link: React.FC<TLink> = (props) => (
	<NextLink href={props.href} passHref>
		<BaseLink as="a" {...props}>
			{props.children}
		</BaseLink>
	</NextLink>
);

export default Link;
