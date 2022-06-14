# JunkTube

¿Alguna vez has pensado en visitar alguna ciudad o país, y te hubiese encantado encontrar un documental o película filmada en algunas de sus avenidas emblemáticas para envolverte en la cultura y cotidianidad de la época? ¡Bienvenid@ a JunkTube, tu nueva red social favorita 💜! 

Intercambia reviews y opiniones de películas y documentales según su locación de filmación. El objetivo es compartir e inspirar a otros a visitar los lugares representados.

## Úsala:
[JunkTube App](https://scl-020-social-network-di8b8z632-junktube-team.vercel.app/) 🚀


## Usuarios

Amantes del cine y viajeros, que buscan una referencia visual de los lugares que quieren vistar, así como intercambiar sus opiniones sobre dichas películas o documentales. 

## Historias de usuario

### Historia de usuario 1:
Yo como usuario quiero poder crear una cuenta con más de una alternativa, y poder ingresar a la app a través de mi celular.

#### Criterios de aceptación:
- El usuario debe tener la posibilidad de crear su cuenta con su correo y contraseña.
- El usuario debe tener la posiblidad de crear su cuenta a través de su cuenta de Google. 
- El usuario debe poder ingresar/login a la app por el medio deseado (correo y contraseña o Google).
- Para crear cuenta, el usuario no podrá dejar campos sin completar en su registro (nombre, correo y contraseña).
- La contraseña ingresada no podrá ser menor de 6 caracteres.

#### Definición de terminado:
- Validación de registro de usuario con correo y contraseña a través de Firebase Auth exitosa.
- Validación de registro de uario a través de cuenta de correo Google, a través de Firebase Auth exitosa. 
- Si contraseña creada por el usuario u otro de los campos de registro no cumple con los requerimientos, se muestra mensaje de alerta, informando al usuario de los campos a cambiar. 
- La app es SpA y reponsive, optimizando la experiencia del usuario. 
- Se aprueban test unitarios.

### Historia de usuario 2:
Yo como usuario quiero publicar un post en la app.

#### Criterios de aceptación:
- El usuario debe poder crear un post en la app. 
- No se podrá publicar post sin contenido (vacíos).

#### Definición de terminado:
- Se valida a través de Firestore que el usuario está registrado en la base de datos, y que al momento de publicar está logeado para aceptarse su post en la app. 
- Los post son presentados en Home/Feed en orden descendiente según su fecha de publicación.
- Se aprueban test unitarios.

### Historia de usuario 3:
Yo como usuario quiero editar mis propios post.

#### Criterios de aceptación:
- Solo el usuario que creó el post debe poder editar su contenido y republicarlo.
- El usuario debe tener la posibilidad de visualizar sus posts creados. 

#### Definición de terminado:
- Se crea perfil del usuario, donde el usuario puede acceder a su historial de posts creados. 
- Se valida a través de Firestore que solo el usuario que creó un post puede actualizar su contenido en tiempo real.
- Se aprueban test unitarios. 

### Historia de usuario 4:
Yo como usuario quiero tener la posibilidad de eliminar mis posts.

#### Criterios de aceptación:
- Solo el usuario que creó el post debe poder eliminar el post.
- El usuario debe tener la posibilidad de visualizar sus posts creados para poder eliminarlos.

#### Definición de terminado:
- Se crea perfil del usuario, donde el usuario puede acceder a su historial de posts creados.
- Se pide confirmación al usuario antes de eliminar el post.
- Se valida a través de Firestore que solo el usuario que creó un post puede eliminarlo.
- Se valida que cuando el post es eliminado por el usuario, efectivamente se elimina de la base de datos. 
- Se aprueban test unitarios. 

### Historia de usuario 5:
Yo como usuario quiero poder dar like a otros posts.

#### Criterios de aceptación:
- El usuario debe tener la posibilidad de interactuar con otros usuarios, dando like tanto a sus posts como a los posts de otros usuarios. 
- El usuario debe tener la posibilidad de acceder a su historial de posts favoritos, es decir, a los posts que ha dado like. 

#### Definición de terminado:
- Se crea perfil de likes del usuario, en donde el usuario conoce el historial de posts a los que ha dado like.
- Se registra conteo visible de los likes que tiene cada post.
- Se aprueban test unitarios. 

## Diseño de la Interfaz de Usuario:

### Prototipo de baja fidelidad:
En esta primera instancia decidimos los viajes del usuario principales, por ejemplo, vista de Home o Feed y Vista de Perfil del Usuario. Así como el estilo base que tendrían nuestra app y posts. 

También decidimos enfocarnos primero en su versión móvil (mobile first):
![Prototype-Low-Quality](img/prototipo-baja.png)

### Prototipo en alta:
Realizamos el prototipado en la plataforma Figma, en la cual definimos nuestra paleta de colores inicial y estilo visual de la app, así como las vistas finales que se presentarían al usuario: vista de home, vista de perfil, y vista de historial de likes.

<b>Vistas Log-In/Sign Out, y Feed:</b>
![Prototype-High-Quality](img/prototipo-alta1.png)

<b>Vistas Feed, interacción en Feed y Perfil Usuario:</b>
![Prototype-High-Quality](img/prototipo-alta2.png)

<b>Vista Geolocalización y Post:</b>
![Prototype-High-Quality](img/prototipo-alta3.png)

<b>Prototipo Versión Escritorio:</b>
![Prototype-High-Quality](img/prototipo-alta4.png)

## Investigación Testeo de Prototipado

Se realizó encuesta a dos usuarios que cumplen con el perfil definido, con el cual perfeccionamos nuestras historias de usuario e interacción en nuestra app. 

Las preguntas realizadas fueron:
- ¿La app es fácil de utilizar?
- ¿La app es interactiva?
- ¿Consideras que la app es consistente en sus colores y concepto?
- ¿Esteticamente te gustó la app?
- ¿Qué tan satisfech@ te encuentras con la app?
- ¿Te gustaría compartir con nosotras algún feedback, o algo que consideres podemos mejorar?

## Resultado

Gracias al feedack proporcionado en la etapa previa por las personas entrevistadas, así como feedback de nuestras compañeras y coaches, realizamos cambios a nuestra app, por ejemplo, paleta de colores seleccionado.

<b>App Vistas Registro, Ingreso y Bienvenida:</b>
![Prototype-High-Quality](img/mobile-1.png)

<b>App Vistas Home/Feed, Nuevo Post y Perfil Usuario:</b>
![Prototype-High-Quality](img/mobile-2.png)

<b>App Vistas Perfil Likes/Favoritos del usuario, y Vista Búsqueda por País:</b>
![Prototype-High-Quality](img/mobile-3.png)


