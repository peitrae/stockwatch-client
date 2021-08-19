import { css } from '@emotion/react';

import mediaQueries from '@/styles/mediaQueries';

const lg = css`
	height: 44px;
	padding: 10px 16px;
	border-radius: 12px;
	font-weight: 700;
`;

const md = css`
	height: 38px;
	padding: 8px 14px;
	border-radius: 10px;
	font-weight: 700;

	${mediaQueries.xs} {
		height: 44px;
	}
`;

const buttonSize = {
	lg,
	md,
};

export default buttonSize;
