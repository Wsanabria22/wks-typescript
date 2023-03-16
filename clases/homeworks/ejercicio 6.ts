function suma1(a: number | string, b: number | string): string {
    if ( typeof a === "number") {
        a = a.toString()
    }
    if ( typeof b === "number") {
        b = b.toString()
    }
    return a + b
} //que pasa si yo quisiera concatenar strings con esta funcion?