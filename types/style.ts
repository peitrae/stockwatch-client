import { Theme as EmotionTheme, SerializedStyles } from '@emotion/react';

export interface Theme {
	theme: EmotionTheme;
}

export type CSS =
	| SerializedStyles
	| SerializedStyles[]
	| ((theme: EmotionTheme) => SerializedStyles);
