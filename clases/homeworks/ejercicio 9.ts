function suma1(a: number, b: string): string;
function suma1(a: string, b: string): string;
function suma1(a: string, b: number): string;
function suma1(a: number, b: number): number {
    return a + b;
}

let resultado = suma1(2, 2) //cambien los parametros para ver su comportamiento
//haciendo hover sobre resultado

//Aplicar lo mismo para el resto de las operaciones matematicas!