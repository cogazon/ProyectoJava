// Avance 2
import Egreso from './Egreso.js';
import Ingreso from './Ingreso.js';

let ingresos =[
    new Ingreso('Salario', 65000),
    new Ingreso('Mesada', 5000),
    new Ingreso('Esposo', 30000)
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
    // • Crea una variable llamada presupuesto y asígnale el resultado de la resta de la funció totalIngresos() menos el contenido de la función totalEgresos().
    // • Crea una variable porcentajeEgreso y asígnale el resultado de la división de la función totalEgresos() entre el resultado de la función totalIngresos().
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();

    console.log(formatoMoneda(presupuesto));
    console.log(document.getElementById('presupuesto'));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos()));

    // En el archivo app.js, modifica la función cargarCabecero para que, en lugar de imprimir en consola los valores generados, puedas recuperar por id los siguientes elementos
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingreso').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());


};
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

// Para cargar los ingresos dinámicamente, es necesario recorrer el arreglo ingresos. Para ello, crea la siguiente función:
const cargarIngresos =() => {
    let ingresosHTML = '';
    for (const ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    const listaIngresosElement = document.getElementById('lista_ingresos');
    listaIngresosElement.innerHTML = ingresosHTML;
    console.log("Ingresos cargados:", ingresos);
};

// • Como se desea que cada elemento generado por crearIngresoHTML cree dinámicamente el contenido del div lista-ingresos, debes crear todo el contenido html dentro de la función.
const crearIngresoHTML = (ingreso) => {
    const ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn" onclick="${(ingreso)=>(eliminarIngreso(ingreso.getId()))}">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return ingresoHTML;
};


const cargarApp = () =>{
    cargarCabecero();
    cargarIngresos();
};