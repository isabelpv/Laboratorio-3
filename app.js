//Calcular precio total

const product = { count: 3, price: 12.55, type: "ropa" };

let getTotal;
product.count > 0 ? (getTotal = product.count * product.price) : (getTotal = 0);

console.log("Precio total sin IVA " + getTotal);

//Calcular el IVA y el precio total con IVA

let tipoIva;

switch (product.type) {
  case "ropa":
    (tipoIva = 1.21), console.log("IVA = 21%");
    break;
  case "alimentacion":
    (tipoIva = 1.1), console.log("IVA = 10%");
    break;
  case "libro":
    (tipoIva = 1.04), console.log("IVA = 4%");
    break;
}

let getVat = product.price * product.count * tipoIva;

console.log("Precio total con IVA " + getVat);

// Calcular sueldo neto en nómina

const empleado = { bruto: 14500, hijos: 2, pagas: 14 };

let retencion;
let sueldoBruto = empleado.bruto;

if (sueldoBruto < 12000) {
  (retencion = 0), console.log("Sin retención");
}

if (sueldoBruto >= 12000 && sueldoBruto < 24000) {
  (retencion = 0.08), console.log("Retención del 8%");
}

if (sueldoBruto >= 24000 && sueldoBruto < 34000) {
  (retencion = 0.16), console.log("Retención del 16%");
}

if (sueldoBruto >= 34000) {
  (retencion = 0.3), console.log("Retención del 30%");
}

let retenionConhijos = empleado.hijos > 0 ? retencion + 0.2 : retencion;

let netoAnual = sueldoBruto - sueldoBruto * retencion;
console.log("Sueldo neto anual " + netoAnual);

let sueldonetoMensual = (empleado.pagas = 12 ? netoAnual / 12 : netoAnual / 14);
console.log("Sueldo neto mensual " + sueldonetoMensual);
