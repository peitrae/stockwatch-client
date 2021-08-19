import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface IText {
	as?: 'h1' | 'span' | 'p';
	css?: SerializedStyles | ((theme: Theme) => SerializedStyles);
	fontType?: 'sans' | 'sans-serif';
}

const defaultEl = css`
	font-size: 1rem;
	font-weight: 600;
`;

const h1 = css`
	font-size: 2rem;
	font-weight: 800;
`;

const tags = {
	h1,
	span: defaultEl,
	p: defaultEl,
};

const sans = css`
	font-family: 'Nunito Sans', sans-serif;
`;

const sansSerif = css`
	font-family: 'Nunito', sans-serif;
`;

const type = {
	sans,
	'sans-serif': sansSerif,
};

const Text = styled.span<IText>`
	color: ${({ theme }) => theme.colors.secondary.darkest};

	${({ as = 'span' }: IText) => tags[as]}
	${({ fontType = 'sans-serif' }) => type[fontType]}
`;

export default Text;
