function suma1(a: number | string, b: number | string): number | string {
    if ( typeof a === "number" && typeof b === "number" ) {
        return a + b
    } else if ( typeof a === "string" && typeof b === "string" ) {
        return a.concat(b)
    } else return "No es posible la operacion, a y b tienen tipos diferentes"
}
// Logra que esta funcion tambien concatene strings