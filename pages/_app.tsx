import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { Provider } from 'react-redux';

import Theme from '@/theme';
import globalStyles from '@/styles/globalStyles';
import store from '@/store/store';

export const GlobalWrapper: React.FC = ({ children }) => (
	<Theme>
		<Global styles={globalStyles} />
		<Provider store={store}>{children}</Provider>
	</Theme>
);

const MyApp = ({ Component, pageProps }: AppProps) => (
	<GlobalWrapper>
		<Component {...pageProps} />
	</GlobalWrapper>
);

export default MyApp;
