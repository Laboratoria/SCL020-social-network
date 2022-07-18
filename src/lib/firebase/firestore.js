//funciones firestore
import { db, collection, addDoc, onSnapshot, doc, getDoc, deleteDoc, updateDoc } from "./init.js";


//Función que guarda los datos del formulario del post en firebase
export const savePost = ( title, text) => {

    //Agrega un doc a una colección en formato de objeto
    addDoc(collection(db,'posts'),{title:title, text:text});
    //console.log(collection(db,'posts'),{autor:autor, title:title, text:text});
};


//obtiene los docs en tiempo real
export const onGetPost = (callback) => onSnapshot(collection(db, "posts"), callback);
//console.log(onGetPost());



export const editPost = (id) => {
   const postRef = getDoc(doc(db,'posts',id));
    return postRef;
}; 
  
export const deletePost = (id) => {
    const delDocRef = deleteDoc(doc(db,'posts',id))
    return delDocRef;
};

export const updatePost = (id, {title:title, text:text}) => {
     updateDoc(doc(db,'posts',id), {title:title, text:text});
}; 