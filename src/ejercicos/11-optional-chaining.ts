

interface Pasajero {
    nombre: string,
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fer'
}

const pasajero2: Pasajero = {
    nombre: 'Mel',
    hijos: ['Nata', 'Gabi']
}

function imprimeHijos(pasajero: Pasajero): void {

    const cuantosHijos = pasajero.hijos?.length || 0; //también se pude hacer con un if y otras maneras

    //pasajero.hijos?.length SI EXISTEN LOS HIJOS DIME CUANTOS HAY (ESO HACE EL ?) SI NO ES undefind,
    //ENTONCES COMO undenfind O 0 ENTONCES GANA EL 0  Y POR ESO EL 0 ES LO QUE DEBERÍAMOS DE VER.

    //EN ESTE CASO EL ? SIGNIFICA QUE INTENTE HACER LO QUE SIGUE SIEMPRE Y CUANDO SEA SEGURO HACERLO
    //ENTONCES EVALUA SI TENEMOS HIJOS, SI HAY ENTONCES CONTINÚO CON LO SGTE PORQUE ES SEGURO HACERLO,
    //PERO SI NO HAY NADA NO QUIERO QUE ME REVIENTE SINO SIMPLEMENTE TRÁTALO COMO undefind.
    
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);