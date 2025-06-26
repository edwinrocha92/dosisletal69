// Inicializar Parallax de Materialize
document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  });

function pedirProductoConTalla() {
    const tallaSeleccionada = document.getElementById('talla-camisa-negra').value;
    if (!tallaSeleccionada) {
      alert('Por favor selecciona una talla.');
      return;
    }
    enviarPedido('Camisa Negra', '$350 MXN', tallaSeleccionada);
  }
  function pedirProductoConTalla2() {
    const tallaSeleccionada = document.getElementById('talla-gorra-negra').value;
    if (!tallaSeleccionada) {
      alert('Por favor selecciona una talla.');
      return;
    }
    enviarPedido('Gorra Negra', '$250 MXN', tallaSeleccionada);
  }
  function pedirProductoConTalla3() {
    const tallaSeleccionada = document.getElementById('talla-combo').value;
    if (!tallaSeleccionada) {
      alert('Por favor selecciona una talla.');
      return;
    }
    enviarPedido('Combo Letal', '$600 MXN', tallaSeleccionada);
  }

function enviarPedido(producto, precio, talla) {
  const destinatario = "example@gmail.com";
  const asunto = encodeURIComponent(`Pedido - ${producto}`);

  const textoBody = `
    🧢 Producto: ${producto}
    💲 Precio: ${precio} 
    📏 Talla: ${talla} 

    Gracias por tu compra.
    Dosis Letal 69
    `;

  const mailtoLink = `mailto:${destinatario}?subject=${asunto}&body=${encodeURIComponent(textoBody)}`;
  window.open(mailtoLink, "_blank");
}


function pedirConTalla() {
  const talla = document.getElementById('talla-camisa-negra').value;
  if (!talla) {
    alert('Por favor selecciona una talla antes de pedir.');
    return;
  }
  enviarPedido('Camisa Negra - Talla ' + talla, '$350 MXN');
}