<button id="signup-btn" class="open-btn">Sign Up</button>
<!--SIGN UP MODAL-->
<dialog id="modal-signup" class="modal">
  <!--dialog tag elimina la necesidad de toogle(classList) la clase show/hidden de un modal-->
  <div class="modal-content">
    <form id="form" class="form" method="dialog">
      <!--este método permite que el modal se cierre en automático con el submit del form-->
      <div id="user-info" class="user-info">
        <label for="name">Name: </label>
        <input id="name" type="text" placeholder="Your name">
        <br>
        <label for="email">Email: </label>
        <input id="email" type="email" placeholder="Your email">
        <br>
        <label for="password">Password: </label>
        <input id="password" type="password" placeholder="Your password">
      </div>
      <div id="signup-btns" class="signup-btns">
        <button id="submit-btn" class="submit-btn" type="submit">Sign Up</button>
        <br>
        <p>Or: </p>
        <br>
        <button id="google-btn" class="google-btn">Sign Up with Google</button>
      </div>
    </form>
  </div>
</dialog>

<!--LOG IN MODAL-->
<button id="login-btn" class="login-btn"> Log in</button>
<dialog id="modal-login" class="modal"> <!--dialog tag elimina la necesidad de toogle(classList) la clase show/hidden de un modal-->
  <div class="modal-content">
    <form id="login-form" class="form" method="dialog"> <!--este método permite que el modal se cierre en automático con el submit del form-->
      <label for="login-email">Email: </label>
      <input id="login-email" type="email" placeholder="Your email">
      <br>
      <label for="login-password">Password: </label>
      <input id="login-password" type="password" placeholder="Your password"> <!--el atributo type password enmascara el input-->
      <br>
      <button id="login-btn" class="submit-btn" type="submit">Log in</button>
    </form>
  </div>
</dialog>
<button id="signOut">Sign out</button>