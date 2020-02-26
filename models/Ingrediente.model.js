// ? Models
import Cantidad from "./Cantidad.model.js";

class Ingrediente {
  cantidad;
  nombre;
  costo;
  /**
   *
   * @param {Cantidad} cantidad
   * @param {string} nombre
   * @param {number} costo
   */
  constructor(cantidad, nombre, costo) {
    this.cantidad = cantidad ? cantidad : null;
    this.nombre = nombre ? nombre : null;
    this.costo = costo ? costo : null;
  }
  getDescripcion = () => {};
}

export default Ingrediente;
