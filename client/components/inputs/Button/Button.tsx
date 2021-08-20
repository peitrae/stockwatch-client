/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { SerializedStyles, Theme } from '@emotion/react';

import mediaQueries from '@/styles/mediaQueries';
import { BaseButtonProps } from './BaseButton';
import { BaseButton } from './';
import { ml10, mr10 } from '@/styles/margin';
import { ElementType } from 'react';
import TCSSHelper from '@/types/TCSSHelper';

interface ButtonProps extends BaseButtonProps {
	as?: ElementType<any>;
	css?: TCSSHelper;
	className?: string;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	onClick: () => void;
}

const IconWrapper = styled.i`
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

const Button: React.FC<ButtonProps> = (props) => (
	<BaseButton as={props.as} href={props.href} {...props}>
		{props.startIcon && <IconWrapper css={mr10}>{props.startIcon}</IconWrapper>}
		{props.children}
		{props.endIcon && <IconWrapper css={ml10}>{props.endIcon}</IconWrapper>}
	</BaseButton>
);

export default Button;
