let productos = [
    {id:'1', categoria:'crema', nombre:'crema', descripcion:'producto cosmetico', stock:10,},
    {id:'2', categoria:'crema', nombre:'crema 2', descripcion:'producto cosmetico' ,stock:7,},
    {id:'3', categoria:'belleza', nombre:'esmalte', descripcion:'producto cosmetico', stock:3,},
    {id:'4', categoria:'belleza', nombre:'botox', descripcion:'producto cosmetico', stock:15,},
    {id:'5', categoria:'crema', nombre:'crema antiage', descripcion:'producto cosmetico', stock:12,},
]

export const getFetch = (id) => {
    // acciones
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve (productos)           
        }, 2000)
    })
}