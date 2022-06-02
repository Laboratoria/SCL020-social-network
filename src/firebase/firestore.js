import {
  db, collection, addDoc, getDocs,
} from './init.js';

// Creating User Collection
const createDoc = async (userId, userName) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      user: userId,
      name: userName,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.log('esta wea no funciona');
    return null;
  }
};

// Creating Post
const createPost = async (textPost) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      description: textPost,
    });
    console.log('Document written with ID: ', docRef.id);
    return docRef.description;
  } catch (error) {
    console.log('post no funciona');
    return null;
  }
};

// Reading Post
const readingPost = async () => {
  let list = '';
  const querySnapshot = await getDocs(collection(db, 'posts'));
  querySnapshot.forEach((doc) => {
    list += `<li> ${JSON.stringify(doc.data().description)} </li>`;
  });
  return list;
};

// Printing Post
const printingPost = async (textPost) => {
  await createPost(textPost);
  readingPost();
};
  
export { createDoc, printingPost };
