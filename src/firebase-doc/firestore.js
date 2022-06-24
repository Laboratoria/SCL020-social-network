import {
  db,
  collection,
  addDoc,
  auth,
  Timestamp,
  getDocs,
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

// Add a new document in collection "publications"

/*await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
    
  });*/

export { creatingNewPost, gettingAllPublications };
