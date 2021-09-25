import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

interface FlexProps {
	css?: SerializedStyles;
	justifyContent?:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
		| 'initial'
		| 'inherit';
	alignItems?: 'strech' | 'center' | 'start' | 'end';
}

const Flex = styled.div<FlexProps>`
	display: flex;
	justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
	align-items: ${({ alignItems = 'strech' }) => alignItems};
`;

export default Flex;
