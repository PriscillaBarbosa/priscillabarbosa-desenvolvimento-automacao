import { inicializarDarkMode } from "./modules/darkMode.js";
import { inicializarFormularioContato } from "./modules/inicializarFormulario.js";

document.addEventListener('DOMContentLoaded', () => {
    inicializarDarkMode();
    inicializarFormularioContato();
    console.log('DOM carregado, Dark Mode inicializado.');
   
    AOS.init({
        duration: 1000
    });
    
    const app = document.getElementById('titulo-datilografado');
        if (app) { 
            const typewriter = new Typewriter(app, {
                loop: true,
                delay: 75,
            });

            typewriter
                .typeString('CÓDIGO & DESIGN')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Desenvolvedora Full-stack com foco em Front-end.')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Apaixonada por User Experience e Design.')
                .pauseFor(1000)
                .start();
        }
})