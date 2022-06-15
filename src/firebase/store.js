import {
  getFirestore,
  firestore,
  addDoc,
  doc,
  getDoc,
  getDocs,
  collection,
  Timestamp,
  serverTimestamp,
  updateDoc,
  deleteDoc
} from "./init.js";

// const docRef = doc(firestore, "cities", "SF");
// const docSnap = await getDoc(docRef);

const readData = async function (type = "Posts") {
  const querySnapshot = await getDocs(collection(firestore, type));
  const dataArray = [];
  querySnapshot.forEach((doc) => {
    dataArray.push({ id: doc.id, data: doc.data() });
  });
  return dataArray;
};

// guarda los usuarios registrados
// firestore genera automáticamente el id
const savedUser = async (email, uid) => {
  await addDoc(collection(firestore, "user"), {
    email,
    uid,
  });
};

//DATA TYPE
const docData = {
  stringExample: "Hello world!",
  booleanExample: true,
  numberExample: 3.14159265,
  dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
  arrayExample: [5, true, "hello"],
  nullExample: null,
  objectExample: {
      a: 5,
      b: {
          nested: "foo"
      }
  }
};

// Add a new document with a generated id.
const createPost = async (title, description) => {
  console.log("ingresé")
const docRef = await addDoc(collection(firestore, "Posts"), {
  title: title,
  description: description
})
console.log("Document written with ID: ", docRef.id);
}

// Set the "capital" field of the city 'DC'-DOC UPDATE
const editPost = async (title, description) => {
await updateDoc(docRef, {
  title: true,
  description:true
});
}

// Update the timestamp field with the value from the server
const time = async (timestamp) => {
const updateTimestamp = await updateDoc(docRef, {
  timestamp: serverTimestamp()
});
}

//DELETE POST
const deletePost = async () => {
await deleteDoc(doc(firestore, "Posts", "id"));
}

export { readData, savedUser, createPost, editPost, time, deletePost };
