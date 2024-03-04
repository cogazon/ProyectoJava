// Avance 2
import Egreso from './Egreso.js';
import Ingreso from './Ingreso.js';

let ingresos =[
    new Ingreso('Salario', 20000),
    new Ingreso('Venta auto', 50000)
];
let egresos =[
    new Egreso('Renta', 4000),
    new Egreso('Ropa', 800)
];


    // • Crea la función formatoMoneda con las siguientes características:
    // • Créala como función flecha
    // • Se debe recibir el valor que se requiere formatear.
    // • Utiliza la función toLocaleString, especificando el idioma, y luego un arreglo indicando el estilo, que en este caso sería moneda, el tipo de moneda, en el que se
    // sugiere pongas el valor MXN y mínimo de dígitos decimales igual a 2.

const formatoMoneda = (valor) =>{
    return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
}
// • Crea la función formatoPorcentaje con las siguientes características:
// • Créala como función flecha
// • Se debe recibir el valor que se requiere formatear.
// • Utiliza la función toLocaleString, especificando el idioma que se desea utilizar. Posteriormente, especifica un objeto en el que indiques el estilo, para este caso será
// percent y el mínimo de dígitos decimales igual a 2.
const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
}


// • Crea la función cargarCabecero con las siguientes características:
// • Es una función flecha
const cargarCabecero = ()=>{

    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos()));

    // • Crea una variable llamada presupuesto y asígnale el resultado de la resta de la funció totalIngresos() menos el contenido de la función totalEgresos().
    // • Crea una variable porcentajeEgreso y asígnale el resultado de la división de la función totalEgresos() entre el resultado de la función totalIngresos().
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
}
// • Crea la función totalIngresos con estas características:
// • Defínela como función flecha
// • Declara la variable totalIngresos e inicialízala en 0.
// • Itera el arreglo ingresos en un ciclo for of. Recuerda que es necesario declarar la variable ingreso para poder iterar.
const totalIngresos = () =>{
    let totalIngreso = 0;
    for (let i of ingresos){
        totalIngreso += i.valor;
    }
    return totalIngreso;
} 

// • Crea la función totalEgresos con estas características:
// • Defínela como una función flecha
// • Dentro del cuerpo de la función, declara la variable totalEgreso e inicialízala en 0.
// • Con un ciclo for, itera para cada elemento egreso del arreglo egresos y súmalo a la variable totalEgreso.
// • Cuando termine de iterar, retorna la variable totalEgreso.
const totalEgresos = () =>{
    let totalEgreso = 0;
    for (let e of egresos){
        totalEgreso += e.valor;
    }
    return totalEgreso;
} 

cargarCabecero();