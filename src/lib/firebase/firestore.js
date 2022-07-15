//funciones firestore
import { db, collection, addDoc, onSnapshot, query, doc, getDoc, deleteDoc } from "./init.js";



//obtiene los docs en tiempo real
export const onGetPost = (callback) => onSnapshot(collection(db, "posts"), callback);
//console.log(onGetPost());


//crea el post en tiempo real
const createPost = async () => {
  onGetPost((snapShot) => {
    let card = "";
    const divPost = document.createElement("div");

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

    divPost.innerHTML = card;


    const btnsDelete = divPost.querySelectorAll('.btnDelete');
    btnsDelete.forEach(btn => {
        btn.addEventListener('click', (event) => {

            deletePost(event.target.dataset.id);
        });
       });


    const btnsEdit = divPost.querySelectorAll('.btnEdit');
    btnsEdit.forEach(btn => {
        btn.addEventListener('click', async (event) => {
           
            const doc = await editPost(event.target.dataset.id);
            
           const docData = doc.data();

           const title = document.getElementById('postTitle');
           const postText = postform['postText'];
           title.value = docData.title;
           postText.value = docData.text;

        });
       }); 
   
  });
  return createPost;
};

console.log(createPost());
//Función que guarda los datos del formulario del post en firebase
export const savePost = (title, text) => {

  //Agrega un doc a una colección en formato de objeto
  addDoc(collection(db,'posts'),{title:title, text:text});
  //console.log(collection(db,'posts'),{title:title, text:text});
};


export const editPost = (id) => getDoc(doc(db,'posts',id));
  

export const deletePost = (id) => deleteDoc(doc(db,'posts',id));


// //crea el post en tiempo real
// export const createPost = async () => {
//   onGetPost((snapShot) => {
//     let card = "";

//     const divPost = document.createElement("div");

//     //recorre el array de docs de firebase
//     snapShot.forEach((doc) => {
//       //console.log(doc.data())
//       const docData = doc.data(); //el .data() convierte los objetos firebase a obj JS
     
//       card += `<div> 
//         <h3>${docData.title}</h3>
//         <p>${docData.text}</p>
//         <button class="btnEdit" data-id="${doc.id}">Editar</button>
//         <button class="btnDelete" data-id="${doc.id}">Eliminar</button>
//         </div>`;
//     });

//     divPost.innerHTML = card;


//     const btnsDelete = divPost.querySelectorAll('.btnDelete');
//     btnsDelete.forEach(btn => {
//         btn.addEventListener('click', (event) => {

//             deletePost(event.target.dataset.id);
//         });
//        });


//        const btnsEdit = divPost.querySelectorAll('.btnEdit');
//        btnsEdit.forEach(btn => {
//            btn.addEventListener('click', async (event) => {
              
//                const doc = await editPost(event.target.dataset.id);
               
//               const docData = doc.data();
   
//               const title = document.querySelector('#postTitle');
//               const postText = document.querySelector("#postText");

//               title.value = docData.title;
//               postText.value = docData.text;
   
//            });
//           }); 
    
//   });
  

// };

//console.log(createPost());