//Crear una clase Auto con atributos (marca, modelo, anio).
//Agregar métodos(constructor(), acelerar(), frenar()).
//Instanciar objetos y probar métodos.

import { Auto } from "./Auto";

const auto1 = new Auto("VolskWagen", "Golf", 2009)
const auto2 = new Auto("Toyota", "Corolla", 2011)
const auto3 = new Auto("Porsche", "911", 2020)
const auto4 = new Auto("Fiat", "600", 1988);

console.log(auto1);
auto1.acelerar(260);
auto1.frenar(50);
console.log("")

console.log(auto2);
auto2.acelerar(280);
auto2.frenar(120);
console.log("")

console.log(auto3);
auto3.acelerar(330)
auto3.frenar(330);  
console.log("");

console.log(auto4);
auto4.acelerar(83);
auto4.frenar(27);