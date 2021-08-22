import { css } from '@emotion/react';
import styled from '@emotion/styled';

import BaseButton, { IBaseButton } from './BaseButton';

const lgWidth = css`
	width: 44px;
	padding: 0;
`;

const mdWidth = css`
	width: 38px;
	padding: 9px;

	.icon {
		width: 20px;
		height: 20px;
	}
`;

const buttonWidth = {
	lg: lgWidth,
	md: mdWidth,
};

const IconBaseButton = styled(BaseButton)`
	${({ size = 'md' }) => buttonWidth[size]}
`;

const IconButton: React.FC<IBaseButton> = ({ variant, children, onClick }) => (
	<IconBaseButton variant={variant} onClick={onClick}>
		{children}
	</IconBaseButton>
);

export default IconBaseButton;
