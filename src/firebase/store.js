import { getFirestore, firestore, doc, getDoc, getDocs, collection } from "./init.js";

// const docRef = doc(firestore, "cities", "SF");
// const docSnap = await getDoc(docRef);

const readData= async function(){
const querySnapshot = await getDocs(collection(firestore, "Posts"));
const dataArray = []
querySnapshot.forEach((doc) => {
    dataArray.push({id:doc.id, data:doc.data()})
    });
    return dataArray}

export {readData} ;