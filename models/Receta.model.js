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
    this.ingredientes = ingredientes ? ingredientes : [];
  }
  getNumeroIngredientes = () => this.ingredientes.length;
  getCosto = () => {
    let total = 0;
    this.ingredientes.forEach(ingrediente => {
      total += ingrediente.getCosto();
    });
    return total;
  };
  agregarIngrediente = ingrediente => this.ingredientes.push(ingrediente);
  imprimirEnConsola = () => {
    let text = "";
    let subIndex = "";
    this.ingredientes.forEach((ingrediente, i) => {
      if (subIndex.length < i) subIndex += "i";
      text += `${i > 0 ? "\n" : ""} \t${i}. ${ingrediente.getDescripcion()}`;
    });
    console.log(
      `${this.nombre} Autor: ${
        this.autor
      } Ingredientes:\n${text}\nCosto total: $${this.getCosto()}`
    );
  };
}

export default Receta;
