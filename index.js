import Cantidad from "./models/Cantidad.model.js";
import Ingrediente from "./models/Ingrediente.model.js";
import Receta from "./models/Receta.model.js";

let cantidad = new Cantidad(5, "Litros");
console.log(cantidad.getDescripcion());

let ingrediente = new Ingrediente(cantidad, "Leche", 500);
console.log(ingrediente.getDescripcion());

let receta = new Receta("ChocoMilk", "Ramon", [ingrediente]);
console.log(receta);

console.log(receta.getCosto());
console.log(receta.getNumeroIngredientes());
receta.imprimirEnConsola();

console.log("----------");

let cantidad2 = new Cantidad(7, "Cucharadas");
let ingrediente2 = new Ingrediente(cantidad2, "Chocolate en polvo", 600);
receta.agregarIngrediente(ingrediente2);
console.log(receta.getCosto());
console.log(receta.getNumeroIngredientes());
receta.imprimirEnConsola();
