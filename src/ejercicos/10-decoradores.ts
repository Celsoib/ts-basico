function reportableClassDecorator<T extends { new (...args: any[]): {} }>
    (constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}
 
@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'abs12';

    imprimir(){
        console.log('HOla mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);