import Router from "./router.js";

//Rootear al cargar la página.
window.onload = ()=>{
    Router(window.location.hash);
}

//Rootear cuando cambie el #hash en la url
window.onhashchange = ()=>{
    Router(window.location.hash);
}