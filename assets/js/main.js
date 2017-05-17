function lista(){
var lista = document.getElementById("lista")
lista.addEventListener("click", function(){
	var texto = document.createElement("textarea");
	texto.setAttribute("id", "area-texto");
	texto.setAttribute("placeholder", "Agregar lista");
	var cont = document.getElementById("contenedor");
	cont.appendChild(texto);

	/*var tareas = document.getElementById("tarea").value;
	document.getElementById("tarea").value = "";*/

	var botn = document.createElement("button");
	botn.onclick = function(){
		alert("Hola");
	/*var nuevasTareas = document.createElement("div");
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement("span");
	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);*/
	}

	botn.innerText = "Agregar";
	cont.appendChild(botn);

});


}

lista();
