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
    previousLike: false,
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

// Deleting Posts
const deletePost = async (id) => {
  await deleteDoc(doc(db, 'posts', id));
};

// Profile Posts to delete posts
const profilePosts = async (callback) => {
  try {
    const userUid = localStorage.getItem('userUid');
    // console.log(userUid);
    const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
    onSnapshot(q, (callback));
  } catch (error) {
    console.log(error, 'malo');
  }
};

// Rendering current likes count
const renderLike = (id) => {
  // let count = 0;
  const postRef = doc(db, 'posts', id);
  const result = onSnapshot(postRef, (doc) => {
    const likesCounter = doc.data().likesArr.length;
    console.log(likesCounter);
  });

  return result;
};

// Fetching likes
const fetchLikes = async (userUid, postRef, likesPost, callback) => {
  if (likesPost.includes(userUid)) {
    await updateDoc(postRef, {
      likesArr: arrayRemove(userUid),
      previousLike: true,
    });
  } else {
    await updateDoc(postRef, {
      likesArr: arrayUnion(userUid),
      previousLike: false,
    });
  }

  callback();
};

// Liking Posts in Home
const likingPost = async (id) => {
  const postRef = doc(db, 'posts', id);
  const userUid = auth.currentUser.uid;
  // console.log(userUid, 'en liking post home');
  const post = await getDoc(postRef);
  // console.log(post, "post en liking post")
  const likesPost = post.data().likesArr;
  await fetchLikes(userUid, postRef, likesPost, () => {
    renderLike(id);
  });
};

export {
  createPost, readingPost, countryPosts, editPost, gettingDoc, deletePost, profilePosts, likingPost,
};

// const q = query(result.query, orderBy('date', 'desc'), limit(5)); // , limit(n)
