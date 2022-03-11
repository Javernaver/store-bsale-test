import { apiUrl } from '../config.js';

// obtener los productos ya sea buscando o bien obteniendolos todos
export const getProducts = async({ searchKeyword = '' }) => {
    try {
        let queryString = 'all';
        if (searchKeyword) queryString = `${searchKeyword}`;

        const response = await fetch(`${apiUrl}/api/product/${queryString}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok || !response) {
            throw new Error(response.message);
        }
        let data = response.json().then(({ message }) => message);
        return data;
    } catch (err) {
        console.log(err);
        return { error: err.response.data.message || err.message };
    }
};


// obtener un producto por su id
export const getProduct = async(id) => {
    try {

        const response = await fetch(`${apiUrl}/api/product/id/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok || !response) {
            throw new Error(response.message);
        }
        let data = response.json().then(({ message }) => message[0]);
        return data;
    } catch (err) {
        console.log(err);
        return { error: err.response.data.message || err.message };
    }
};


// obtener todos los productos de una categoria
export const getProductsCategory = async(id) => {
    try {

        const response = await fetch(`${apiUrl}/api/product/category/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok || !response) {
            throw new Error(response.message);
        }
        let data = response.json().then(({ message }) => message);
        return data;
    } catch (err) {
        console.log(err);
        return { error: err.response.data.message || err.message };
    }
};


// obtener los productos con descuento
export const getDiscountedProducts = async() => {
    try {

        const response = await fetch(`${apiUrl}/api/product/discounted`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok || !response) {
            throw new Error(response.message);
        }
        let data = response.json().then(({ message }) => message);
        return data;
    } catch (err) {
        console.log(err);
        return { error: err.response.data.message || err.message };
    }
};