/* =====================================================
   JavaScript de la hoja de vida (js/script.js)
   Usa lo visto en clase: getElementById, innerHTML,
   cambio de estilos y alert(), más algunos eventos nuevos.
   ===================================================== */


/* ---------- 1. MODO OSCURO (nació del reto del bombillo de clase) ---------- */
var botonTema = document.getElementById("boton-tema");

// Si la persona ya había elegido el modo oscuro antes, se vuelve a poner
if (localStorage.getItem("tema") === "oscuro") {
  document.body.classList.add("oscuro");
  botonTema.innerHTML = "Modo claro";
}

botonTema.addEventListener("click", function () {
  document.body.classList.toggle("oscuro");          // prende / apaga la clase "oscuro"

  if (document.body.classList.contains("oscuro")) {
    botonTema.innerHTML = "Modo claro";
    localStorage.setItem("tema", "oscuro");          // guarda la elección
  } else {
    botonTema.innerHTML = "Modo oscuro";
    localStorage.setItem("tema", "claro");
  }
});


/* ---------- 2. MENÚ DE CELULAR (hamburguesa) ---------- */
var botonMenu = document.getElementById("boton-menu");
var menu = document.getElementById("menu");

botonMenu.addEventListener("click", function () {
  menu.classList.toggle("abierto");                  // muestra u oculta el menú
});


/* ---------- 3. SALUDO SEGÚN LA HORA (solo existe en el inicio) ---------- */
var saludo = document.getElementById("saludo");

if (saludo) {                                        // si la página no tiene saludo, no hace nada
  var hora = new Date().getHours();
  var texto = "¡Hola!";

  if (hora < 12) {
    texto = "¡Buenos días!";
  } else if (hora < 18) {
    texto = "¡Buenas tardes!";
  } else {
    texto = "¡Buenas noches!";
  }

  saludo.innerHTML = texto + " Bienvenido a mi hoja de vida";
}


/* ---------- 4. FORMULARIO DE CONTACTO (solo en contacto.html) ---------- */
var formulario = document.getElementById("formulario-contacto");

if (formulario) {
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();                         // evita que la página se recargue

    var nombre = document.getElementById("nombre").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || mensaje === "") {
      alert("Por favor escribe tu nombre y un mensaje");
      return;
    }

    var caja = document.getElementById("respuesta-formulario");
    caja.style.display = "block";                    // cambia el estilo con JS
    // textContent escribe el nombre como texto simple (más seguro que innerHTML)
    caja.textContent = "¡Gracias, " + nombre + "! Tu mensaje quedó listo. " +
                       "(Este formulario es de práctica: todavía no se conecta a una base de datos).";
    formulario.reset();
  });
}
