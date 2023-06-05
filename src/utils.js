// Funcion para generar colores aleatorios
export const generarColorAleatorio = () => {
    // Genera tres componentes de color aleatorios en el rango de 0 a 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Convierte los componentes de color en formato rgb(r, g, b, a)
    var colorHex = `rgb(${r}, ${g}, ${b}, 0.5)`;

    // Que no sea colores muy claros o muy oscuros

    // Retorna el color hexadecimal
    return colorHex;
}

// Funcion para generar un arreglo con n elmentos de codigo de colores aleatorios
export const generarColoresAleatorios = (n) => {
    const colores = [];

    for (let i = 0; i < n; i++) {
        // Generar un color aleatorio
        const color = generarColorAleatorio();
        // Agregar el color al arreglo de colores
        colores.push(color);
    }

    return colores;
}