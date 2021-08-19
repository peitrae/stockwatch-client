import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/react';
import { ElementType } from 'react';

import buttonSize from './utils/_size';
import variantsAndColors from './utils/_variantsAndColors';

export interface BaseButtonProps {
	as?: ElementType<any> & string;
	href?: string;
	css?: SerializedStyles;
	size?: 'md' | 'lg';
	variant?: 'solid' | 'shadow' | 'text';
	color?: 'primary' | 'secondary';
}

const BaseButton = styled.button<BaseButtonProps>`
	font-family: 'Nunito', sans-serif;
	font-size: 16px;
	display: flex;
	align-items: center;
	transition: background ease 0.1s;

	${({ size = 'md' }) => buttonSize[size]}
	${({ variant = 'solid', color = 'primary' }) => {
		return variantsAndColors[variant][color];
	}}
`;

export default BaseButton;
