const ROOT = document.getElementById('root');

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

async function GetView(view){
    let url = "../views/" + view +".html";
    await fetch(url)
    .then(response=> response.text())
    .then(text => {ROOT.innerHTML = text;});
}

export default Router;