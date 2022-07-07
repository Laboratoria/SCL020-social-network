import { db, collection, addDoc, getDocs, onSnapshot, query } from './init.js'
export const posting = (nameRecipe, ingredients, stepOne, stepTwo, stepThree) => {
    console.log(nameRecipe, ingredients, stepOne, stepTwo, stepThree)
    addDoc(collection(db, 'post'), {
            nameRecipe: nameRecipe,
            ingredients: ingredients,
            preparacion: [stepOne, stepTwo, stepThree],

        })
        .then(() => {
            alert('funciono');
        })
        .catch(() => {
            alert('Error no funciona');
        });

};
/*export const capturePost = async() => {
    try {
        let dataBasePost = [];
        const resultDataPost = await getDocs(collection(db, 'post'));
        resultDataPost.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());
            dataBasePost.push({ id: doc.id, data: doc.data() });
        });
        console.log(dataBasePost);
        

        return dataBasePost;

    } catch (error) {
        console.log(error);
    }
};*/

export const snapshot = (callback) => {
    const queryPost = query(collection(db, 'post'));
    onSnapshot(queryPost, callback);
};

//window.location.href = '#/wall'