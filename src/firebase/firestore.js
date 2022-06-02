import {
 db, collection, addDoc, getDocs,
} from './init.js';

const createDoc = async (userId,userName) => {
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

  const createPost = async (textPost) => {
    try {
      const postRef = await addDoc(collection(db, 'posts'), {
          description:textPost,
        });

      return postRef.description;
    } catch (error) {
      console.log('post no funciona');
      return null;
    }
  };

const readingPost = async () => {
    debugger
    const querySnapshot = await getDocs(collection(db, 'posts'));
    let list ="";
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        list+=
            `
            ${JSON.stringify(doc.data().description)}
            <br>
            `;
    });
    return list;
};

export {createDoc,createPost,readingPost}
