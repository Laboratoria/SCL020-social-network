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
  query,
  orderBy,
  deleteDoc,
  getDoc
} from "../firebase-doc/firebase.js";
console.log(addDoc);

const creatingNewPost = async (comment) => {
  try {
    const docRef = await addDoc(collection(db, "Publications"), {
      Photo: auth.currentUser.photoURL,
      Name: auth.currentUser.displayName,
      UserId: auth.currentUser.uid,
      Time: Timestamp.fromDate(new Date()),
      Comment: comment,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const updatingPublications = (callback) => {
  const q = query(collection(db, 'Publications'), orderBy('Time', 'desc'));
  onSnapshot(q, callback);
};

const getPublication = id => getDoc(doc(db, 'Publications', id));

const deletingPublication = (id) => deleteDoc(doc(db, 'Publications', id));


 /*const editingPublication = async (id, editPublication) => {
     await updateDoc(doc(db, 'Publications', id), { comment: editPublication });
};*/

export { creatingNewPost, updatingPublications/* editingPublication*/, deletingPublication, getPublication };
