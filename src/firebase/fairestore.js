import { db /*, collection, addDoc, getDocs*/ } from './init.js'

const post = async(elPost) => {
    try {
        const docRef = await addDoc(collection(db, "pots"), {
            nombre: "Alan",
            receta: "Mathison",
            preparacion: "Turing"

        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}