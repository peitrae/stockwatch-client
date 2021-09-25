import { css } from '@emotion/react';

import { Theme } from '@/types/style';

const secondaryColor = ({ theme }: Theme) => css`
	color: ${theme.colors.secondary.darkest};
`;

const dangerColor = ({ theme }: Theme) => css`
	color: ${theme.colors.red.default};
`;

const fontColors = {
	secondary: secondaryColor,
	danger: dangerColor,
};

export default fontColors;
