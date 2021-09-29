/** @jsxImportSource @emotion/react */

import React from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { CSS } from '@/types/style';

interface ProgressIndeterminateProps {
	css?: CSS;
	className?: string;
}

const increase = keyframes`
  from { left: -5%; width: 5%; }
  to { left: 130%; width: 100%;}
`;

const decrease = keyframes`
  from { left: -80%; width: 80%; }
  to { left: 110%; width: 10%;}
`;

const ProgressWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 12px;
	overflow-x: hidden;
`;

const ProgressBar = styled.div`
	position: absolute;
	opacity: 0.3;
	background: ${({ theme }) => theme.colors.primary.lighter};
	width: 150%;
	height: 5px;
`;

const ProgressLine = styled.div`
	position: absolute;
	background: ${({ theme }) => theme.colors.primary.lighter};
	height: 5px;
`;

const increaseCSS = css`
	animation: ${increase} 2s infinite;
`;

const decreaseCSS = css`
	animation: ${decrease} 2s 0.5s infinite;
`;

const ProgressIndeterminate: React.FC<ProgressIndeterminateProps> = ({
	css,
	className,
}) => (
	<ProgressWrapper
		css={css}
		className={className}
		data-testid="progress-indeterminate"
	>
		<ProgressBar />
		<ProgressLine css={increaseCSS} />
		<ProgressLine css={decreaseCSS} />
	</ProgressWrapper>
);

export default ProgressIndeterminate;
