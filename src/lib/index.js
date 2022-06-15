import { signup } from "../firebase/auth";

const btn = divSignUp.querySelector(".btn-create")
btn.addEventListener("click", async (e) => {
    e.preventDefault()
    const email = divSignUp.querySelector("#email").value;
    const password = divSignUp.querySelector("#password").value;
    signup(email, password);
    showTemplate("#/welcome");
})

