import styled from '@emotion/styled';

import contentAlign from './utils/_contentAlign';
import buttonSize from './utils/_size';
import variantsAndColors from './utils/_variantsAndColors';

export interface IBaseButton {
	href?: string;
	ref?: React.Ref<HTMLButtonElement & HTMLAnchorElement>;
	size?: 'md' | 'lg';
	variant?: 'solid' | 'shadow' | 'text';
	color?: 'primary' | 'secondary';
	align?: 'left' | 'center' | 'right';
	onClick?: () => void;
}

const BaseButton = styled.button<IBaseButton>`
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
