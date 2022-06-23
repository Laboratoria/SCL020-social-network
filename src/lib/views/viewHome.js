//Este archivo es para la vista principal de la app
export const interpHome = () => {
	const divHome = document.createElement('div');

	const formHome = `
    <div id="rootHome">
      <div>
        <p> aqui van los post de la pag. </p>
      </div> 
    </div>
  `;
	divHome.innerHTML = formHome;
	return divHome;
};
