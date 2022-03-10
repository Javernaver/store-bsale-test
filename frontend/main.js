(()=>{"use strict";const e=document.location.href.startsWith("http://127.0.0.1")?"http://localhost:5000":"",n=async({searchKeyword:n=""})=>{try{let s="all";n&&(s=`${n}`);const a=await fetch(`${e}/api/product/${s}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!a.ok||!a)throw new Error(a.message);return a.json().then((({message:e})=>e))}catch(e){return console.log(e),{error:e.response.data.message||e.message}}},s=async n=>{try{const s=await fetch(`${e}/api/product/category/${n}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!s.ok||!s)throw new Error(s.message);return s.json().then((({message:e})=>e))}catch(e){return console.log(e),{error:e.response.data.message||e.message}}},a=()=>{const e=document.location.hash.slice(1).split("?")[0],n=2===document.location.hash.slice(1).split("?").length?document.location.hash.slice(1).split("?")[1]:"",s=(e.toLowerCase()||"/").split("/"),a=n.split("=");return{resource:s[1],id:s[2],verb:s[3],name:a[0],value:a[1]}},t=()=>{document.getElementById("loading-overlay").classList.add("active")},r=()=>{document.getElementById("loading-overlay").classList.remove("active")},c={render:async()=>{t();const{resource:c}=a();let o;switch(c){case"energy-drinks":o=await s(1);break;case"alcohol-drinks":o=await s("alcohol");break;case"drinks":o=await s(4);break;case"snacks":o=await s(5);break;case"discounted":o=await(async()=>{try{const n=await fetch(`${e}/api/product/discounted`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!n.ok||!n)throw new Error(n.message);return n.json().then((({message:e})=>e))}catch(e){return console.log(e),{error:e.response.data.message||e.message}}})();break;default:o=await n("all")}return r(),0==o.length?'<h2 class="text-center">No se encontraron productos :c</h2>':(o.map((e=>{e.url_image||(e.url_image="./img/hombre_duff.jpg"),e.discountTxt="",e.discount>0&&(e.price-=e.price*e.discount/100,e.discountTxt=`¡${e.discount}% de descuento!`)})),`\n        <div class="row" id="products-row">\n            ${o.map((e=>`\n                <div class="col-lg-4 col-md-12 mb-4">\n                    <div class="card text-center">\n                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">\n                            <img src="${e.url_image}" class="img-fluid" />\n                            <a href="/#/product/${e.id}">\n                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>\n                            </a>\n                        </div>\n                        <div class="card-body">\n                            <h5 class="card-title">${e.name}</h5>\n                            <span style="color: #ff0015;">${e.discountTxt}</span>\n                            <p class="card-text">\n                                ${new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP"}).format(e.price)}\n                            </p>\n                            <a href="/#/product/${e.id}" class="btn btn-primary">Comprar</a>\n                        </div>\n                    </div>\n                </div>\n            `)).join("\n")}\n            \n\n        </div>\n            \n        `)}},o={"/":{render:async()=>{t();const{value:e}=a(),s=await n({searchKeyword:e});return r(),0==s.length?'<h2 class="text-center">No se encontraron productos :c</h2>':(s.map((e=>{e.url_image||(e.url_image="./img/hombre_duff.jpg"),e.discountTxt="",e.discount>0&&(e.price-=e.price*e.discount/100,e.discountTxt=`¡${e.discount}% de descuento!`)})),`\n        <div class="row" id="products-row">\n            ${s.map((e=>`\n                <div class="col-lg-4 col-md-12 mb-4">\n                    <div class="card text-center">\n                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">\n                            <img src="${e.url_image}" class="img-fluid" />\n                            <a href="/#/product/${e.id}">\n                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>\n                            </a>\n                        </div>\n                        <div class="card-body">\n                            <h5 class="card-title">${e.name}</h5>\n                            <span style="color: #ff0015;">${e.discountTxt}</span>\n                            <p class="card-text">\n                                ${new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP"}).format(e.price)}\n                            </p>\n                            <a href="/#/product/${e.id}" class="btn btn-primary">Comprar</a>\n                        </div>\n                    </div>\n                </div>\n            `)).join("\n")}\n            \n\n        </div>\n            \n        `)}},"/product/:id":{render:async()=>{t();const{id:n}=a(),s=await(async n=>{try{const s=await fetch(`${e}/api/product/id/${n}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!s.ok||!s)throw new Error(s.message);return s.json().then((({message:e})=>e[0]))}catch(e){return console.log(e),{error:e.response.data.message||e.message}}})(n),c=await(async n=>{try{const s=await fetch(`${e}/api/category/id/${n}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!s.ok||!s)throw new Error(s.message);return s.json().then((({message:e})=>e[0]))}catch(e){return console.log(e),{error:e.response.data.message||e.message}}})(s.category);r(),s.discountTxt="",s.discount>0&&(s.discountTxt=`${s.discount}% de descuento, ¡aprovecha!`,s.price-=s.price*s.discount/100);let o=s.url_image;return o||(o="./img/hombre_duff.jpg"),`\n        <main class="container" id="product">\n    \n            \x3c!-- Left Column / Image --\x3e\n            <div class="left-column">\n                <img src="${o}" alt="${s.name}" />\n            </div>\n        \n        \n            \x3c!-- Right Column --\x3e\n            <div class="right-column">\n        \n            \x3c!-- Product Description --\x3e\n            <div class="product-description">\n                <span>${c.name}</span>\n                <h1>${s.name}</h1>\n            </div>\n        \n            \x3c!-- Product Pricing --\x3e\n            <span style="color: #ff0015;">${s.discountTxt}</span>\n            <div class="product-price">\n                <span>${new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP"}).format(s.price)}</span>\n                <a href="#" class="cart-btn">Comprar</a>\n            </div>\n            </div>\n        </main>\n                \n        `}},"/drinks":c,"/energy-drinks":c,"/snacks":c,"/alcohol-drinks":c,"/discounted":c},i=async()=>{(()=>{let e=document.querySelector(".navbar");const{value:n}=a();e.innerHTML=`\n        <nav class="navbar">\n            <div class="nav">\n                \n                    <img src="img/hombre_duff.jpg" class="brand-logo" alt="">\n                \n                <div class="nav-items">\n                <form class="search-form"  id="search-form">\n                    <div class="search">\n                        <input type="text" class="search-box" name="q" id="q" value="${n||""}" placeholder="Buscar productos...">\n                        <button class="search-btn">Buscar</button>\n                    </div>\n                </form>\n                </div>\n            </div>\n            <ul class="links-container">\n                <li class="link-item"><a href="/" class="link">Inicio</a></li>\n                <li class="link-item"><a href="#/drinks" class="link">bebidas</a></li>\n                <li class="link-item"><a href="#/energy-drinks" class="link">energeticas</a></li>\n                <li class="link-item"><a href="#/alcohol-drinks" class="link">licores</a></li>\n                <li class="link-item"><a href="#/snacks" class="link">snacks</a></li>\n                <li class="link-item"><a href="#/discounted" class="link">¡descuentos!</a></li>\n            </ul>\n        </nav>\n    `})(),await void document.getElementById("search-form").addEventListener("submit",(async e=>{e.preventDefault();const n=document.getElementById("q").value;document.location.hash=`/?q=${n}`}));const e=a(),n=(e.resource?`/${e.resource}`:"/")+(e.id?"/:id":"")+(e.verb?`/${e.verb}`:""),s=o[n]?o[n]:o["/"];document.getElementById("products-list").innerHTML=await s.render()};window.addEventListener("load",i),window.addEventListener("hashchange",i)})();