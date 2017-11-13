var matricesA = [];
var matricesB = [];
var matricesC = [];

function obtenerValores () {

  var matrizA = $(".matriz-A").val().split("");
  var matrizA1 = $(".matriz-A1").val().split("");
  var matrizA2 = $(".matriz-A2").val().split("");

  var matrizB = $(".matriz-B").val().split("");
  var matrizB1 = $(".matriz-B1").val().split("");
  var matrizB2 = $(".matriz-B").val().split("");

  matricesA.push(matrizA, matrizA1, matrizA2);
  matricesB.push(matrizB, matrizB1, matrizB2);

};

function multiplicacion (){
  obtenerValores();

  for(var i=0; i <= 2; i++){
    for(var j=0; j <= 2; j++){
          var matrizC = matricesA[i][j]*matricesB[j][i] +
          matricesA[i][j]*matricesB[j][i] +
          matricesA[i][j]*matricesB[j][i];
          matricesC.push(matrizC);
          console.log(matricesA[2][1]);

    }
  }
};

function cargarPagina(){
  $("#resultado").click(multiplicacion);
};

$(document).ready(
  cargarPagina()
);
