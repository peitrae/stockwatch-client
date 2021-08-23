import { ThemeProvider } from '@emotion/react';

import colors from './_colors';
import elevations from './_elevations';

export const theme = { colors, elevations };

const Theme: React.FC = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
