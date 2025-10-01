
const host = import.meta.env.VITE_HOST


export async function listProducts() {
    await delay(500);
    return [
        {
            id: 1,
            nombre: "Bombones chocolate amargo",
            descripcion: "Bombones de frambuesa con chocolate bitter amargo 60%.",
            precio: 23990,
            urlImagen: `${host}public/cards/1.jpeg`,
            stock: 20,
            categoria: "Chocolate amargo",
            etiqueta: "500gr",
            marca: "Vangod",
            descripcion2: "Déjate sorprender por la intensidad de estos bombones, donde un exterior de chocolate bitter 60% se combina con un interior de frambuesa. La acidez vibrante de la fruta realza la profundidad del cacao amargo, creando un equilibrio perfecto."
        },
        {
            id: 2,
            nombre: "Tableta chocolate con almendras",
            descripcion: "Tableta de chocolate negro 70% con almendras tostadas.",
            precio: 18500,
            urlImagen: `${host}public/cards/2.jpeg`,
            stock: 0,
            categoria: "Chocolate negro",
            etiqueta: "200gr",
            marca: "Vangod",
            descripcion2: "Una tableta de intenso chocolate negro 70% cacao que ofrece un sabor profundo y ligeramente amargo. En su interior, descubre las crujientes almendras tostadas que aportan un delicioso contraste de textura y un aroma tostado."
        },
        {
            id: 3,
            nombre: "Pralinés surtidos",
            descripcion: "Selección de pralinés rellenos de avellana y nuez.",
            precio: 32750,
            urlImagen: `${host}public/cards/3.jpeg`,
            stock: 8,
            categoria: "Bombones",
            etiqueta: "250gr",
            marca: "Vangod",
            descripcion2: "Descubre la textura crujiente y el aroma tostado de una exquisita selección de pralinés artesanales. Cada pieza revela un relleno cremoso de avellana y nuez, cuidadosamente seleccionadas para ofrecer un equilibrio perfecto."
        },
        {
            id: 4,
            nombre: "Chocolate blanco con frutos rojos",
            descripcion: "Tableta de chocolate blanco premium con trozos de frutos rojos.",
            precio: 21300,
            urlImagen: `${host}public/cards/4.jpeg`,
            stock: 12,
            categoria: "Chocolate blanco",
            etiqueta: "180gr",
            marca: "Vangod",
            descripcion2: "La suave cremosidad del chocolate blanco premium ,la intensidad ácida y los crujientes trozos de frutos rojos liofilizados crean un contraste vibrante y lleno de matices. Una experiencia dulce y afrutada que conquista desde el primer instante."
        },
        {
            id: 5,
            nombre: "Caja regalo chocolates finos",
            descripcion: "Elegante caja surtida con los mejores chocolates de la casa.",
            precio: 45900,
            urlImagen: `${host}public/cards/5.jpeg`,
            stock: 5,
            categoria: "Regalos",
            etiqueta: "750gr",
            marca: "Vangod",
            descripcion2: "La elección perfecta para un detalle inolvidable. Esta elegante caja contiene una cuidada selección de nuestros chocolates más exquisitos, elaborados artesanalmente con los mejores ingredientes. Un regalo que combina tradición, sabor y sofisticación para sorprender a los paladares más exigentes."
        },
        {
            id: 6,
            nombre: "Trufas de chocolate con champagne",
            descripcion: "Exquisitas trufas rellenas de ganache con champagne francés.",
            precio: 28450,
            urlImagen: `${host}public/cards/6.jpeg`,
            stock: 10,
            categoria: "Trufas",
            etiqueta: "12 unidades",
            marca: "Vangod",
            descripcion2: "Sumérgete en el lujo con nuestras exquisitas trufas, donde un intenso ganache de chocolate se fusiona con el champagne francés más refinado. Su delicado baño de cacao encierra un interior cremoso y burbujeante que estalla en el paladar."
        },
        {
            id: 7,
            nombre: "Tableta chocolate con sal marina",
            descripcion: "Chocolate negro 65% con escamas de sal marina del Atlántico.",
            precio: 19750,
            urlImagen: `${host}public/cards/7.jpeg`,
            stock: 0,
            categoria: "Chocolate negro",
            etiqueta: "150gr",
            marca: "Vangod",
            descripcion2: "Una exquisita tableta de chocolate negro 65% cacao, donde la intensidad y fruitalidad del cacao son el protagonista. La experiencia se eleva con crujientes escamas de sal marina del Atlántico que realzan su dulzor natural."
        },
        {
            id: 8,
            nombre: "Bombones de café y cardamomo",
            descripcion: "Bombones artesanales con relleno de café arábigo y cardamomo.",
            precio: 26800,
            urlImagen: `${host}public/cards/8.jpeg`,
            stock: 7,
            categoria: "Bombones",
            etiqueta: "300gr",
            marca: "Vangod",
            descripcion2: "Déjate seducir por el intenso aroma del café arábigo y la nota exótica y aromática del cardamomo en nuestro relleno cremoso. Un bombón artesanal que fusiona la profundidad del grano tostado con el toque cálido y especiado."
        },
        {
            id: 9,
            nombre: "Chocolate con naranja confitada",
            descripcion: "Tableta de chocolate con trozos de naranja confitada en almíbar.",
            precio: 17950,
            urlImagen: `${host}public/cards/9.jpeg`,
            stock: 14,
            categoria: "Chocolate con frutas",
            etiqueta: "200gr",
            marca: "Vangod",
            descripcion2: "Una tableta donde la intensidad del mejor chocolate se combina con la dulzura cítrica de la naranja. Disfruta de la textura única de los generosos trozos de naranja confitada en almíbar, que estallan en sabor. Una combinación clásica y sofisticada para un momento de auténtico placer."
        },
        {
            id: 10,
            nombre: "Selección premium bean-to-bar",
            descripcion: "Chocolate single origin de grano fino, proceso bean-to-bar.",
            precio: 38200,
            urlImagen: `${host}public/cards/10.jpeg`,
            stock: 4,
            categoria: "Chocolate premium",
            etiqueta: "250gr",
            marca: "Vangod",
            descripcion2: "Descubre la auténtica esencia del cacao con nuestra selección bean-to-bar. Cada tableta es un viaje a un terruño único, donde cultivamos granos de fino aroma con un perfil de sabor excepcional. Un proceso artesanal que controlamos desde el grano hasta la barra para ofrecerte pureza y máxima intensidad."
        },
        {
            id: 11,
            nombre: "Hot chocolate mix gourmet",
            descripcion: "Mezcla premium para chocolate caliente con especias.",
            precio: 15600,
            urlImagen: `${host}public/cards/11.jpeg`,
            stock: 22,
            categoria: "Chocolate en polvo",
            etiqueta: "400gr",
            marca: "Vangod",
            descripcion2: "Disfruta de un chocolate caliente indulgente con nuestra mezcla gourmet. Infundida con un toque de canela, nuez moscada y un toque picante de chile. La experiencia definitiva para reconfortar el cuerpo y el alma en los días fríos."
        },
        {
            id: 12,
            nombre: "Bombones de licor surtidos hallowen",
            descripcion: "Bombones rellenos de licores finos: coñac, whisky y ron.",
            precio: 34900,
            urlImagen: `${host}public/cards/12.jpeg`,
            stock: 10,
            categoria: "Bombones",
            etiqueta: "16 unidades",
            marca: "Vangod",
            descripcion2: "Bombones surtidos con forma de calabaza y fantasmas, rellenos de una selección de licores finos. Disfruta del intenso coñac, el ahumado whisky y el dulce ron, en una experiencia única para adultos. El detalle perfecto para sorprender en tu fiesta de Halloween."
        }
    ]
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}