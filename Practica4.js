angular.module('app', ['ionic'])
.controller('MainCtrl', function($scope) {
  $scope.total = 0;
  $scope.agregarGasto = function() {
    // Capturar los valores de los campos de texto
    var tipoGasto = $scope.tipoGasto;
    var monto = parseFloat($scope.monto);
    
    // Crear elemento HTML con los valores capturados
    var nuevoGasto = document.createElement('p');
    nuevoGasto.textContent = "Tipo de Gasto: " + tipoGasto + ", Monto: " + monto;
    
    // Insertar el nuevo elemento en la página
    document.getElementById('listaGastos').appendChild(nuevoGasto);
    
    // Calcular el total
    $scope.total += monto;
    
    // Limpiar los valores de los campos de texto
    $scope.tipoGasto = '';
    $scope.monto = '';
  };
});


