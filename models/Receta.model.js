// ? Models
import Ingrediente from "./Ingrediente.model.js";

class Receta {
  nombre;
  autor;
  ingredientes;
  /**
   *
   * @param {string} nombre
   * @param {string} autor
   * @param {Array.<Ingrediente>} ingredientes
   */
  constructor(nombre, autor, ingredientes) {
    this.nombre = nombre ? nombre : null;
    this.autor = autor ? autor : null;
    this.ingredientes = ingredientes ? ingredientes : null;
  }
  getNumeroIngredientes = () => {};
  getCosto = () => {};
  imprimirEnConsola = () => {};
}

export default Receta;
