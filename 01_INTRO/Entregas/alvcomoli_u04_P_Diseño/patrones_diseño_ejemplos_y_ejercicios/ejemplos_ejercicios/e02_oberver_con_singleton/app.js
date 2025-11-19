import { ThemeStore , StoreSub } from './Store.js';

// Aquí inicializamos directamente el singleton
const store = new ThemeStore();


const bodyElement = document.body;
const headerElement = document.getElementById('mainHeader');
const toggleButton = document.getElementById('toggleThemeBtn');
const boxElements = document.querySelectorAll('.box');

// Creamos los subscribers para cada elemento
const bodySubscriber = new StoreSub(bodyElement);
const headerSubscriber = new StoreSub(headerElement);
const boxSubscribers = Array.from(boxElements).map(el => new StoreSub(el));

// Suscribimos al store
store.subscribe(bodySubscriber);
store.subscribe(headerSubscriber);
boxSubscribers.forEach(sub => store.subscribe(sub));

// Evento del botón
toggleButton.addEventListener('click', () => {
    store.toggleTheme();
});

// Inicializamos la vista la primera vez con el tema por defecto
store.notify();
