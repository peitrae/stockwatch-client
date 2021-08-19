import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/react';

import mediaQueries from '@/styles/mediaQueries';
import { BaseButtonProps } from './BaseButton';
import { BaseButton } from './';
import { ml10, mr10 } from '@/styles/margin';

interface ButtonProps extends BaseButtonProps {
	children: React.ReactNode;
	className?: string;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
}

interface CSSProps {
	css?: SerializedStyles;
}

const IconWrapper = styled.i<CSSProps>`
	width: 18px;
	height: 18px;

	${mediaQueries.xs} {
		width: 24px;
		height: 24px;
	}

	.icon {
		width: inherit;
		height: inherit;
	}
`;

export const Button: React.FC<ButtonProps> = (props) => (
	<BaseButton as={props.as} href={props.href} {...props}>
		{props.startIcon && <IconWrapper css={mr10}>{props.startIcon}</IconWrapper>}
		{props.children}
		{props.endIcon && <IconWrapper css={ml10}>{props.endIcon}</IconWrapper>}
	</BaseButton>
);

export default Button;
