import { db, collection, addDoc, getDoc, onSnapshot, query, doc, updateDoc} from './init.js'
export const posting = (nameRecipe, ingredients, stepOne, stepTwo, stepThree) => {
    console.log(nameRecipe, ingredients, stepOne, stepTwo, stepThree)
    addDoc(collection(db, 'post'), {
            nameRecipe,
            ingredients,
            preparacion: [stepOne, stepTwo, stepThree],

        })
        .then(() => {
            alert('funciono');
        })
        .catch(() => {
            alert('Error no funciona');
        });

};
//Editar posts
export const postByEdit = async (id)=>{
    const docRef = doc(db, "post", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
     return docSnap
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}
export const editPost = async (id, nameRecipe, ingredients,stepOne, stepTwo, stepThree)=>{
const recipeRef = doc(db, "post", id);
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


//window.location.href = '#/wall'