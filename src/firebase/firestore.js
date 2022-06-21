import { db, collection, addDoc, getDocs } from "./init.js"

export const saveTask = contentPost => {
    addDoc(collection(db, "task"), {contentPost})
}

export const getTask = () => {
    getDocs(collection(db, "task"))
}