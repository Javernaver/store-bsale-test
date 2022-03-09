import { apiUrl } from '../config.js';

export const getProducts = async({ searchKeyword = '' }) => {
    try {
        let queryString = 'all';
        if (searchKeyword) queryString = `${searchKeyword}`;

        const response = await fetch(`http://localhost:5000/api/product/${queryString}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok || !response) {
            throw new Error(response.message);
        }
        let data = response.json().then(({ message }) => { return message; });
        return data;
    } catch (err) {
        console.log(err);
        return { error: err.response.data.message || err.message };
    }
};