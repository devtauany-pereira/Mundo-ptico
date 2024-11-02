
  function enviarMensagemWhatsApp(nomeProduto) {
    // Substitua XXXXXXXXXXXX pelo número de telefone do destinatário
    var numeroTelefone = 'XXXXXXXXXXXX';
    // Mensagem a ser enviada
    var mensagem = 'Olá, estou interessado no produto ' + nomeProduto + '. Poderia me fornecer mais informações?';
    // Monta o link para enviar mensagem pelo WhatsApp
    var linkWhatsApp = 'https://api.whatsapp.com/send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);
    // Abre o link no WhatsApp
    window.open(linkWhatsApp);
  }
</script>

<script type="text/javascript">
  $(document).ready(function(){
    $('.produto-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });