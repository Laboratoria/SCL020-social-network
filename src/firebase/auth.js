import { createUserWithEmailAndPassword } from "./init.js";

export const register = (email,password) => {
    createUserWithEmailAndPassword(email, password)
    .then ((res) => {
        console.log(res.user)
    })
    .catch((err)=> {
        console.log(err.code)
        console.log(err.message)
    })
}
