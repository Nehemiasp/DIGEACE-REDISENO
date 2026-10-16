/* Buscador de trámites del hero: combobox con sugerencias, teclado completo y botón de borrar. */
(function () {
  var MAX = 6;
  var form = document.getElementById("buscador");
  var input = document.getElementById("q");
  var lista = document.getElementById("sugerencias");
  var borrar = form.querySelector(".buscador__borrar");
  var estado = form.querySelector(".buscador__estado");
  var tramites = window.TRAMITES || [];
  var activo = -1;
  var resultados = [];

  function normalizar(texto) {
    return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }

  function buscar(consulta) {
    var palabras = normalizar(consulta).split(/\s+/).filter(Boolean);
    if (!palabras.length) return [];
    return tramites.filter(function (t) {
      var base = normalizar(t.nombre + " " + t.grupo);
      return palabras.every(function (p) { return base.indexOf(p) !== -1; });
    });
  }

  function resaltar(nombre, consulta) {
    var palabras = normalizar(consulta).split(/\s+/).filter(Boolean);
    var base = normalizar(nombre);
    var marcas = new Array(nombre.length).fill(false);
    palabras.forEach(function (p) {
      var i = base.indexOf(p);
      while (i !== -1) {
        for (var k = i; k < i + p.length; k++) marcas[k] = true;
        i = base.indexOf(p, i + p.length);
      }
    });
    var html = "";
    var abierto = false;
    for (var j = 0; j < nombre.length; j++) {
      var c = nombre[j].replace(/&/g, "&amp;").replace(/</g, "&lt;");
      if (marcas[j] && !abierto) { html += "<mark>"; abierto = true; }
      if (!marcas[j] && abierto) { html += "</mark>"; abierto = false; }
      html += c;
    }
    return abierto ? html + "</mark>" : html;
  }

  function abrir() { lista.hidden = false; input.setAttribute("aria-expanded", "true"); }
  function cerrar() {
    lista.hidden = true;
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
    activo = -1;
  }

  function marcarActivo(i) {
    var opciones = lista.querySelectorAll('[role="option"]');
    opciones.forEach(function (o, n) { o.setAttribute("aria-selected", n === i ? "true" : "false"); });
    activo = i;
    if (i >= 0) input.setAttribute("aria-activedescendant", opciones[i].id);
    else input.removeAttribute("aria-activedescendant");
  }

  function pintar() {
    var consulta = input.value.trim();
    borrar.hidden = !input.value;
    estado.textContent = "";
    if (!consulta) { cerrar(); return; }

    resultados = buscar(consulta);
    lista.innerHTML = "";
    activo = -1;

    if (!resultados.length) {
      var vacio = document.createElement("li");
      vacio.className = "sugerencias__vacio";
      vacio.setAttribute("role", "presentation");
      vacio.innerHTML = 'No encontramos trámites con ese nombre. Pruebe con otra palabra o <a href="#tramites">vea la lista completa</a>.';
      lista.appendChild(vacio);
      estado.textContent = "No se encontraron trámites.";
      abrir();
      return;
    }

    resultados.slice(0, MAX).forEach(function (t, i) {
      var li = document.createElement("li");
      li.id = "sugerencia-" + i;
      li.setAttribute("role", "option");
      li.setAttribute("aria-selected", "false");
      li.innerHTML = '<span class="sugerencia__nombre">' + resaltar(t.nombre, consulta) + "</span>" +
                     '<span class="sugerencia__grupo">' + t.grupo + "</span>";
      li.addEventListener("mousedown", function (e) { e.preventDefault(); elegir(i); });
      lista.appendChild(li);
    });

    var total = resultados.length;
    estado.textContent = total === 1 ? "1 trámite encontrado." : total + " trámites encontrados.";
    abrir();
  }

  function elegir(i) {
    input.value = resultados[i].nombre;
    cerrar();
    form.submit();
  }

  input.addEventListener("input", pintar);
  input.addEventListener("focus", function () { if (input.value.trim()) pintar(); });
  input.addEventListener("blur", cerrar);

  input.addEventListener("keydown", function (e) {
    var n = Math.min(resultados.length, MAX);
    if (e.key === "ArrowDown" && n) {
      e.preventDefault();
      if (lista.hidden) pintar();
      marcarActivo((activo + 1) % n);
    } else if (e.key === "ArrowUp" && n) {
      e.preventDefault();
      marcarActivo(activo <= 0 ? n - 1 : activo - 1);
    } else if (e.key === "Enter" && activo >= 0) {
      e.preventDefault();
      elegir(activo);
    } else if (e.key === "Escape") {
      if (!lista.hidden) { e.preventDefault(); cerrar(); }
      else if (input.value) { input.value = ""; pintar(); }
    }
  });

  borrar.addEventListener("click", function () {
    input.value = "";
    pintar();
    input.focus();
  });
})();
