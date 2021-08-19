import styled from '@emotion/styled';

import buttonSize from './utils/_size';
import variantsAndColors from './utils/_variantsAndColors';

export interface BaseButtonProps {
	href?: string;
	size?: 'md' | 'lg';
	variant?: 'solid' | 'shadow' | 'text';
	color?: 'primary' | 'secondary';
}

const BaseButton = styled.button<BaseButtonProps>`
	font-family: 'Nunito', sans-serif;
	font-size: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background ease 0.1s;

	${({ size = 'md' }) => buttonSize[size]}
	${({ variant = 'solid', color = 'primary' }) => {
		return variantsAndColors[variant][color];
	}}
`;

export default BaseButton;
