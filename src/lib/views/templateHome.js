export const home = () => {
    const divHome = document.createElement("div");

    const viewHome = `
        <img src="" alt="logo-ticket">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, modi nam!</p>
        <button class="btn-login">Login</button>
        <button class="btn-signUp">Sign Up </button>
    `
    divHome.innerHTML = viewHome;
    return divHome;
}