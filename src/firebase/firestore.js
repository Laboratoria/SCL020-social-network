import { db, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, auth, query, where, orderBy } from "./init.js"

export const saveTask = contentPost => {

    debugger;
    addDoc(collection(db, "task"), {
        ...contentPost,
        created: new Date(),
        useruid: auth.currentUser.uid,
        username: auth.currentUser.displayName,
        like: 0,
        dislike: 0,
        userlikes: [],
        userdislike: []
    })
}

export const getTask = () => {
    return getDocs(collection(db, "task"))
}

export const getTaskUser = (callback) => {
    const q = query(
        collection(db, "task"),
        where("useruid", "==", auth.currentUser.uid),
        orderBy('created', 'desc')
    );

    return(onSnapshot(q, (callback)))
}
export const onGetTask = (callback) => onSnapshot(collection(db, "task"), callback)

export const deleteTask = (id) => deleteDoc(doc(db, "task", id));

export const getTasks = (id) => getDoc(doc(db, "task", id));