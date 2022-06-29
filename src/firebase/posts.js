// EN ESTE ARCHIVO SE VAN A ALMACENAR TODAS LAS FUNCIONES REFERENTES A LOS POSTS (CREAR, LISTAR, ACTUALIZAR, ELIMINAR)
import { db, addDoc, collection } from '../firebase/init.js'
// const createPost =  (text, postType) =>
// addDoc(collection(db, "posts"), { text, postType });

export const createPost = async (text, postType) => {
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
            text, postType
        )
        console.log('todo salio super bien!')
    } catch (error) {
        console.log(error)
    }
}

export const getPost = () => {
    console.log('post list')
}

export const onGetPost = (callback) =>
    onSnapshot(collection(db, "tasks"), callback)
//export { createPost }


