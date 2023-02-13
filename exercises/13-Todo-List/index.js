// Your code here
// Obtener los elementos del DOM necesarios
const input = document.getElementById("addToDo");
const list = document.querySelector("ul");

// Agregar un listener de eventos para agregar tareas
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter" && input.value !== "") {
    const newTask = document.createElement("li");
    newTask.innerHTML = `<span><i class="fa fa-trash"></i></span> ${input.value}`;
    list.appendChild(newTask);
    input.value = "";
  }
  
});

// Agregar un listener de eventos para eliminar tareas
list.addEventListener("click", function(event) {
  if (event.target.tagName === "I") { //Lo que se hace aquí es validar que el elemento contenga una "<i>". Una buena práctica en JS es escribir las etiquetas HTML siempre en mayúsculas.
    event.target.parentElement.parentElement.remove(); //Se usa dos veces parentElement dado que con el primer parentElement se llega a la etiqueta <span> y dado que el elemento <li> que se desea eliminar está un nivel más arriba, de sebe usar, además, otro parentElement.
  }
});


/**
 Este código comienza obteniendo los elementos del DOM necesarios: el campo de entrada (input) y la lista de tareas (list).

Luego, se agrega un listener de eventos para el evento keypress en el campo de entrada. Cuando se presiona la tecla Enter y el campo de entrada no está vacío, se crea un nuevo elemento de lista (li) con el contenido del campo de entrada y se agrega a la lista de tareas. Finalmente, el valor del campo de entrada se restablece a una cadena vacía.

A continuación, se agrega un listener de eventos para el evento click en la lista de tareas. Cuando se hace clic en el icono de la papelera (<i class="fa fa-trash"></i>), se elimina el elemento de la lista correspondiente (li) del DOM. El uso de parentElement se debe a que necesitamos eliminar el elemento li que es el padre del elemento span y i. 
 */