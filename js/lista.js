/* Lista de trámites: filtro por tipo de solicitante y búsqueda en vivo.
   El buscador del hero usa esta misma lista a través de window.DigeaceLista. */
(function () {
  var seccion = document.getElementById("tramites");
  if (!seccion) return;

  var titulo = document.getElementById("titulo-tramites");
  var contador = document.getElementById("contador");
  var botones = Array.prototype.slice.call(seccion.querySelectorAll(".filtro"));
  var input = document.getElementById("filtrar");
  var borrar = seccion.querySelector(".filtrar__borrar");
  var grupos = Array.prototype.slice.call(seccion.querySelectorAll(".grupo"));
  var filas = Array.prototype.slice.call(seccion.querySelectorAll(".lista li"));
  var vacio = seccion.querySelector(".sin-resultados");
  var total = filas.length;
  var filtro = "todos";
  var movil = window.matchMedia("(max-width: 767px)");
  var resumenes = Array.prototype.slice.call(seccion.querySelectorAll(".grupo__resumen"));

  function hayFiltro() { return filtro !== "todos" || input.value.trim() !== ""; }

  /* En móvil los grupos se pliegan para acortar la página; en escritorio siempre están abiertos. */
  function ajustarModo() {
    resumenes.forEach(function (r) {
      r.tabIndex = movil.matches ? 0 : -1;
      if (movil.matches) r.removeAttribute("role"); else r.setAttribute("role", "presentation");
    });
    if (movil.matches) { if (!hayFiltro()) grupos.forEach(function (g) { g.open = false; }); }
    else grupos.forEach(function (g) { g.open = true; });
  }

  resumenes.forEach(function (r) {
    r.addEventListener("click", function (e) { if (!movil.matches) e.preventDefault(); });
  });
  movil.addEventListener("change", ajustarModo);

  function normalizar(texto) {
    return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }

  function aplicar() {
    var palabras = normalizar(input.value).split(/\s+/).filter(Boolean);
    var visibles = 0;

    filas.forEach(function (li) {
      var okGrupo = filtro === "todos" || li.getAttribute("data-grupo") === filtro;
      var okTexto = palabras.every(function (p) { return li.getAttribute("data-texto").indexOf(p) !== -1; });
      li.hidden = !(okGrupo && okTexto);
      if (!li.hidden) visibles++;
    });

    grupos.forEach(function (g) {
      var n = g.querySelectorAll("li:not([hidden])").length;
      g.hidden = n === 0;
      g.querySelector(".grupo__cuenta").textContent = n;
      if (movil.matches && hayFiltro() && n) g.open = true;
    });

    vacio.hidden = visibles !== 0;
    borrar.hidden = !input.value;
    contador.textContent = visibles === total
      ? total + " trámites"
      : visibles + (visibles === 1 ? " trámite" : " trámites") + " de " + total;
  }

  function elegirFiltro(valor) {
    filtro = valor;
    botones.forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-grupo") === valor ? "true" : "false");
    });
  }

  botones.forEach(function (b) {
    b.addEventListener("click", function () {
      elegirFiltro(b.getAttribute("data-grupo"));
      aplicar();
    });
  });

  input.addEventListener("input", aplicar);

  borrar.addEventListener("click", function () {
    input.value = "";
    aplicar();
    input.focus();
  });

  seccion.querySelector("[data-reiniciar]").addEventListener("click", function () {
    input.value = "";
    elegirFiltro("todos");
    aplicar();
    input.focus();
  });

  window.DigeaceLista = {
    buscar: function (texto) {
      input.value = texto;
      elegirFiltro("todos");
      aplicar();
      seccion.scrollIntoView();
      titulo.focus({ preventScroll: true });
    }
  };

  function irAFila() {
    var id = window.location.hash.slice(1);
    var fila = id.indexOf("t-") === 0 ? document.getElementById(id) : null;
    if (!fila) return;
    var grupo = fila.closest("details");
    if (grupo) grupo.open = true;
    fila.scrollIntoView();
  }

  var consulta = new URLSearchParams(window.location.search).get("q");
  if (consulta) input.value = consulta;
  ajustarModo();
  aplicar();
  window.addEventListener("hashchange", irAFila);
  irAFila();
})();
