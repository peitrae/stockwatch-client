import styled from '@emotion/styled';

import { tags, fontColors, fontTypes } from './styles';
import TCSSHelper from '@/types/TCSSHelper';

export interface IText {
	as?: 'h1' | 'span' | 'p' | 'a' | 'label';
	css?: TCSSHelper;
	type?: 'sans' | 'sans-serif';
	color?: 'secondary' | 'danger';
	weight?: '600' | '700' | '800' | '900';
	htmlFor?: string;
}

const Text = styled.span<IText>`
	${({ as = 'span' }: IText) => tags[as]}
	${({ type = 'sans-serif' }) => fontTypes[type]}
  ${({ color = 'secondary' }) => fontColors[color]}
  font-weight: ${({ weight }) => [weight]}
`;

export default Text;
