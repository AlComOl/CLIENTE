
class ConfigManager{
    static instance ;//esto la hace unica

    constructor(){
        if(ConfigManager.instance){
            return ConfigManager.instance;

        }

        this.config={
           tema:"prueba",
           idioma:"Español",
           versión:"2.1",
           usuario:"Alvaro",
           actual:"si",
        };

        ConfigManager.instance=this;
    }

    setConfig(key, value) {
    this.config[key] = value;
     }

    getConfig(key) {
        return this.config[key];
    }


}

let c1= new ConfigManager;
let c2= new ConfigManager;
let c3 =new ConfigManager;

c1.setConfig("versión",23.1);
// Demuestra el funcionamiento creando dos variables distintas (c1 y c2) y cambiando valores
// desde una, comprobando que cambian también en la ot3ra.
console.log(c1.getConfig("versión"));
console.log(c2.getConfig("versión"));

c3.setConfig("tema", "verde");

console.log(c1.getConfig("tema"));
console.log(c2.getConfig("tema"));
console.log(c2.getConfig("tema"));


