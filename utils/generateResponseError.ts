import { AxiosError } from 'axios';

function generateResponseError(err: AxiosError) {
	if (err.response) {
		return err.response.data;
	}

	return { name: err.name, message: err.message };
}

export default generateResponseError;
