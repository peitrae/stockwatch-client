import styled from '@emotion/styled';

import { tags, fontColors, fontTypes } from './styles';
import { CSS } from '@/types/style';

export interface TextProps {
	as?: 'h1' | 'span' | 'p' | 'a' | 'label';
	css?: CSS;
	type?: 'sans' | 'sans-serif';
	color?: 'secondary' | 'danger';
	weight?: '600' | '700' | '800' | '900';
	htmlFor?: string;
}

const Text = styled.span<TextProps>`
	${({ as = 'span' }: TextProps) => tags[as]}
	${({ type = 'sans-serif' }) => fontTypes[type]}
  ${({ color = 'secondary' }) => fontColors[color]}
  font-weight: ${({ weight }) => [weight]}
`;

export default Text;
