import { SerializedStyles, Theme } from '@emotion/react';

type TCSSHelper =
	| SerializedStyles
	| SerializedStyles[]
	| ((theme: Theme) => SerializedStyles);

export default TCSSHelper;
