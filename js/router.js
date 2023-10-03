export class Router {

    routes = {}

    add(routeName, page) { // adiciona uma nova rota ao objeto routes 
        this.routes[routeName] = page // adiciona a nova rota ao objeto routes  
    }
    route(event) {
        event = event || window.event // verifica se evento existe, caso não exista, cria um novo objeto window.event
        event.preventDefault(); // previne o comportamento padrão do navegador de redirecionar para a URL original
    
        window.history.pushState({}, "", event.target.href); // adiciona uma nova URL no histórico de navegação do navegador e redireciona o usuário para a nova URL        
        this.handle()
    }

    handle() {
        const { pathname } = window.location // pega a URL atual
        const route = this.routes[pathname] || this.routes[404] // verifica se a URL atual existe no objeto routes
           
        fetch(route) // faz a requisição para a URL passada no objeto routes 
        .then(data => data.text()) // pega o conteúdo da URL e transforma em texto  
        .then(html => { // cria uma variável html com o conteúdo da URL 
            document.querySelector('#app').innerHTML = html // adiciona o conteúdo da URL na div app    
        })
    }
}

