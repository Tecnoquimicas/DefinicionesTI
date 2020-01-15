var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* PRIMER FILTRO */

function primerFiltro(a) {

  if (a == "todo") {
    document.getElementById("calidad").style.display = "block";
    document.getElementById("documentacion").style.display = "block";
    document.getElementById("planeacion").style.display = "block";
    document.getElementById("coordinacion").style.display = "block";
    document.getElementById("viabilidad").style.display = "block";
    document.getElementById("presupuesto").style.display = "block";
    document.getElementById("soporte").style.display = "block";
    document.getElementById("mejoras").style.display = "block";

  }

  if (a == "calidad") {
    document.getElementById("calidad").style.display = "block";
    document.getElementById("documentacion").style.display = "none";
    document.getElementById("planeacion").style.display = "none";
    document.getElementById("coordinacion").style.display = "none";
    document.getElementById("viabilidad").style.display = "none";
    document.getElementById("presupuesto").style.display = "none";
    document.getElementById("soporte").style.display = "none";
    document.getElementById("mejoras").style.display = "none";
  }

  if (a == "documentacion") {
    document.getElementById("calidad").style.display = "none";
    document.getElementById("documentacion").style.display = "block";
    document.getElementById("planeacion").style.display = "none";
    document.getElementById("coordinacion").style.display = "none";
    document.getElementById("viabilidad").style.display = "none";
    document.getElementById("presupuesto").style.display = "none";
    document.getElementById("soporte").style.display = "none";
    document.getElementById("mejoras").style.display = "none";
  }

  if (a == "planeacion") {
    document.getElementById("calidad").style.display = "none";
    document.getElementById("documentacion").style.display = "none";
    document.getElementById("planeacion").style.display = "block";
    document.getElementById("coordinacion").style.display = "none";
    document.getElementById("viabilidad").style.display = "none";
    document.getElementById("presupuesto").style.display = "none";
    document.getElementById("soporte").style.display = "none";
    document.getElementById("mejoras").style.display = "none";
  }

  if (a == "coordinacion") {
    document.getElementById("calidad").style.display = "none";
    document.getElementById("documentacion").style.display = "none";
    document.getElementById("planeacion").style.display = "none";
    document.getElementById("coordinacion").style.display = "block";
    document.getElementById("viabilidad").style.display = "none";
    document.getElementById("presupuesto").style.display = "none";
    document.getElementById("soporte").style.display = "none";
    document.getElementById("mejoras").style.display = "none";
  }

  if (a == "viabilidad") {
    document.getElementById("calidad").style.display = "none";
    document.getElementById("documentacion").style.display = "none";
    document.getElementById("planeacion").style.display = "none";
    document.getElementById("coordinacion").style.display = "none";
    document.getElementById("viabilidad").style.display = "block";
    document.getElementById("presupuesto").style.display = "none";
    document.getElementById("soporte").style.display = "none";
    document.getElementById("mejoras").style.display = "none";
  }

  if (a == "presupuesto") {
    document.getElementById("calidad").style.display = "none";
    document.getElementById("documentacion").style.display = "none";
    document.getElementById("planeacion").style.display = "none";
    document.getElementById("coordinacion").style.display = "none";
    document.getElementById("viabilidad").style.display = "none";
    document.getElementById("presupuesto").style.display = "block";
    document.getElementById("soporte").style.display = "none";
    document.getElementById("mejoras").style.display = "none";
  }

  if (a == "soporte") {
    document.getElementById("calidad").style.display = "none";
    document.getElementById("documentacion").style.display = "none";
    document.getElementById("planeacion").style.display = "none";
    document.getElementById("coordinacion").style.display = "none";
    document.getElementById("viabilidad").style.display = "none";
    document.getElementById("presupuesto").style.display = "none";
    document.getElementById("soporte").style.display = "block";
    document.getElementById("mejoras").style.display = "none";
  }

  if (a == "mejoras") {
    document.getElementById("calidad").style.display = "none";
    document.getElementById("documentacion").style.display = "none";
    document.getElementById("planeacion").style.display = "none";
    document.getElementById("coordinacion").style.display = "none";
    document.getElementById("viabilidad").style.display = "none";
    document.getElementById("presupuesto").style.display = "none";
    document.getElementById("soporte").style.display = "none";
    document.getElementById("mejoras").style.display = "block";
  }

}

/* Anade la clase */

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

/* Remueve la clase */

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}