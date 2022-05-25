export default ()=>{
    const homeHtml = `
    <h1>home</h1>
    <button id="sign-out">Sign Out</button>`;
    
    const logout = document.getElementById('sign-out');
    logout.addEventListener('click', () => {
      //navigate('/');
      signOut(auth);
      console.log("boton apretado");
    });

    return homeHtml
}
