import { css } from '@emotion/react';

const sans = css`
	font-family: 'Nunito Sans', sans-serif;
`;

const sansSerif = css`
	font-family: 'Nunito', sans-serif;
`;

const fontTypes = {
	sans,
	'sans-serif': sansSerif,
};

export default fontTypes;
