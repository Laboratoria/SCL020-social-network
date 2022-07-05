import { db, collection, addDoc, getDocs, onSnapshot, query } from './init.js'

export const posting = (nameRecipe, ingredients, stepOne, stepTwo, stepThree, typeRecipe, uploadImg) => {

    addDoc(collection(db, "pots"), {
            nombre: nameRecipe,
            ingredientes: [ingredients],
            preparacion: [{ stepOne }, { stepTwo }, { stepThree }],
            tipo: typeRecipe,
            img: uploadImg,

        })
        .then(() => {
            console.log("Hola Pots");
        })
        .catch(() => {
            console.error("Error se escribe posts");
        });
}

export const capturePost = async() => {
    try {
        let dataBasePost = [];
        const resultDataPost = await getDocs(collection(db, 'pots'));
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

export const snapshotPost = (callback) => {
    const queryPost = query(collection(db, 'pots'));
    onSnapshot(queryPost, callback);
};