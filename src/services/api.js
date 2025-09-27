

export async function listProducts() {
    await delay(500);
    return [
        {
            id: 1,
            nombre: "Bombones chocolate amargo",
            descripcion: "Bombones de frambueza con chocolate biter amargo 60%",
            precio: 23990,
            urlImagen: "",
            stock: 3,
            categoria: "Chocolate amargo",
            etiqueta: "500gr"
        },
        {
            id: 2,
            nombre: "Tableta chocolate con almendras",
            descripcion: "Tableta de chocolate negro 70% con almendras tostadas",
            precio: 18500,
            urlImagen: "https://ejemplo.com/chocolate-almendras.jpg",
            stock: 15,
            categoria: "Chocolate negro",
            etiqueta: "200gr"
        },
        {
            id: 3,
            nombre: "Pralinés surtidos",
            descripcion: "Selección de pralinés rellenos de avellana y nuez",
            precio: 32750,
            urlImagen: "https://ejemplo.com/pralines-surtidos.jpg",
            stock: 8,
            categoria: "Bombones",
            etiqueta: "250gr"
        },
        {
            id: 4,
            nombre: "Chocolate blanco con frutos rojos",
            descripcion: "Tableta de chocolate blanco premium con trozos de frutos rojos liofilizados",
            precio: 21300,
            urlImagen: "https://ejemplo.com/chocolate-blanco-frutos.jpg",
            stock: 12,
            categoria: "Chocolate blanco",
            etiqueta: "180gr"
        },
        {
            id: 5,
            nombre: "Caja regalo chocolates finos",
            descripcion: "Elegante caja surtida con los mejores chocolates de la casa",
            precio: 45900,
            urlImagen: "https://ejemplo.com/caja-regalo.jpg",
            stock: 5,
            categoria: "Regalos",
            etiqueta: "750gr"
        }
    ];
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}