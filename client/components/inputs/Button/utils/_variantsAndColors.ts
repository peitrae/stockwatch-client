import { css, SerializedStyles, Theme } from '@emotion/react';

// Solid

interface ThemeProps {
	theme: Theme;
}

const solidPrimary = ({ theme }: ThemeProps) => css`
	color: ${theme.colors.white.default};
	fill: ${theme.colors.white.default};
	stroke: ${theme.colors.white.default};
	background-color: ${theme.colors.primary.default};

	&:hover {
		background-color: ${theme.colors.primary.darker};
	}
`;

const solidSecondary = ({ theme }: ThemeProps) => css`
	color: ${theme.colors.white.default};
	fill: ${theme.colors.white.default};
	stroke: ${theme.colors.white.default};
	background-color: ${theme.colors.gray.darker};

	&:hover {
		background-color: ${theme.colors.gray.darkest};
	}
`;

// Shadow

const shadowPrimary = ({ theme }: ThemeProps) => css`
	color: ${theme.colors.primary.default};
	fill: ${theme.colors.primary.default};
	stroke: ${theme.colors.primary.default};
	background-color: ${theme.colors.primary.lightest200};

	&:hover {
		background-color: ${theme.colors.primary.lightest100};
	}
`;

const shadowSecondary = ({ theme }: ThemeProps) => css`
	color: ${theme.colors.gray.darkest};
	fill: ${theme.colors.gray.darkest};
	stroke: ${theme.colors.gray.darkest};
	background-color: ${theme.colors.secondary.lightest300};

	&:hover {
		background-color: ${theme.colors.secondary.lightest200};
	}
`;

// Text

const textPrimary = ({ theme }: ThemeProps) => css`
	color: ${theme.colors.primary.default};
	fill: ${theme.colors.primary.default};
	stroke: ${theme.colors.primary.default};

	&:hover {
		background-color: ${theme.colors.primary.lightest100};
	}
`;

const textSecondary = ({ theme }: ThemeProps) => css`
	color: ${theme.colors.gray.darker};
	fill: ${theme.colors.gray.darker};
	stroke: ${theme.colors.gray.darker};

	&:hover {
		background-color: ${theme.colors.gray.lightest200};
	}
`;

const variantsAndColors = {
	solid: {
		primary: solidPrimary,
		secondary: solidSecondary,
	},
	shadow: {
		primary: shadowPrimary,
		secondary: shadowSecondary,
	},
	text: {
		primary: textPrimary,
		secondary: textSecondary,
	},
};

export default variantsAndColors;
