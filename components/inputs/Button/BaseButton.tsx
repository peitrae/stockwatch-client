import { SyntheticEvent } from 'react';
import styled from '@emotion/styled';

import contentAlign from './utils/_contentAlign';
import buttonSize from './utils/_size';
import variantsAndColors from './utils/_variantsAndColors';

export interface BaseButtonProps {
	href?: string;
	ref?: React.Ref<HTMLButtonElement & HTMLAnchorElement>;
	size?: 'md' | 'lg';
	variant?: 'solid' | 'shadow' | 'text';
	color?: 'primary' | 'secondary';
	align?: 'left' | 'center' | 'right';
	onClick?: (e: SyntheticEvent) => Promise<void> | void;
}

const BaseButton = styled.button<BaseButtonProps>`
	font-family: 'Nunito', sans-serif;
	font-size: 16px;
	display: flex;
	align-items: center;
	justify-content: ${({ align = 'center' }) => contentAlign[align]};
	transition: background ease 0.1s;

	${({ size = 'md' }) => buttonSize[size]}
	${({ variant = 'solid', color = 'primary' }) => {
		return variantsAndColors[variant][color];
	}}
`;

export default BaseButton;
