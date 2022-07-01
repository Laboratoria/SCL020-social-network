import { db, collection, addDoc, getDocs, } from './init.js'

export const posting = async(nameRecipe, ingredients, stepOne, stepTwo, stepThree, typeRecipe, uploadImg) => {
    try {
        const docRef = await addDoc(collection(db, "pots"), {
            nombre: nameRecipe,
            ingredientes: [ingredients, ],
            preparacion: [{ stepOne }, { stepTwo }, { stepThree }],
            tipo: typeRecipe,
            img: uploadImg,

        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const capturePost = async() => {

    const querySnapshot = await getDocs(collection(db, "posts"));
    const postArray = [];
    querySnapshot.forEach((doc) => {
        postArray.push({
            id: doc.id,
            ...doc.data()
        })

    });
    return postArray;
}