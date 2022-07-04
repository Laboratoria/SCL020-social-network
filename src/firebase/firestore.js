import { db, addDoc, collection, getDocs, onSnapshot, query } from './init.js';

export const createPost = () => {
    const formPost = document.querySelector('#form_post');
	formPost.addEventListener("submit", (e) => {
		e.preventDefault();
		const title = formPost.postTitle.value;   // asi accedo a los valores del formulario por su nombre
		const text = formPost.postText.value;
		newPost(title, text);
	});
};

export const newPost = (title, text) => {
    addDoc(collection(db, "Comentarios"), {
        Autor:"",
        Content: text,
        Title:title
      }).then (()=> {
        alert("entré");
      }).catch (()=>{
        alert("Error");
      })
};

export const lookPost = async () => {
  try {
    let dataPost = [];
    const respuestaDataPost = await getDocs(collection(db, "Comentarios"));
      respuestaDataPost.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      dataPost.push({ id: doc.id, data: doc.data() });
    });
    console.log(dataPost);
    return dataPost;
  }
  catch (error) {
    console.log(error);
  }
};

export const snapshot = (callback) => {
  const q = query(collection(db, "Comentarios"));
  onSnapshot(q, (callback))
  };
  

