import mediaQueries from '@/styles/mediaQueries';
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

	${mediaQueries.xs} {
		height: 44px;
		width: 44px;
		padding: 12px;
	}
`;

const buttonWidth = {
	lg: lgWidth,
	md: mdWidth,
};

const IconButton = styled(BaseButton)`
	${({ size = 'md' }) => buttonWidth[size]}
`;

export default IconButton;
