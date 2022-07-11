import { collection, addDoc, getDocs, onSnapshot, query, doc } from "./init";
import { root } from "../../main";
import { post } from "./templatePost";

//Formulario enviado DOM
const postForm = document.getElementById('postform');
postForm.addEventListener('submit', (e) =>{
    e.preventDefault();

   const title = postForm['posTitle'];
   const postText = postForm['postText'];

   //obtiene el valor del titulo y el post del input y textarea
   savePost(title.value,postText.value);
    
   //Resetea el formulario, lo limpia
   postForm.reset();

});


//Función que guarda los datos del formulario del post
export const savePost = (title, postText) => {

    //Agrega un doc a una colección en formato de objeto
    addDoc(collection(db,'posts'),{title:title, post:post});

};

//Busca o enlista el post desde Firestore
export const getPost = () => { 
    //enlista los datos o docs
    const lookPost = getDocs(collection(db,'posts'));
    return lookPost;
}

//convierte el doc firebase en un obj js
export const docData = doc.data();

//Crea el post y los solicita una vez
export const createPost = async () => {
    //obtiene el listado de los docs inmediatos
const snapShotText = await getPost();
//recorre los datos y crea el html del post
snapShotText.forEach( doc => {
    post(docData) += root.innerHTML;
});
};    

//crea el post con una suscripción o sin refrescar la pagina
export const onGetPost = async () => {

    const querySnapShot = await getPost();

onSnapshot(collection(db,'posts'),(querySnapShot) => 

//crea el html del post
querySnapShot.forEach( doc => {
    post(docData) += root.innerHTML;
})
)
};