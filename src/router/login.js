const login = `
<div id="login-box" class="login-box">
<img src="#" id="logo" class="logo">
<h2>Sign In or Register</h2>
<form id="form" class="form">
  <!--este método permite que el modal se cierre en automático con el submit del form-->
  <div id="user-info" class="user-info">
    <label for="email">Email: </label>
    <input id="email" type="email" placeholder="Your email">
    <br>
    <label for="password">Password: </label>
    <input id="password" type="password" placeholder="Your password">
  </div>
  <div id="form-btns" class="form-btns">
    <input id="log-in" type="submit" value="Entrar">
    <br>
    <p>Dont you have an account?</p>
    <br>
  </div>
</form>
<form id="form1">
  <div>
    <label for="name">Name: </label>
    <input id="name" type="name" placeholder="Your name">
    <br>
    <label for="email">Email: </label>
    <input id="email1" type="email" placeholder="Your email">
    <br>
    <label for="password">Password: </label>
    <input id="password1" type="password" placeholder="Your password">
    <br>
    <input id="sign-up" type="submit" value="Registrar"><!-- hacer popup: name, validación password -->
    <br>
    <button id="google-btn" class="google-btn">Sign Up with Google</button>
  </div>
</form>

</div>`;
 
  export {login}
