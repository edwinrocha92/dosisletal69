// Inicializar Parallax de Materialize
document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  });


function enviarPedido(producto, precio) {
  const destinatario = "example@gmail.com";
  const asunto = encodeURIComponent(`Pedido - ${producto}`);

  const textoBody = `
    🧢 Producto: ${producto}
    💲 Precio: ${precio} 
    
    Gracias por tu compra.
    
    Dosis Letal 69
    `;

  const mailtoLink = `mailto:${destinatario}?subject=${asunto}&body=${encodeURIComponent(textoBody)}`;
  window.open(mailtoLink, "_blank");
}

  