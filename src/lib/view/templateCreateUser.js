export const creatUser = () => {
  const viewCreatUser = `
    <div id='userCreationView'>
    <div id="insertProfilePic" class="background-red">
      <img id="profile" src="img/Profile.png" alt="Profile">
    </div>
    <div id="userCreationContainer">
      <p class="instruction">Ingresa tus datos personales</p>
      <form action="FIREBASE??">
        <div id="input-container">
          <input type="text" name="userName" id="userName_id" placeholder="Nombre personal o de tu marca">
          <input type="date" name="userDateOfBirth" id="dateOfBirth" placeholder="Fecha de nacimiento">
          <input type="mail" name="userMail" id="userMail_id" placeholder="Correo electronico valido">
          <input type="password" name="userPassword" id="userPassword_id" minlength="8" placeholder="Contraseña">
        </div>
      </form>
      <p class="instruction">Quieres ingresar como:</p>
      <img id=bakerImg src="img/Baker.png" alt="Baker" class="bakerEaterImg"><img id="eaterImg" src="img/eater.png" alt="Eater" class="bakerEaterImg">
    <div id="submitBt">
      <input type="submit" value="Crear usuario" id="creatUserBt">
    </div>
  </div>
</div>
    `;
  return viewCreatUser;
};
