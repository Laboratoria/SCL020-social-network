/* eslint-disable arrow-spacing */
import {
  db,
  collection,
  addDoc,
  doc,
  updateDoc,
  auth,
  Timestamp,
  getDocs,
  onSnapshot,
  query
} from "../firebase-doc/firebase.js";
console.log(addDoc);

const creatingNewPost = async (comment) => {
  try {
    const docRef = await addDoc(collection(db, "Publications"), {
      Photo: auth.currentUser.photoURL,
      Name: auth.currentUser.displayName,
      Time: Timestamp.fromDate(new Date()),
      Comment: comment,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const gettingAllPublications = async () => {
  const querySnapshot = await getDocs(collection(db, "Publications"));
  const publicationsArray = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    publicationsArray.push({
      id: doc.id,
      ...doc.data()
        })
  });
  return publicationsArray;
};

const updatingPublications = async () => {
  onSnapshot(query(collection(db, 'Publications')), (doc) => {
    const array = [];
    const post = doc.data;
    doc.docs.forEach(() => {
      array.push({ id: doc.id, post });
    });
    return array;
  });
};


// const editingPublication = async (id) => {
//   await updateDoc(doc(db, 'Publications', id), { comment: editingPublication });
// };

export { creatingNewPost, gettingAllPublications, updatingPublications };
// , editingPublication 