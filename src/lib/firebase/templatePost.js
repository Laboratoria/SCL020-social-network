//import { docData } from "./firestore"

//Template del post
export const post = (data) => {
    const viewPost = `<div> 
    <h3>${data.title}</h3>
    <p>${data.text}</p>
    </div>`;
 return viewPost;
} 