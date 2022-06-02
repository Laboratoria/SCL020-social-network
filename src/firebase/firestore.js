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

  export {createDoc}

const readingData = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
};

readingData();