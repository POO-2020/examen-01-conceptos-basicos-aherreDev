class Cantidad {
  valor;
  unidad;
  /**
   *
   * @param {number} valor
   * @param {string} unidad
   */
  constructor(valor, unidad) {
    this.valor = valor;
    this.unidad = unidad;
  }
  getDescripcion = () => `${this.valor} ${this.unidad}`;
}

export default Cantidad;
