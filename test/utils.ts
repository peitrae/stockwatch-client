export const generateRandomString = (): string => {
	return Math.random().toString(36).replace('0.', '');
};

export const generateRandomEmail = () => {
	return `${generateRandomString()}@${generateRandomString()}.com`;
};

