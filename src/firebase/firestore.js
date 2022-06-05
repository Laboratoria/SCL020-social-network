import {
  db, collection, addDoc, getDocs, auth, serverTimestamp, query, orderBy, limit,
} from './init.js';

// Creating Posts collection and adding new docs to collection
const createPost = async (review, movie, country) => {
  let userName;
  if (auth.currentUser.displayName === null) {
    userName = auth.currentUser.email;
  } else {
    userName = auth.currentUser.displayName;
  }
  addDoc(collection(db, 'posts'), {
    userName,
    userId: auth.currentUser.uid,
    review,
    movie,
    country,
    date: Date(Date.now()), // cambiar por TIMESTAMP
  });
};

// Reading Post
const readingPost = async () => {
  const result = await getDocs(collection(db, 'posts'));
  const q = query(result.query, orderBy('date', 'desc'), limit(5));
  // console.log(q);
  const filterQ = await getDocs(q);
  // console.log(filterQ);
  return filterQ.docs;
};

// Country View Posts
const countryPosts = async (country) => {
  const q = query(collection(db, 'posts'), where('country', '==', country), orderBy('date', 'desc'));
  const querySnapshot = await getDocs(q);
  return filterQ.docs;
};

export { createPost, readingPost, countryPosts };

// const q = query(result.query, orderBy('date', 'desc'), limit(5)); // , limit(n)
