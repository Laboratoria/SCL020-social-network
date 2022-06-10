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
  arrayRemove, arrayUnion,
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
    likesArr: [],
    likesSum: 0,
    date: Timestamp.fromDate(new Date()),
  });
  // console.log(docRef);
  return docRef.id;
};

// Reading Posts
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

// Editing Posts
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

// Deleting Posts
const deletePost = async (id) => {
  await deleteDoc(doc(db, 'posts', id));
};

// Profile Posts
const profilePosts = async (callback) => {
  const userId = localStorage.getItem('userUid');
  const q = query(collection(db, 'posts'), where('userId', '==', userId));
  onSnapshot(q, (callback));
};

// Map Posts
const mapPosts = async (countryName, callback) => {
  try {
    const q = query(collection(db, 'posts'), where('country', '==', countryName));
    onSnapshot(q, (callback));
  } catch (error) {
    console.log(error);
  }
};

// Liking Posts
const likingPost = async (id) => {
  const postRef = doc(db, 'posts', id);
  const userUid = auth.currentUser.uid;
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
const likedPosts = async (callback) => {
  const userId = localStorage.getItem('userUid');
  console.log(userId, 'user id en liked view');
  const q = query(collection(db, 'posts'), where('likesArr', 'array-contains', userId));
  onSnapshot(q, (callback));
};

export {
  createPost, readingPost, editPost, gettingDoc, deletePost, profilePosts, likingPost, mapPosts, likedPosts,
};

// const q = query(result.query, orderBy('date', 'desc'), limit(5)); // , limit(n)

