// • Utilizando el archivo Ingreso.js, define la clase Ingreso:
// • Define la clase ingreso, que extiende de la clase padre Dato.
import Dato from './Dato.js';

// • Define la variable estática contadorIngresos e iguálala a 0.
// • Crea el constructor de la clase en el que recibas los parámetros descripción y valor.
// • En el cuerpo del constructor, invoca al constructor de la clase padre, la cual debe recibir los parámetros descripción y valor.
// • Define el atributo _id y para asignarle un valor, utiliza la variable estética, para hacerlo, realiza un preincremento a la variable estática de la clase Ingresos.
// • Crea el método get id, el cual va a regresar el valor de this._id, no agregues el método set porque este valor no deberá ser modificado

class Ingreso extends Dato {
    static contadorIngresos = 0;
    
    constructor(descripcion, valor){
        super (descripcion, valor);
        this._id = ++Ingreso.contadorIngresos
        // console.log("Ingreso JS constructor", this._id)
    }

    get id(){

        // console.log("Ingreso JS", this._id)
        return this._id

    }

}
export default Ingreso;