import { getCategory } from "../providers/categories.js";
import { getProduct } from "../providers/products.js";
import { hideLoading } from "../utils.js";
import { parseRequestUrl } from "../utils.js";
import { showLoading } from "../utils.js";

const ProductScreen = {
    render: async() => {
        showLoading();
        // obtener id desde url
        const { id } = parseRequestUrl();
        // obtener producto desde backend
        const product = await getProduct(id);

        // obtener categoria desde backend
        const category = await getCategory(product.category);


        hideLoading();
        // detectar si hay descuento


        // si el producto tiene descuento se actualiza el precio y se agrega un atributo nuevo con el texto del descuento
        product.discountTxt = '';
        if (product.discount > 0) {

            product.discountTxt = `${product.discount}% de descuento, ¡aprovecha!`;
            product.price -= ((product.price * product.discount) / 100);

        }

        // asigna una imagen por defecto a los productos que no tengan imagen
        let image = product.url_image;
        if (!image) {
            image = './img/hombre_duff.jpg';
        }

        return `
        <main class="container" id="product">
    
            <!-- Left Column / Image -->
            <div class="left-column">
                <img src="${image}" alt="${product.name}" />
            </div>
        
        
            <!-- Right Column -->
            <div class="right-column">
        
            <!-- Product Description -->
            <div class="product-description">
                <span>${category.name}</span>
                <h1>${product.name}</h1>
            </div>
        
            <!-- Product Pricing -->
            <span style="color: #ff0015;">${product.discountTxt}</span>
            <div class="product-price">
                <span>${new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.price)}</span>
                <a href="#" class="cart-btn">Comprar</a>
            </div>
            </div>
        </main>
                
        `;
    }
};

export default ProductScreen;