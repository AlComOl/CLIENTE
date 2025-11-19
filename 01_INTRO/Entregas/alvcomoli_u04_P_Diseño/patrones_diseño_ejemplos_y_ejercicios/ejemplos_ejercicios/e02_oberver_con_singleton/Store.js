export class ThemeStore {
    
    constructor(element) {
        //implementar
        if (ThemeStore.instance) {
            return ThemeStore.instance;
        }

        this.state = {
            theme: 'light' 
        };
        this.subscribers = []; 

        ThemeStore.instance = this;
    }

    subscribe(subscriber) {
        //implementar
        this.subscribers.push(subscriber);
    }

    notify() {
        // implementar 
        this.subscribers.forEach(subscriber => subscriber.update(this.state));
    }

    toggleTheme() {
        this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
        this.notify();
    }
}

// Implementación del Singleton (Propiedad Estática)
ThemeStore.instance = null; 


export class StoreSub {
    // recibe un nodo del DOM
    constructor(element) {
        //implementar
        this.element = element;
    }

    // recibe el estado state, que contiene { theme: 'light' } o {theme: 'dark'}
    update(state) {
        //implementar
        if (state.theme === 'dark') {
            this.element.classList.remove('light');
            this.element.classList.add('dark');
        } else {
            this.element.classList.remove('dark');
            this.element.classList.add('light');
        }
    }
}