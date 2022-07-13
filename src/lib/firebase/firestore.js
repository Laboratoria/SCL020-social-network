import { db, collection, addDoc, getDocs, onSnapshot, query, doc, getDoc, deleteDoc } from "./init.js";
import { postText, root, title } from "../../main.js";



//Función que guarda los datos del formulario del post en firebase
export const savePost = (title, text) => {

    //Agrega un doc a una colección en formato de objeto
    addDoc(collection(db,'posts'),{title:title, text:text});
    //console.log(collection(db,'posts'),{title:title, text:text});
};

//Busca o enlista el post desde Firestore
export const getPost = () => getDocs(collection(db,'posts'));
   
 //Son los mismos datos
//console.log(getDocs(collection(db,'posts')));
//console.log(getPost());


//obtiene los docs en tiempo real
const onGetPost = (callback) => onSnapshot(collection(db, "posts"), callback);
//console.log(onGetPost());

//crea el post en tiempo real
const createPost = async () => {
  onGetPost((snapShot) => {
    let card = "";

    //recorre el array de docs de firebase
    snapShot.forEach((doc) => {
      //console.log(doc.data())
      const docData = doc.data(); //el .data() convierte los objetos firebase a obj JS
      //root.innerHTML = post(docData);
      card += `<div> 
        <h3>${docData.title}</h3>
        <p>${docData.text}</p>
        <button class="btnEdit" data-id="${doc.id}">Editar</button>
        <button class="btnDelete" data-id="${doc.id}">Eliminar</button>
        </div>`;
    });

    root.innerHTML = card;


    const btnsDelete = root.querySelectorAll('.btnDelete');
    btnsDelete.forEach(btn => {
        btn.addEventListener('click', (event) => {

            deletePost(event.target.dataset.id);
        });
       });


    const btnsEdit = root.querySelectorAll('.btnEdit');
    btnsEdit.forEach(btn => {
        btn.addEventListener('click', async (event) => {
           
            const doc = await editPost(event.target.dataset.id);
            
           const docData = doc.data();

           title.value = docData.title;
           postText.value = docData.text;

        });
       }); 
    
  });
  
};

console.log(createPost());


export const editPost = (id) => getDoc(doc(db,'posts',id));
  

export const deletePost = (id) => deleteDoc(doc(db,'posts',id));