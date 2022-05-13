const productos = [
    {
      id: 1, 
      title: "Alimento Pro Plan para Gato Adulto Pollo Y Arroz",
      stock: 25,
      price: 8000,
      image: "image/pro-plan-adulto.jpg"
    },
    {
      id: 2, 
      title: "Alimento Old Prince Novel Gato Adulto",
      stock: 15,
      price: 5000,
      image: "image/old-prince-novel-adulto.jpg"
    },
    {
      id: 3, 
      title: "Alimento Royal Canin Cat Indoor 27 para Gato",
      stock: 30,
      price: 10000,
      image: "image/royal-canin-indoor.jpg"
    },
    {
      id: 4, 
      title: "Alimento Old Prince Receta Original Para Perro Adulto",
      stock: 24,
      price: 6000,
      image: "image/old-prince-original-perro-adulto.jpg"
    },
    {
        id: 5, 
        title: "Alimento Royal Canin para Perro Mini Adulto",
        stock: 14,
        price: 7000,
        image: "image/royal-canin-perro-mini-adulto.jpg"
      },
      {
        id: 6, 
        title: "Alimento Complete Perro Adulto Raza Mediana y Grande",
        stock: 8,
        price: 1000,
        image: "image/complete-perro-adulto-myg.jpg"
      },
  ]

  export const products = new Promise ((resolve, reject ) => {
    //acciones
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(productos)
      }else{
        reject('Salio mal :(')
      }
    }, 3000)
  })