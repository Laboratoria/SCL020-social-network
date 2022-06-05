// import { navigate } from '../router/router.js';
// import { out } from '../firebase/auth.js';
import { Header } from '../utils/header.js';
import { Footer } from '../utils/footer.js';
import { readingPost } from '../firebase/firestore.js';
 
const container = document.createElement('div');
 
const Home = () => {
  container.className = 'home-page';
 
  return container;
};
 
// Printing posts, header and footer to home page
const refetch = async () => {
  container.innerHTML="";
  let postStructure = '';
  const list = await readingPost();
  list.forEach((doc)=>{
    const posts = doc.data();
    postStructure += `
    <div class="post-border">
      <div class='post'>
        <span class="date">${posts.date}</span><br>
        <p class="user-container">  
          <i class="user-name">${posts.userName}</i>
        dijo: </p>
        <h3>${posts.movie}</h3>
        <p>${posts.review}</p>
        <div>
          <div class='info-container'>
            <p class='info'><b>País:</b> ${posts.country} </p>
          </div>
          <button class='btn-delete btn' data-id='${doc.id}'>Delete</button>
          <button class='btn-edit btn' data-id='${doc.id}'>Edit</button>      
        </div>
      </div>
      <div class="likes-border">
        <button  class="btn-like" value=${doc.id}>
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm4.186 10.74L12 16.926L7.814 12.74a2.745 2.745 0 0 1 0-3.907a2.745 2.745 0 0 1 3.906 0l.28.279l.279-.279a2.745 2.745 0 0 1 3.906 0a2.745 2.745 0 0 1 .001 3.907z"/></svg>
        </button>
      </div>
    </div>
    `
 })
 const middle = document.createElement('div');
 middle.className ="middle";
 middle.innerHTML=postStructure;
  container.append(Header(),middle, Footer());
};
refetch();
 
export { Home, refetch };