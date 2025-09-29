
const host = import.meta.env.VITE_HOST


export async function listProducts() {
    await delay(500);
    return [
        {
            id: 1,
            nombre: "Bombones chocolate amargo",
            descripcion: "Bombones de frambueza con chocolate biter amargo 60%",
            precio: 23990,
            urlImagen: `${host}public/cards/1.jpeg`,
            stock: 3,
            categoria: "Chocolate amargo",
            etiqueta: "500gr"
        },
        {
            id: 2,
            nombre: "Tableta chocolate con almendras",
            descripcion: "Tableta de chocolate negro 70% con almendras tostadas",
            precio: 18500,
            urlImagen: `${host}public/cards/2.jpeg`,
            stock: 15,
            categoria: "Chocolate negro",
            etiqueta: "200gr"
        },
        {
            id: 3,
            nombre: "Pralinés surtidos",
            descripcion: "Selección de pralinés rellenos de avellana y nuez",
            precio: 32750,
            urlImagen: `${host}public/cards/3.jpeg`,
            stock: 8,
            categoria: "Bombones",
            etiqueta: "250gr"
        },
        {
            id: 4,
            nombre: "Chocolate blanco con frutos rojos",
            descripcion: "Tableta de chocolate blanco premium con trozos de frutos rojos liofilizados",
            precio: 21300,
            urlImagen: `${host}public/cards/4.jpeg`,
            stock: 12,
            categoria: "Chocolate blanco",
            etiqueta: "180gr"
        },
        {
            id: 5,
            nombre: "Caja regalo chocolates finos",
            descripcion: "Elegante caja surtida con los mejores chocolates de la casa",
            precio: 45900,
            urlImagen: `${host}public/cards/5.jpeg`,
            stock: 5,
            categoria: "Regalos",
            etiqueta: "750gr"
        },
        {
            id: 6,
            nombre: "Trufas de chocolate con champagne",
            descripcion: "Exquisitas trufas rellenas de ganache con champagne francés",
            precio: 28450,
            urlImagen: `${host}public/cards/6.jpeg`,
            stock: 10,
            categoria: "Trufas",
            etiqueta: "12 unidades"
        },
        {
            id: 7,
            nombre: "Tableta chocolate con sal marina",
            descripcion: "Chocolate negro 65% con escamas de sal marina del Atlántico",
            precio: 19750,
            urlImagen: `${host}public/cards/7.jpeg`,
            stock: 18,
            categoria: "Chocolate negro",
            etiqueta: "150gr"
        },
        {
            id: 8,
            nombre: "Bombones de café y cardamomo",
            descripcion: "Bombones artesanales con relleno de café arábigo y cardamomo",
            precio: 26800,
            urlImagen: `${host}public/cards/8.jpeg`,
            stock: 7,
            categoria: "Bombones",
            etiqueta: "300gr"
        },
        {
            id: 9,
            nombre: "Chocolate con naranja confitada",
            descripcion: "Tableta de chocolate con trozos de naranja confitada en almíbar",
            precio: 17950,
            urlImagen: `${host}public/cards/9.jpeg`,
            stock: 14,
            categoria: "Chocolate con frutas",
            etiqueta: "200gr"
        },
        {
            id: 10,
            nombre: "Selección premium bean-to-bar",
            descripcion: "Chocolate single origin de grano fino, proceso bean-to-bar",
            precio: 38200,
            urlImagen: `${host}public/cards/10.jpeg`,
            stock: 4,
            categoria: "Chocolate premium",
            etiqueta: "250gr"
        },
        {
            id: 11,
            nombre: "Hot chocolate mix gourmet",
            descripcion: "Mezcla premium para chocolate caliente con especias",
            precio: 15600,
            urlImagen: `${host}public/cards/11.jpeg`,
            stock: 22,
            categoria: "Chocolate en polvo",
            etiqueta: "400gr"
        },
        {
            id: 12,
            nombre: "Bombones de licor surtidos hallowen",
            descripcion: "Bombones rellenos de licores finos: coñac, whisky y ron",
            precio: 34900,
            urlImagen: `${host}public/cards/12.jpeg`,
            stock: 10,
            categoria: "Bombones",
            etiqueta: "18 unidades"
        }
    ]
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}