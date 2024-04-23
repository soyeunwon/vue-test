import axios from 'axios';

function create(baseURL, options) {
	return axios.create({
		baseURL,
		...options,
	});
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);
