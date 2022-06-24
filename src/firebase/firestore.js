import { db, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc } from "./init.js"

export const saveTask = contentPost => {
    addDoc(collection(db, "task"), {contentPost})
}

export const getTask = () => {
    return getDocs(collection(db, "task"))
}

export const onGetTask = (callback) => onSnapshot(collection(db, "task"), callback)

export const deleteTask = (id) => deleteDoc(doc(db, "task", id));