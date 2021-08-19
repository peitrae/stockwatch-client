import styled from '@emotion/styled';

const Card = styled.section`
	height: fit-content;
	width: fit-content;
	background-color: ${({ theme }) => theme.colors.white.default};
	border-radius: 12px;
	box-shadow: ${({ theme }) => theme.elevations.two};
`;

export default Card;
