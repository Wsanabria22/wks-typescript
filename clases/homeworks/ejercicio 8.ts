//Intenta tipar una pluck function!
//TIP! Buscar la palabra reservada keyof y usar extends!
function pluck<T, U extends object>(arreglo: T[], prop: keyof U): T[] {
    return arreglo.map(<U extends object>(object) => {
        return object[prop]
    }) 
}
