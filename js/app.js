// Avance 2
import Egreso from './Egreso.js';
import Ingreso from './Ingreso.js';

let ingresos =[
    new Ingreso('Salario', 50000),
    new Ingreso('Comisiones', 40000)
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
    return valor.toLocaleString('es-MX', { 
        style: 'currency', 
        currency: 'MXN', 
        minimumFractionDigits: 2 
    });
};
// • Crea la función formatoPorcentaje con las siguientes características:
// • Créala como función flecha
// • Se debe recibir el valor que se requiere formatear.
// • Utiliza la función toLocaleString, especificando el idioma que se desea utilizar. Posteriormente, especifica un objeto en el que indiques el estilo, para este caso será
// percent y el mínimo de dígitos decimales igual a 2.
const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString('es-MX', { 
        style: 'percent', 
        minimumFractionDigits: 2 });
};


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
};

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
};

// Para programar la función eliminarIngreso
function eliminarIngreso(id){
    // obtén el índice del elemento que se desea eliminar,
    let indiceEliminar = ingresos.findIndex(ingreso=>ingreso.id === id);
    if (indiceEliminar !== -1){
        ingresos.splice(indiceEliminar,1) //Eiminar el elemento y solo uno
        console.log("Ingreso Eliminado:", id);
        cargarCabecero();
        cargarIngresos();
    }
    else{
        console.log("No se encontró Ingreso", id);
    }


};



// Para programar la función eliminarEgreso
function eliminarEgreso(id){
    // obtén el índice del elemento que se desea eliminar,
    let indiceEliminar = egresos.findIndex(egreso=>egreso.id === id);
    if (indiceEliminar !== -1){
        egresos.splice(indiceEliminar, 1) //Eiminar el elemento y solo uno
        console.log("Egreso Eliminado:", id);
        cargarCabecero();
        cargarEgresos();
    }
    else{
        console.log("No se encontró Egreso", id);
    }


};

// • Como se desea que cada elemento generado por crearIngresoHTML cree dinámicamente el contenido del div lista-ingresos, debes crear todo el contenido html dentro de la función.
const crearIngresoHTML = (ingreso) => {
    // const ingresoHTML = `
    //     <div class="lista-ingresos">
    //         <div class="elemento limpiarEstilos">
    //             <div class="elemento_descripcion">${ingreso.descripcion}</div>
    //             <div class="derecha limpiarEstilos">
    //                 <div class="elemento_valor">${formatoMoneda(
    //                     ingreso.valor
    //                     )}</div>
    //                 <div class="elemento_eliminar">
    //                     <button class="elemento_eliminar--btn" onclick="eliminarIngreso(${len})">
    //                         <ion-icon name="close-circle-outline"></ion-icon>
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    // `;
    let ingresoHTML = "";
    ingresoHTML += "<div class=\"elemento limpiarEstilos\">\n";
    ingresoHTML += "    <div class=\"elemento_descripcion\">" + ingreso.descripcion + "</div>\n";
    ingresoHTML += "        <div class=\"derecha limpiarEstilos\">\n";
    ingresoHTML += "            <div class=\"elemento_valor\">" + formatoMoneda(ingreso.valor) + "</div>\n";
    ingresoHTML += "            <div class=\"elemento_eliminar\">\n";
    ingresoHTML += "            <button class=\"elemento_eliminar--btn\" onclick=\"eliminarIngreso(" + ingreso.id + ")\">\n";
    ingresoHTML += "                 <ion-icon name=\"close-circle-outline\"></ion-icon>\n";
    ingresoHTML += "            </button>\n";
    ingresoHTML += "        </div>\n";
    ingresoHTML += "    </div>\n";
    ingresoHTML += "</div>\n";
    return ingresoHTML;
};

