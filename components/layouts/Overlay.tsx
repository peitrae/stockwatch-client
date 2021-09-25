import styled from '@emotion/styled';

interface OverlayProps {
	opacity?: string | number;
}

const Overlay = styled.div<OverlayProps>`
	width: 100%;
	height: 100%;
	background-color: rgba(129, 148, 146, ${({ opacity = '0.25' }) => opacity});
	position: absolute;
	top: 0;
	left: 0;
`;

Overlay.displayName = 'Overlay';

export default Overlay;
