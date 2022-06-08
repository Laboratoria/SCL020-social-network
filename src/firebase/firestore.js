import { async } from 'regenerator-runtime';
import {
  db,
  collection,
  addDoc,
  getDocs,
  auth,
  Timestamp,
  query,
  orderBy,
  limit,
  doc,
  updateDoc,
  getDoc,
  onSnapshot,
  deleteDoc,
  where,
} from './init.js';

// Creating Posts collection and adding new docs to collection
const createPost = async (review, movie, country) => {
  let userName;
  if (auth.currentUser.displayName === null) {
    userName = auth.currentUser.email;
  } else {
    userName = auth.currentUser.displayName;
  }
  const docRef = await addDoc(collection(db, 'posts'), {
    userName,
    userId: auth.currentUser.uid,
    review,
    movie,
    country,
    date: Timestamp.fromDate(new Date()),
  });
  // console.log(docRef);
  return docRef.id;
};

// Reading Post
const readingPost = (callback) => {
  const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
  onSnapshot(q, (callback));
};

// Get one Doc
const gettingDoc = async (id) => {
  const postRef = doc(db, 'posts', id);
  const result = await getDoc(postRef);

  return result.data();
};

// Edit Post
const editPost = async (id, review, movie, country) => {
  const postRef = doc(db, 'posts', id);
  await updateDoc(postRef, {
    review,
    movie,
    country,
  });
};

// Country View Posts
const countryPosts = async (country) => {
  const q = query(
    collection(db, 'posts'),
    where('country', '==', country),
    orderBy('date', 'desc'),
  );
  const querySnapshot = await getDocs(q);
  return filterQ.docs;
};

const deletePost = async (id) => {
  await deleteDoc(doc(db, 'posts', id));
};

const profilePosts = async (callback) => {
  try {
    const userId = localStorage.getItem('userUid');
    console.log(userId);
    const q = query(collection(db, 'posts'), where('userId', '==', userId));
    onSnapshot(q, (callback));
  } catch (error) {
    console.log(error, 'malo');
  }
};

export {
  createPost, readingPost, countryPosts, editPost, gettingDoc, deletePost, profilePosts,
};

// const q = query(result.query, orderBy('date', 'desc'), limit(5)); // , limit(n)
