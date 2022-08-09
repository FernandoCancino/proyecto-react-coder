let productos = [
    {id: `1`,nombre: `crema`,descripcion: `producto cosmetico`,stock: 10,},
    {id: `2`,nombre: `crema 2`, descripcion: `producto cosmetico`,stock: 7,},
    {id: `3`,nombre: `crema 3`,descripcion: `producto cosmetico`,stock: 3,},
    {id: `4`,nombre: `crema 4`,descripcion: `producto cosmetico`,stock: 15,},
    {id: `5`,nombre: `crema 4`,descripcion: `producto cosmetico`,stock: 12,},
]

export const getFetch = (id) => {
    // acciones
    return new Promise((resolve, reject) => {
        setTimeout (() =>{
            if (id) {
                resolve (productos.find(prod => prod.id === id))
            } else {
            resolve (productos)   
            }            
        }, 3000)
    })
}