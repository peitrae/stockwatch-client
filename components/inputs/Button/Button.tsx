/** @jsxImportSource @emotion/react */

import React from 'react';
import styled from '@emotion/styled';

import mediaQueries from '@/styles/mediaQueries';
import { IBaseButton } from './BaseButton';
import { BaseButton } from './';
import { ml10, mr10 } from '@/styles/margin';
import { ElementType } from 'react';
import TCSSHelper from '@/types/TCSSHelper';

export interface IButton extends IBaseButton {
	as?: ElementType<any>;
	css?: TCSSHelper;
	className?: string;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
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

const Button: React.FC<IButton> = React.forwardRef((props, ref) => (
	<BaseButton as={props.as} href={props.href} ref={ref} {...props}>
		{props.startIcon && <IconWrapper css={mr10}>{props.startIcon}</IconWrapper>}
		{props.children}
		{props.endIcon && <IconWrapper css={ml10}>{props.endIcon}</IconWrapper>}
	</BaseButton>
));

Button.displayName = 'Button';

export default Button;
