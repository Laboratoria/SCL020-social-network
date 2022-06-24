// EN ESTE ARCHIVO SE VAN A ALMACENAR TODAS LAS FUNCIONES REFERENTES A LOS POSTS (CREAR, LISTAR, ACTUALIZAR, ELIMINAR)
import { db, addDoc, collection } from '../firebase/init.js'

const createPost = async (dataPost) => {
    /* 
        {
            text: 'jasjajdasdas',
            postType: 'type',
            (img: 'url') 
        }
    */
    try {
        const newPostRegister = await addDoc(
            collection(db, "posts"),
            dataPost
        )
        console.log('todo salio super bien!')
    } catch (error) {
        console.log(error)
    }
}

export { createPost }
