import {
  db, collection, addDoc, getDocs,
} from './init.js';

// Creating Users collection and adding new docs to collection
const createDoc = async (userId, userName) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      user: userId,
      name: userName,
    });
    console.log('Document written with ID: ', docRef.id);
    return docRef;
  } catch (error) {
    console.log('esta wea no funciona');
    return null;
  }
};

// Creating Posts collection and adding new docs to collection
const createPost = async (textPost) => {
  try {
    const postRef = await addDoc(collection(db, 'posts'), {
      description: textPost,
    });
    return postRef;
  } catch (error) {
    console.log('post no funciona');
    return null;
  }
};

// Reading Post
const readingPost = async () => {
  const results = await getDocs(collection(db, 'posts'));
  const list = document.createElement('ul');

  results.forEach((doc) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = doc.data().description;

    list.appendChild(listItem);
  });

  return list;
};


export { createDoc, createPost, readingPost };

