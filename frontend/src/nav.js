import { parseRequestUrl } from "./utils.js";

export const createNav = {
    render: () => {

        let nav = document.querySelector('.navbar');
        const { value } = parseRequestUrl();
        nav.innerHTML = `
        <nav class="navbar">
            <div class="nav">
                
                    <img src="img/hombre_duff.jpg" class="brand-logo" alt="">
                
                <div class="nav-items">
                <form class="search-form"  id="search-form">
                    <div class="search">
                        <input type="text" class="search-box" name="q" id="q" value="${value || ''}" placeholder="Buscar productos...">
                        <button class="search-btn">Buscar</button>
                    </div>
                </form>
                </div>
            </div>
            <ul class="links-container">
                <li class="link-item"><a href="/" class="link">Inicio</a></li>
                <li class="link-item"><a href="#/drinks" class="link">bebidas</a></li>
                <li class="link-item"><a href="#/energy-drinks" class="link">energeticas</a></li>
                <li class="link-item"><a href="#/alcohol-drinks" class="link">licores</a></li>
                <li class="link-item"><a href="#/snacks" class="link">snacks</a></li>
                <li class="link-item"><a href="#/discounted" class="link">¡descuentos!</a></li>
            </ul>
        </nav>
    `;
    },
    after_render: () => {
        // Gestiona la barra de busqueda obteniendo lo que se busca y redireccionando a los resultados
        document
            .getElementById('search-form')
            .addEventListener('submit', async(e) => {
                e.preventDefault();
                const searchKeyword = document.getElementById('q').value;


                document.location.hash = `/?q=${searchKeyword}`;

            });

    },
};