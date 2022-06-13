import { navigate } from "../router/routes.js";
import { signOutWithEmail } from "../firebase/auth.js";
import { auth } from "../firebase/init.js";

function news() {
  const html =
    //html
    `
<div class="background-white">
    <div class="bar">
        <div id="navMenu">
          <div>
            <h4> PlantGram <img src="./assets/flower.png"></h4>
            <ul>
                <li><a href='#' id='linkNews'> NOTICIAS </a></li>
                <li><a href='#' id='linkProfile'> MI PERFIL </a></li>
                <li><a href='#' id='linkGroups'> GRUPOS </a></li>
                <li><a href='#' id='linkPublic'> PUBLICACIONES </a></li>
            </ul>
          </div>
          <ul class="logOutList">
            <li>
              <a href='#' id='signOut'> Cerrar sesión </a>
            </li>
          </ul>
        </div>
        <h5>PlantGram</h5>
    </div>
    <div class="dashboard">
        <h2>NOTICIAS</h2>
        <div class="newsPost">
            <div class="post-header">
                <h3>Mi primera foto</h3>
                <div class="postAction">
                  <div class="postLikes">
                    <span>
                      20
                    </span>
                    <picture>
                      <img width="28" src="./assets/like.png">
                    </picture>
                  </div>
                  <div class="postComment">
                    <img width="21"  src="./assets/comment.png">

                  </div>
                </div>

            </div>
            <div>
                <img src="https://picsum.photos/300/200"alt="
                el pirineo">
            </div>
            <div class="post-footer">
                <p>Se derriten los hielos del pirineo</p>
            </div>
        </div>

        <div class="newsPost">
            <div class="post-header">
                <h3>Mi primera foto</h3>
                <div class="postAction">
                  <div class="postLikes">
                    <span>
                      20
                    </span>
                    <picture>
                      <img width="28" src="./assets/like.png">
                    </picture>
                  </div>
                  <div class="postComment">
                    <img width="21"  src="./assets/comment.png">

                  </div>
                </div>

            </div>
            <div>
                <img src="https://picsum.photos/300/200"alt="
                el pirineo">
            </div>
            <div class="post-footer">
                <p>Se derriten los hielos del pirineo</p>
            </div>
        </div>
        <div class="newsPost">
            <div class="post-header">
                <h3>Mi primera foto</h3>
                <div class="postAction">
                  <div class="postLikes">
                    <span>
                      20
                    </span>
                    <picture>
                      <img width="28" src="./assets/like.png">
                    </picture>
                  </div>
                  <div class="postComment">
                    <img width="21"  src="./assets/comment.png">

                  </div>
                </div>

            </div>
            <div>
                <img src="https://picsum.photos/300/200"alt="
                el pirineo">
            </div>
            <div class="post-footer">
                <p>Se derriten los hielos del pirineo</p>
            </div>
        </div>

        <div class="newsPost">
            <div class="post-header">
                <h3>Mi primera foto</h3>
                <div class="postAction">
                  <div class="postLikes">
                    <span>
                      20
                    </span>
                    <picture>
                      <img width="28" src="./assets/like.png">
                    </picture>
                  </div>
                  <div class="postComment">
                    <img width="21"  src="./assets/comment.png">

                  </div>
                </div>

            </div>
            <div>
                <img src="https://picsum.photos/300/200"alt="
                el pirineo">
            </div>
            <div class="post-footer">
                <p>Se derriten los hielos del pirineo</p>
            </div>
        </div>
    </div>
</div>`;
  const container = document.createElement("div");
  container.innerHTML = html;
  const linkNews = container.querySelector("#linkNews");
  linkNews.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("news");
  });
  const linkProfile = container.querySelector("#linkProfile");
  linkProfile.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("profile");
  });
  const linkGroups = container.querySelector("#linkGroups");
  linkGroups.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("groups");
  });
  const linkPublic = container.querySelector("#linkPublic");
  linkPublic.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("publications");
  });
  const signOut = container.querySelector("#signOut");
  signOut.addEventListener("click", async () => {
    try {
      await signOutWithEmail(auth);
      navigate("login");
    } catch (error) {
      throw error.message;
    }
  });
  return container;
}

// const navMenu=document.querySelector("#navMenu");
// navMenu.addEventListener("click",()=>{
//     navMenu.classList.toggle("active");
// });

export { news };
