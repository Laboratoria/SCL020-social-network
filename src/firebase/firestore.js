import {
  collection,
  addDoc,
  getDocs,
  Timestamp,
  query,
  orderBy,
  doc,
  updateDoc,
  getDoc,
  onSnapshot,
  deleteDoc,
  where,
  arrayRemove,
  arrayUnion,
} from 'firebase/firestore';

import { db, auth } from './init';

// Creating Posts collection and adding new docs to collection
const createPost = async (review, movie, country) => {
  let userName = auth.currentUser.displayName;
  let userId = auth.currentUser.uid;
  let photo = auth.currentUser.photoURL;

  await addDoc(collection(db, 'posts'), {
    userName,
    userId,
    review,
    movie,
    country,
    likesArr: [],
    likesSum: 0,
    date: Timestamp.fromDate(new Date()),
    photo,
  });
};

// Reading Posts
const readingPost = (callback) => {
  const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
  onSnapshot(q, callback);
};

// Editing Posts
const editPost = async (id, review, movie, country) => {
  const postRef = doc(db, 'posts', id);
  await updateDoc(postRef, {
    review,
    movie,
    country,
  });
};

// Deleting Posts
const deletePost = async (id) => {
  await deleteDoc(doc(db, 'posts', id));
};

// Profile Posts
const profilePosts = async (userId, callback) => {
  const q = query(
    collection(db, 'posts'),
    where('userId', '==', userId),
    orderBy('date', 'desc')
  );
  onSnapshot(q, callback);
};

// Map Posts
const mapPosts = (countryName, callback) => {
  try {
    const q = query(
      collection(db, 'posts'),
      where('country', '==', countryName),
      orderBy('date', 'desc')
    );
    onSnapshot(q, callback);
  } catch (error) {
    console.log(error);
  }
};

// Liking Posts
const likingPost = async (idPost, idUser) => {
  const postRef = doc(db, 'posts', idPost);
  const userUid = idUser;
  console.log(idUser);
  const post = await getDoc(postRef);
  const likesPost = post.data().likesArr;
  const likesCounter = post.data().likesSum;

  if (likesPost.includes(userUid)) {
    await updateDoc(postRef, {
      likesArr: arrayRemove(userUid),
      likesSum: likesCounter - 1,
    });
  } else {
    await updateDoc(postRef, {
      likesArr: arrayUnion(userUid),
      likesSum: likesCounter + 1,
    });
  }
  // const currentLikes = likesPost.length;
  // console.log(currentLikes);
};

// Liked Posts by user (favorites)
const likedPosts = async (userId, callback) => {
  const q = query(
    collection(db, 'posts'),
    where('likesArr', 'array-contains', userId)
  );
  onSnapshot(q, callback);
};

export {
  createPost,
  readingPost,
  editPost,
  deletePost,
  profilePosts,
  likingPost,
  mapPosts,
  likedPosts,
};
