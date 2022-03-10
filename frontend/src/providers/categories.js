import { apiUrl } from '../config.js';

export const getCategory = async(id) => {
    try {

        const response = await fetch(`${apiUrl}/api/category/id/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok || !response) {
            throw new Error(response.message);
        }
        let data = response.json().then(({ message }) => { return message[0]; });
        return data;
    } catch (err) {
        console.log(err);
        return { error: err.response.data.message || err.message };
    }
};