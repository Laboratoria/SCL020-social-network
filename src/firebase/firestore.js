import {
  db, collection, addDoc, getDocs, auth
} from './init.js';


// Creating Posts collection and adding new docs to collection
const createPost = async (review,movie,country) => {
  let userName;
    if (auth.currentUser.displayName === null) {
        userName = auth.currentUser.email;
      } else {
        userName = auth.currentUser.displayName;
      };
    addDoc(collection(db, 'posts'), {
      userName,
      userId:auth.currentUser.uid,
      review,
      movie,
      country,
      date:Date(Date.now()), //cambiar por TIMESTAMP
    })
};


// Reading Post
const readingPost = async () => {
  const results = await getDocs(collection(db, 'posts'));
  const listItem = [];
/*   results.forEach((doc) => {
    listItem.push(doc.data())
  }); */

  return results;
};


export { createPost, readingPost };

