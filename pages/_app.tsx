import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';

import Theme from '@/theme';
import globalStyles from '@/styles/globalStyles';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<Theme>
		<Global styles={globalStyles} />
		<Component {...pageProps} />
	</Theme>
);
export default MyApp;
