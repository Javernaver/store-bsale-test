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
                <li class="link-item"><a href="#" class="link">bebidas energeticas</a></li>
                <li class="link-item"><a href="#" class="link">bebidas alcohólicas</a></li>
                <li class="link-item"><a href="#" class="link">snacks</a></li>
            </ul>
        </nav>
    `;
    },
    after_render: () => {
        document
            .getElementById('search-form')
            .addEventListener('submit', async(e) => {
                e.preventDefault();
                const searchKeyword = document.getElementById('q').value;
                document.location.hash = `/?q=${searchKeyword}`;
            });


    },
};