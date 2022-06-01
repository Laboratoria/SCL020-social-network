import {Header} from "../utils/header.js";
import {Footer} from "../utils/footer.js";

const Profile = () => {
  const template = `
    <h1 style="text-align:center";>Por ahora soy vista Perfil</h1>`;

  const container = document.createElement('section');
  container.className = 'profile-page';
  container.innerHTML = template;

  container.append(Header(), Footer());

  return container;
};

export default Profile;
