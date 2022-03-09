import { getProducts } from "../providers/products.js";
import { parseRequestUrl } from "../utils.js";

const HomeScreen = {
        render: async() => {
                const { value } = parseRequestUrl();
                const products = await getProducts({ searchKeyword: value });


                return `
        <div class="row" id="products-row">
            ${products.map( product => `
                <div class="col-lg-4 col-md-12 mb-4">
                    <div class="card">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="${product.url_image}" class="img-fluid" />
                            <a href="/#/product/${product.id}">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">
                                ${product.price}
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

export default HomeScreen;