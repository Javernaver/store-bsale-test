import { getDiscountedProducts } from "../providers/products.js";
import { getProducts } from "../providers/products.js";
import { getProductsCategory } from "../providers/products.js";
import { hideLoading } from "../utils.js";
import { parseRequestUrl } from "../utils.js";
import { showLoading } from "../utils.js";

const CategoriesScreen = {
        render: async() => {
                showLoading();
                const { resource } = parseRequestUrl();
                //console.log(resource);
                let products;
                switch (resource) {
                    case 'energy-drinks':
                        products = await getProductsCategory(1);
                        break;
                    case 'alcohol-drinks':
                        products = await getProductsCategory('alcohol');
                        break;
                    case 'drinks':
                        products = await getProductsCategory(4);
                        break;
                    case 'snacks':
                        products = await getProductsCategory(5);
                        break;
                    case 'discounted':
                        products = await getDiscountedProducts();
                        break;
                    default:
                        products = await getProducts('all');
                }
                hideLoading();

                // si no se encontraron productos 
                if (products.length == 0) {
                    return `<h2 class="text-center">No se encontraron productos :c</h2>`;
                }
                // asigna una imagen por defecto a los productos que no tengan imagen
                products.map(product => {
                    if (!product.url_image) {
                        product.url_image = './img/hombre_duff.jpg';
                    }

                    // agregar nuevo atributo con el texto de descuento y actualizar los precios con los descuentos 
                    product.discountTxt = '';
                    if (product.discount > 0) {
                        product.price -= ((product.price * product.discount) / 100);
                        product.discountTxt = `¡${product.discount}% de descuento!`;
                    }
                });

                return `
        <div class="row" id="products-row">
            ${products.map( product => `
                <div class="col-lg-4 col-md-12 mb-4">
                    <div class="card text-center">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="${product.url_image}" class="img-fluid" />
                            <a href="/#/product/${product.id}">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <span style="color: #ff0015;">${product.discountTxt}</span>
                            <p class="card-text">
                                ${new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.price)}
                            </p>
                            <a href="/#/product/${product.id}" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>
            `) .join('\n')}
            

        </div>
            
        `;
    }
};

export default CategoriesScreen;