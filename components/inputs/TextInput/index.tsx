/** @jsxImportSource @emotion/react */

import { ChangeEvent } from 'react';
import styled from '@emotion/styled';

import Text from '../../typhographies/Text';
import { size, colors } from './styles';
import { mb6, mt6 } from '@/styles/margin';
import { CSS } from '@/types/style';

interface InputProps {
	css?: CSS;
	type?: 'text' | 'email' | 'password';
	inputSize?: 'md' | 'lg';
	inputColor?: 'secondary' | 'danger';
}

interface TextInputProps extends InputProps {
	label: string;
	id: string;
	name?: string;
	placeholder: string;
	className?: string;
	value?: string;
	error?: string | null;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SmallText = styled(Text)`
	display: block;
	font-size: 12px;
	width: max-content;
`;

const Input = styled.input<InputProps>`
	color: ${({ theme }) => theme.colors.secondary.darker};
	background-color: ${({ theme }) => theme.colors.gray.lightest300};
	font-size: 16px;
	width: 100%;
	transition: border 0.15s, box-shadow 0.15s;

	${({ inputSize = 'md' }: InputProps) => size[inputSize]}
	${({ inputColor = 'secondary' }) => colors[inputColor]}

	&::placeholder {
		color: ${({ theme }) => theme.colors.secondary.lightest100};
		font-family: 'Nunito Sans', sans-serif;
		font-weight: 400;
	}

	&:focus {
		outline: none;
	}
`;

const TextInput: React.FC<TextInputProps> = ({
	label,
	id,
	name,
	className,
	css,
	inputSize = 'md',
	type = 'text',
	placeholder = '',
	inputColor = 'secondary',
	value = "",
	error,
	onChange = () => {},
}) => (
	<div css={css} className={className}>
		{label && (
			<SmallText css={mb6} as="label" type="sans" htmlFor={id}>
				{label}
			</SmallText>
		)}
		<Input
			type={type}
			id={id}
			name={name}
			placeholder={placeholder}
			inputSize={inputSize}
			inputColor={error ? 'danger' : inputColor}
			value={value}
			onChange={onChange}
		/>
		{error && (
			<SmallText css={mt6} color="danger">
				{error}
			</SmallText>
		)}
	</div>
);

export default TextInput;
