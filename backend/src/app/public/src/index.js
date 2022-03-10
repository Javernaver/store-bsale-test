import CategoriesScreen from "./screens/CategoriesScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import { createNav } from "./nav.js";
import { parseRequestUrl } from './utils.js';

const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen,
    '/drinks': CategoriesScreen,
    '/energy-drinks': CategoriesScreen,
    '/snacks': CategoriesScreen,
    '/alcohol-drinks': CategoriesScreen,
    '/discounted': CategoriesScreen,
};

const router = async() => {

    createNav.render();
    await createNav.after_render();
    const request = parseRequestUrl();
    const parseUrl =
        (request.resource ? `/${request.resource}` : '/') +
        (request.id ? '/:id' : '') +
        (request.verb ? `/${request.verb}` : '');
    //console.log(request);
    const screen = routes[parseUrl] ? routes[parseUrl] : routes['/'];
    const main = document.getElementById('products-list');
    main.innerHTML = await screen.render();
};


window.addEventListener('load', router);
window.addEventListener('hashchange', router);