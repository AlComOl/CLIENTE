
/*

Crea una clase ConfigManager que implemente el patrón Singleton.
Esta clase debe almacenar la configuración global de una aplicación (por ejemplo, tema, idioma, versión, usuario actual…).

Usa una propiedad privada y estática para guardar la instancia única.
Asegúrate de que aunque se ejecute new ConfigManager() varias veces, siempre recibe el mismo objeto

Demuestra el funcionamiento creando dos variables distintas (c1 y c2) y cambiando valores desde una, comprobando que cambian también en la otra.

*/
export class ConfigManager {
  // Instancia única
  static #instance = null;

  constructor() {
    // COMPLETA CÓDIGO AQUÍ
    // console.log("FALTA IMPLEMENTACIÓN!!!")
    // Estado inicial de la configuración global
      if(ConfigManager.#instance){
            return ConfigManager.#instance;

        }
    this.config = {
      theme: "light",
      language: "es",
      version: "1.0.0",
    };

    // COMPLETA CÓDIGO AQUÍ
    // console.log("FALTA IMPLEMENTACIÓN!!!")
     ConfigManager.#instance=this;
  }

  // devuelve sólo uno de los parámetros
  getParam(key) {
    // console.log("FALTA IMPLEMENTACIÓN!!!")
      return this.config[key];
  }

  // añade o cambia un parámetro de configuración y su valor
  setParam(key, value) {
    // console.log("FALTA IMPLEMENTACIÓN!!!")
    this.config[key] = value;
  }

  getConfig() {
    return this.config;
  }
}


