import { css } from '@emotion/react';

const globalStyles = css`
	html,
	body {
		padding: 0;
		margin: 0;
	}

	a {
		color: inherit;
		text-decoration: none;
		cursor: pointer;
	}

	button {
		border: none;
		background: none;
		cursor: pointer;
	}

	h1 {
		margin: 0;
	}

	* {
		box-sizing: border-box;
		font-family: 'Nunito Sans', sans-serif;
	}
`;

export default globalStyles;
