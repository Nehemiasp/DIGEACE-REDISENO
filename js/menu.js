/* Menú móvil: botón con texto "Menú". En escritorio la navegación siempre es visible. */
(function () {
  var boton = document.querySelector(".menu-boton");
  var menu = document.getElementById("menu-principal");
  var movil = window.matchMedia("(max-width: 767px)");

  function ajustar() {
    if (movil.matches) {
      var abierto = boton.getAttribute("aria-expanded") === "true";
      menu.hidden = !abierto;
    } else {
      menu.hidden = false;
      boton.setAttribute("aria-expanded", "false");
    }
  }

  boton.addEventListener("click", function () {
    var abierto = boton.getAttribute("aria-expanded") === "true";
    boton.setAttribute("aria-expanded", String(!abierto));
    menu.hidden = abierto;
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && movil.matches && boton.getAttribute("aria-expanded") === "true") {
      boton.setAttribute("aria-expanded", "false");
      menu.hidden = true;
      boton.focus();
    }
  });

  menu.addEventListener("click", function (e) {
    if (movil.matches && e.target.closest("a")) {
      boton.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    }
  });

  movil.addEventListener("change", ajustar);
  ajustar();
})();
