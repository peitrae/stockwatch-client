import { css } from '@emotion/react';

import IThemeHelper from '@/types/IThemeHelper';

const secondaryColor = ({ theme }: IThemeHelper) => css`
	color: ${theme.colors.secondary.darkest};
`;

const dangerColor = ({ theme }: IThemeHelper) => css`
	color: ${theme.colors.red.default};
`;

const fontColors = {
	secondary: secondaryColor,
	danger: dangerColor,
};

export default fontColors;
