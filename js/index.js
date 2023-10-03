import { Router } from './router.js';
import { registerControls } from './events.js';

const router = new Router() // cria um novo objeto Router 
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add('/404', '/pages/404.html')


router.handle() // chama a função handle ao carregar a página 

window.onpopstate = () => router.handle() // adiciona a função handle ao carregar a página 
window.route = () => router.route() // adiciona a função route ao carregar a página 


registerControls() // adiciona a função registerControls ao carregar a página