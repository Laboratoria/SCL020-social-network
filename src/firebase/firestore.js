import { db, addDoc, collection } from './init.js';

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

export const lookPost = () => {
    const post = collection(db, "Comentarios");
    console.log("post", post);
}

