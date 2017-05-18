function lista(){
	//Creación de un área de texto:
	var lista = document.getElementById("lista"); //Llamo al input que tiene como id "lista"
	lista.addEventListener("click", function(){ //Le doy un evento al input "lista"
	var texto = document.createElement("textarea"); //El evento contiene un elemento de texto para añadir una lista
	texto.setAttribute("id", "area-texto");
	texto.setAttribute("placeholder", "Añadir una lista");
	var cont = document.getElementById("contenedor");//Este evento se va a colocar en el contenedor hecho en html
	cont.appendChild(texto);//Luego al contenedor le daremos como hijo el elemento de texto que se ha creado previamente
	var cont2 = document.getElementById("contenedor-tarjeta");
	var separacion = document.createElement("br");

	//Creación de un botón para guardar lo escrito en el área de texto:
	var botn = document.createElement("button");//Además de llamar a un área de texto, llama al botón guardar
	botn.onclick = function(){//Este botón de guardar tiene como función imprimir lo que se escriba en el área de texto.
	var tareas = document.getElementById("area-texto").value;
	document.getElementById("area-texto").value = "";
	var nuevasTareas = document.createElement("div");//Las nuevas tareas se agregan a un div
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement("span");//Se imprimen en un span
	elementoContenedor.appendChild(textoNuevaTarea);//Este span con las nuevas tareas se guardan
	nuevasTareas.appendChild(elementoContenedor);//Y luego se colocan como hijo del span
	cont.appendChild(nuevasTareas);//Las nuevas tareas apareceran en el contenedor del html
	
	//Creación del elemento tarjeta que debe aparecer al momento de guardar una lista:
	var tarjeta = document.createElement("input");
	tarjeta.setAttribute("id", "area-tarjeta");
	tarjeta.setAttribute("placeholder", "Añadir una tarjeta");
	cont2.appendChild(nuevasTareas);
	cont2.appendChild(tarjeta);
	
	}

	botn.innerText = "Guardar";//Texto del botón que guarda la lista
	separacion.appendChild(texto);
	cont.appendChild(texto);
	cont.appendChild(botn);//El contenedor 1 tiene como hijo al botón que guarda la lista

});
}

lista();

/*Errores:
- Funciona solo el primer input "Añadir lista", cuando se crea otra, al ingresar texto no se imprime, solo 
aparece el input para añadir etiqueta
- Luego de apretar "Guardar" se debería ocultar el botón con la caja de texto y solo se debiese ver el 
título de la lista con el input de la etiqueta
- El input de añadir etiqueta no está desarrollado*/

