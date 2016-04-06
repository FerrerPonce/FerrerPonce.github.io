<script type="text/javascript" src="some/path/raphael-min.js"></script>
<script type="text/javascript" src="some/path/spain-map.min.js"></script>
<script type="text/javascript">
    new SpainMap({
      id: 'map', //(Requerido) Elemento HTML en el que se renderizará el mapa
      width: 700, //(Requerido) Ancho del mapa
      height: 400, //(Requerido) Alto del mapa
      fillColor: "#eeeeee", // color de relleno del mapa
      strokeColor: "#bbbbbb", // color de las líneas de frontera
      strokeWidth: 0.7, // ancho de las líneas de frontera
      selectedColor: "#99eeee", // color de relleno de la provincia al pasar el ratón por encima
      animationDuration: 200, // Duración de la animación de salida
      onClick: function(province, mouseevent) {
        // Método que se ejecutará al hacer click sobre una provincia
      },
      onMouseOver: function(province, mouseevent) {
        // Método que se ejecutará al pasar el ratón sobre una provincia
      },
      onMouseOut: function(province, mouseevent) {
        // Método que se ejecutará al salir de una provincia
      }
    });
</script>
