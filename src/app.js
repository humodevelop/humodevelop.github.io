import Router from "./router.js";

window.onload = ()=>{
    Router(window.location.hash);
}

window.onhashchange = ()=>{
    Router(window.location.hash);
}