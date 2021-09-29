import { css } from '@emotion/react';

import { Theme } from '@/types/style';

const secondary = ({ theme }: Theme) => css`
	border: 1px solid ${theme.colors.secondary.lightest100};

	&:hover {
		border: 1px solid ${theme.colors.secondary.lighter};
		background-color: ${theme.colors.gray.lightest200};
    box-shadow: 0 0 0 3px ${theme.colors.gray.lightest200};
	}

	&:focus {
		border: 1px solid ${theme.colors.secondary.default};
		box-shadow: 0 0 0 3px ${theme.colors.secondary.lightest200};
	}
`;

const danger = ({ theme }: Theme) => css`
	border: 1px solid ${theme.colors.red.default};

	&:hover {
		border: 1px solid ${theme.colors.red.darker};
		box-shadow: 0 0 0 3px ${theme.colors.red.lightest200};
	}

	&:focus {
		border: 1px solid ${theme.colors.red.default};
		box-shadow: 0 0 0 2px ${theme.colors.secondary.lightest200};
	}
`;

const inputColors = {
	secondary,
	danger,
};

export default inputColors;
