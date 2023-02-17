//Elemento donde se va a mostrar el contenido.
const ROOT = document.getElementById('root');

//La ruta (hash) tiene que tener el mismo nombre que el archivo .html dentro la carpeta 'views'.
function Router(hash){
    switch (hash) {
        case '':
            GetView("home");
            break;
        case '#/':
            GetView("home");
            break;        
        case '#/home':
            GetView("home");
        break;
        case '#/about':
            GetView("about");
            break;      
        case '#/tecnologies':
            GetView("tecnologies");
            break;
        case '#/projects':
            GetView("projects");
            break;        
        case '#/contact':
            GetView("contact");
            break;   
        default:
            GetView("404");
            break;
    }
}

//Petición http de la vista .html solicitada.
async function GetView(view){
    let url = "../views/" + view +".html";
    await fetch(url)
    .then(response=> response.text())
    .then(text => {ROOT.innerHTML = text;});
    //Colocar el contenido de la vista .html en el elemento 'root'.
}

export default Router;