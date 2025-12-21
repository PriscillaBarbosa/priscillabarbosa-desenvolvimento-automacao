import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/styles.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect/dist/core';
import { inicializarDarkMode } from "./modules/darkMode.js";
import { inicializarFormularioContato } from "./modules/inicializarFormulario.js";
import { inicializarWhatsappBot } from "./modules/whatsappBot.js";

document.addEventListener('DOMContentLoaded', () => {
    inicializarDarkMode();
    inicializarFormularioContato();
    console.log('DOM carregado, Dark Mode inicializado.');

    setTimeout(() => {
        inicializarWhatsappBot();
    }, 4000);
   
    AOS.init({
        once: true,
        offset: 100,
        duration: 800,
    });
    
    const app = document.getElementById('subtitulo-datilografado');
        if (app) { 
            const typewriter = new Typewriter(app, {
                loop: true,
                delay: 75,
            });

            typewriter
                .typeString('Presença digital que vende 24/7')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Economia de 10-20h por semana')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Rotinas automatizadas')
                .pauseFor(1000)
                .start();
        }
})