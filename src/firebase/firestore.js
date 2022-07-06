
import { db, collection, addDoc, getDocs, onSnapshot, query } from './init.js'
export const posting = async (nameRecipe, ingredients, stepOne, stepTwo, stepThree, uploadImg) => {
    console.log(nameRecipe, ingredients, stepOne, stepTwo, stepThree, uploadImg)
    await addDoc(collection(db, 'post'), {
    nameRecipe: nameRecipe,
        ingredients: [ingredients],
        preparacion: [{stepOne}, {stepTwo},{stepThree}],
        uploadImg: uploadImg
     })
    
}
export const capturePost = async() => {
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
};

export const snapshot = (callback) => {
    const queryPost = query(collection(db, 'post'));
    onSnapshot(queryPost, callback);
};

//window.location.href = '#/wall'