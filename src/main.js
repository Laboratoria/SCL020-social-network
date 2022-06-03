// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

 //appendchild inyecta en el html el elemento que se creó en el JS (son hijos de body <-- se puede cmabiar dps)
 //onpopstate es el que copia la URL y lo mete en el history list (historial de navegacion) permitiendo ir a la pagina anterior o adelante segun corresponda


let a= document.createElement("button");
a.innerText ="Home"
let b= document.createElement("button");
b.innerText ="Registro"
let c= document.createElement("button");
c.innerText ="Eventos"
// Firefox guarda los objetos estado en el disco del usuario
//objeto estado=primer parametro del pushstate
a.addEventListener('click', (e)=>{
  history.pushState({page:'page'}, '','Home')
})
document.body.appendChild(a)

  b.addEventListener('click', (e1)=>{
  history.pushState({page1:'page1'}, '','Registro')
})
document.body.appendChild(b)

c.addEventListener('click', (e2)=>{
  history.pushState({page2:'page2'}, '','Eventos')
})
document.body.appendChild(c)

window.onpopstate= (e)=>{
  e.state.page
}
window.onpopstate= (e1)=>{
  e1.state.page1
}
window.onpopstate= (e2)=>{
  e2.state.page2
}
