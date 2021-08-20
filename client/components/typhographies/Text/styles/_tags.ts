import { css } from '@emotion/react';

const defaultTag = css`
	font-size: 1rem;
	font-weight: 600;
`;

const h1 = css`
	font-size: 2rem;
	font-weight: 800;
`;

const tags = {
	h1,
	span: defaultTag,
	p: defaultTag,
	a: defaultTag,
	label: defaultTag,
};

export default tags;