// Como se desea que cada elemento generado por crearEgresoHTML cree dinámicamente el contenido del div lista-ingresos, debes crear todo el contenido html dentro de la función.
const crearEgresoHTML = (egreso) => {
    // const egresoHTML = `
    //     <div class="elemento limpiarEstilos">
    //         <div class="elemento_descripcion">${egreso.descripcion}</div>
    //         <div class="derecha limpiarEstilos">
    //             <div class="elemento_valor">${formatoMoneda(
    //                 egreso.valor
    //                 )}</div>
    //             <div class="elemento_eliminar">
    //             <button class="elemento_eliminar--btn">
    //                 <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // `;
    let egresoHTML = "";
    egresoHTML += "<div class=\"elemento limpiarEstilos\">\n";
    egresoHTML += "    <div class=\"elemento_descripcion\">" + egreso.descripcion + "</div>\n";
    egresoHTML += "        <div class=\"derecha limpiarEstilos\">\n";
    egresoHTML += "            <div class=\"elemento_valor\">" + formatoMoneda(egreso.valor) + "</div>\n";
    egresoHTML += "            <div class=\"elemento_porcentaje\">" + formatoPorcentaje(egreso.valor/totalEgresos()) + "</div>\n";
    egresoHTML += "            <div class=\"elemento_eliminar\">\n";
    egresoHTML += "            <button class=\"elemento_eliminar--btn\" onclick=\"eliminarEgreso(" + egreso.id + ")\">\n";
    egresoHTML += "                 <ion-icon name=\"close-circle-outline\"></ion-icon>\n";
    egresoHTML += "            </button>\n";
    egresoHTML += "        </div>\n";
    egresoHTML += "    </div>\n";
    egresoHTML += "</div>\n";
    return egresoHTML;
};



// Para cargar los ingresos dinámicamente, es necesario recorrer el arreglo ingresos. Para ello, crea la siguiente función:
const cargarIngresos =() => {
    let ingresosHTML = "";
    for (const ingreso of ingresos) {
        // console.log("valor ingreso", ingresos.length)
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    const listaIngresosElement = document.getElementById('lista-ingresos');
    listaIngresosElement.innerHTML = ingresosHTML;
    console.log("Ingresos cargados:", ingresos);
};

// Para cargar los egresos dinámicamente, es necesario recorrer el arreglo egresos. Para ello, crea la siguiente función:
const cargarEgresos =() => {
    let egresosHTML = "";
    for (const egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }
    const listaEgresosElement = document.getElementById('lista-egresos');
    listaEgresosElement.innerHTML = egresosHTML;
    console.log("Egresos cargados:", egresos);
};

const agregaDato =() =>{
    const forma = document.getElementById('forma');
    const tipo = document.getElementById('tipo').value;
    const descripcion = document.getElementById('descripcion').value;
    const valor = document.getElementById('valor').value;  // Asegúrate de que 'valor' exista
    let i = 0;

    // • Valida que el valor de descripcion y de valor no estén vacíos. Si la condición se cumple:
    if (descripcion.trim()==="" || valor.trim ===""){
        alert("Favor de ingresar un dato válido en Descripción y Valor");
        return;
    };
    // Valida si el valor de tipo es igual a ingreso o egreso y ponlo en su lugar
    if(tipo === 'ingreso'){
        ingresos.push(new Ingreso(descripcion, parseFloat(valor)));
        i = 1;
        // console.log("lon de Ingreso", ingresos.length)

    } else if (tipo === 'egreso'){
        egresos.push(new Egreso(descripcion, parseFloat(valor)));
        i = 2;
    };

    if (i>0){
        cargarCabecero();
        if (i=== 1){
            cargarIngresos();
        } else {
            cargarEgresos();
        }

    }

};

const cargarApp = () =>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();

};

document.addEventListener("DOMContentLoaded", cargarApp()); // Aqui se carga el metodo cargarapp cuando se acaba de cargar el documento sin meterlo al html
window.eliminarEgreso = eliminarEgreso;
window.eliminarIngreso = eliminarIngreso;
window.agregaDato = agregaDato;