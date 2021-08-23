import { css } from '@emotion/react';

import IThemeHelper from '@/types/IThemeHelper';

const secondary = ({ theme }: IThemeHelper) => css`
	&:focus {
		border: 1px solid ${theme.colors.secondary.default};
		box-shadow: 0 0 0 2px ${theme.colors.secondary.lightest200};
	}
`;

const inputColors = {
	secondary,
};

export default inputColors;
