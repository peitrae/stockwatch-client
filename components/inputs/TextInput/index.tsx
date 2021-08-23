/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';

import TCSSHelper from '@/types/TCSSHelper';
import Text from '../../typhographies/Text';
import { size, colors } from './styles';

interface IInput {
	css?: TCSSHelper;
	type?: 'text' | 'email' | 'password';
	inputSize?: 'md' | 'lg';
	inputColor?: 'secondary';
}

interface ITextInput extends IInput {
	label: string;
	id: string;
	placeholder: string;
	className?: string;
}

const Label = styled(Text)`
	display: block;
	font-size: 12px;
	margin-bottom: 6px;
	width: fit-content;
`;

const Input = styled.input<IInput>`
	border: 1px solid ${({ theme }) => theme.colors.secondary.lightest100};
	color: ${({ theme }) => theme.colors.secondary.darker};
	background-color: ${({ theme }) => theme.colors.gray.lightest300};
	font-size: 16px;
	width: 100%;
	transition: border 0.15s, box-shadow 0.15s;

	${({ inputSize = 'md' }: IInput) => size[inputSize]}
	${({ inputColor = 'secondary' }) => colors[inputColor]}

	&::placeholder {
		color: ${({ theme }) => theme.colors.secondary.lightest100};
		font-family: 'Nunito Sans', sans-serif;
		font-weight: 400;
	}

	&:hover {
		border: 1px solid ${({ theme }) => theme.colors.secondary.lighter};
		background-color: ${({ theme }) => theme.colors.gray.lightest200};
	}

	&:focus {
		outline: none;
	}
`;

const TextInput: React.FC<ITextInput> = ({
	label,
	id,
	className,
	css,
	inputSize = 'md',
	type = 'text',
	placeholder = '',
	inputColor = 'secondary',
}) => (
	<div css={css} className={className}>
		{label && (
			<Label as="label" type="sans" htmlFor={id}>
				{label}
			</Label>
		)}
		<Input
			type={type}
			id={id}
			placeholder={placeholder}
			inputSize={inputSize}
			inputColor={inputColor}
		/>
	</div>
);

export default TextInput;
