import { css } from '@emotion/react';

import mediaQueries from '@/styles/mediaQueries';

const lg = css`
	padding: 11px 16px;
	height: 44px;
	border-radius: 12px;
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

const inputSize = {
	lg,
	md,
};

export default inputSize;
