import { db, collection, addDoc, getDoc, onSnapshot, query, doc, updateDoc } from './init.js'
//Funcion que nos permite crear nuestra coleccion
export const posting = (nameRecipe, ingredients, stepOne, stepTwo, stepThree) => {
    console.log(nameRecipe, ingredients, stepOne, stepTwo, stepThree)
    addDoc(collection(db, 'post'), {
            nameRecipe,
            ingredients,
            preparacion: [stepOne, stepTwo, stepThree],

        })
        .then(() => {
            console.log('funciono');
        })
        .catch(() => {
            console.log('Error no funciona');
        });

};
//Funcion que nos permite actualizar los valores ingresados en los post
export const editPost = async(id, nameRecipe, ingredients, stepOne, stepTwo, stepThree) => {
    const recipeRef = doc(db, "post", id);
    console.log({ id, nameRecipe, ingredients, stepOne, stepTwo, stepThree });
    await updateDoc(recipeRef, {
        nameRecipe,
        ingredients,
        preparacion: [stepOne, stepTwo, stepThree],
    });
}

export const snapshot = (callback) => {
    const queryPost = query(collection(db, 'post'));
    onSnapshot(queryPost, callback);
};
