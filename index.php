<!DOCTYPE html>
<html lang="pt-br">
  <head>

    <meta charset="utf-8">
    <title>Murano Design</title>
    <meta name="description" content="Estúdio de design editorial. Objetos digitais de aprendizagem, livros didáticos digitais, games educativos, epubs, animação, conteúdo interativo e ilustração." >
    <meta name="author" content="Murano Design">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="stylesheets/styles.css">





    <!-- Favicon
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link rel="icon" type="image/png" href="images/MuranoDesign-Ico.ico">

    <script>
      if ('registerElement' in document
        && 'createShadowRoot' in HTMLElement.prototype
        && 'import' in document.createElement('link')
        && 'content' in document.createElement('template')) {
        // We're using a browser with native WC support!
      } else {
        document.write('<script src="https:\/\/cdnjs.cloudflare.com/ajax/libs/polymer/0.3.4/platform.js"><\/script>')
      }
    </script>
    <link rel="import" href="scripts/dist/x-gif.html">

    <?php  header("Content-Type: text/html;charset=UTF-8"); ini_set('display_errors', '0'); error_reporting(E_ERROR | E_WARNING | E_PARSE); ?>

  </head>
  <body>

    <div id="wrapper">
      <div id="AncoraHome"></div>

      <?php include_once("scripts/analyticstracking.php"); ?>

      <?php


        $local = "";
        $scripts = "";

        $whitelist = array(
            '127.0.0.1',
            '::1'
        );

        if(!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
            //$local = "assets/includes/minify";
            //$scripts = ".min";
            $local = "assets/includes";
        } else {
            $local = "assets/includes";
        }

      ?>

      <!-- Primary Page Layout
      –––––––––––––––––––––––––––––––––––––––––––––––––– -->


        <!-- Banner : Arte -->
        <?php include_once($local."/header.php"); ?>


        <!-- Menu Abaixo do Banner -->
        <?php include_once($local."/menu.php"); ?>


        <!-- Intro -->
        <?php include_once($local."/intro.php"); ?>
       
        <!-- portfolio -->
        <?php include_once($local."/portfolio.php"); ?>

        <!-- Como Fazemos -->
        <?php include_once($local."/comoFazemos.php"); ?>


        <!--  O Que Fazemos -->
        <?php include_once($local."/queFazemos.php"); ?>

        <!-- Quem Somos -->
        <?php include_once($local."/quemSomos.php"); ?>


        <!-- Clientes  -->
        <?php include_once($local."/clientes.php"); ?>


        <!-- Carrousel  -->
        <?php include_once($local."/clientesCarrousel.php"); ?>


        <!-- Fale Conosco -->
        <?php include_once($local."/contato.php"); ?>


        <!-- Rodapé  -->
        <?php include_once($local."/rodape.php"); ?>



    </div>

        <!-- Inside portfolio -->
        <?php include_once($local."/floatPortfolio.php"); ?>


  <script src="http://maps.googleapis.com/maps/api/js"></script>
  <script src="https://use.typekit.net/fug4oxp.js"></script>
  <script>try{Typekit.load({ async: true });}catch(e){}</script>
  <script type="text/javascript" src="assets/javascripts/jquery-2.1.4.min.js"></script>
  <script type="text/javascript" src="scripts/hammer.min.js"></script>
  <script type="text/javascript" src="assets/javascripts/bootstrap.js"></script>

  <script src="scripts/parametrizacaoCaminhos.js"></script>

  <script>
    function initialize() {
      var mapProp = {
        center:new google.maps.LatLng(-23.5604139,-46.6561622),
        zoom:17,
        scrollwheel:  false,
        mapTypeId:google.maps.MapTypeId.ROADMAP
      };
      var map=new google.maps.Map(document.getElementById("MapGoogle"),mapProp);

      var marker=new google.maps.Marker({
        position:new google.maps.LatLng(-23.5604139,-46.6561622),
        });

      marker.setMap(map);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
  </script>

  <script type="text/javascript" src="scripts/script<?php echo $scripts; ?>.js"></script>


<script type="text/javascript">

  function CarregaPortifolio(campo){

   
    $("#wrapper").css("height","0px");
    $("#floatPortfolio").css("display","block");

    $('html, body').animate({
      scrollTop: 0
    }, 500);

    var dbi = <?php include_once("assets/includes/PortfolioPages/port.json"); ?>;

    var db = dbi[campo];

    var html = "";

    for(var val of db.ordem){
      switch (val){
        case "banner":
          html+= '<?php include_once("assets/includes/PortfolioPages/banner.php"); ?>';
        break;
        case "logo":
          html+= '<?php include_once("assets/includes/PortfolioPages/logo.php"); ?>';
        break;
        case "tituloCinza":
          html+= '<?php include_once("assets/includes/PortfolioPages/tituloCinza.php"); ?>';
        break;
        case "slide":
          html+= '<?php include_once("assets/includes/PortfolioPages/slider.php"); ?>';
        break;
        case "titulo":
          html+= '<?php include_once("assets/includes/PortfolioPages/titulo.php"); ?>';
        break;
        case "texto":
          html+= '<?php include_once("assets/includes/PortfolioPages/texto.php"); ?>';
        break;
        case "imagem":
          html+= '<?php include_once("assets/includes/PortfolioPages/imagem.php"); ?>';
        break;
        case "Sair":
          html+= '<?php include_once("assets/includes/PortfolioPages/sair.php"); ?>';
        break;
      }
    }

    
    $("#floatPortfolio").html(html);

    $("#floatPortfolio .wrapperSlide").html("");

    var images = "";

    for(var a=0; a< db.banner.length; a++){
      images+="url(images/Portfolio/"+db.banner[a]+")";

      images+= (a == (db.banner.length-1) ? "":", ");
    }


    $("#floatPortfolio .banner").css("background-image", images);
    $("#floatPortfolio .logo img").attr("src", "images/Portfolio/"+db.logo);

    $("#floatPortfolio .slider .comment").html(db.slides[0].descricao);


    PageVars.SliderPortfolioLimite = db.slides.length;

    var lng = Math.max(db.titulos.length,db.titulosCinzas.length,db.textos.length,db.imagens.length,db.slides.length);


    for(var a=0; a<lng;a++){

      if(a < db.titulos.length)
        $($("#floatPortfolio .titulo .conteudo").get(a)).html(db.titulos[a]);
      
      if(a < db.titulosCinzas.length)
        $($("#floatPortfolio .tituloCinza .conteudo").get(a)).html(db.titulosCinzas[a]);
      
      if(a < db.textos.length)
        $($("#floatPortfolio .texto .conteudo").get(a)).html(db.textos[a]);
      
      if(a < db.imagens.length)
        $($("#floatPortfolio .imagem .conteudo").get(a)).find("img").attr("src", "images/Portfolio/"+db.imagens[a]);
      
      if(a < db.slides.length){
        $("#floatPortfolio .slider .wrapperSlide").append('<x-gif src="" alt=""></x-gif>');
        $($("#floatPortfolio .slider .wrapperSlide x-gif").get(a)).attr("src", "images/Portfolio/"+db.slides[a].imagem);
        $($("#floatPortfolio .slider .wrapperSlide x-gif").get(a)).css("width",(100/(db.slides.length))+"%");
      }
    }

    $("#floatPortfolio .slider .wrapperSlide").css("width",((db.slides.length)*100)+"%");



    $("#floatPortfolio .slider .arrow").click(function(){

      var direcao = ($(this).attr("class")).split(" ");

      if(direcao[2] == "left")
        PageVars.SliderPortfolioPos--;
      else 
        PageVars.SliderPortfolioPos++;
        
      


      if(PageVars.SliderPortfolioPos == PageVars.SliderPortfolioLimite){
        PageVars.SliderPortfolioPos = 0;
      } else if(PageVars.SliderPortfolioPos == -1){
        PageVars.SliderPortfolioPos = PageVars.SliderPortfolioLimite-1;
      }

      $("#floatPortfolio .slider .slideShow .wrapperSlide").css("left",((PageVars.SliderPortfolioPos*100)*-1)+"%");

      $("#floatPortfolio .slider .comment").html(db.slides[PageVars.SliderPortfolioPos].descricao);
    });


    $("#floatPortfolio .btnSair").click(function(){

      $("#wrapper").css("height","auto");
      $("#floatPortfolio").css("display","none");

      $('html, body').animate({
        scrollTop: ($('#AncoraPortfolio').offset().top - $('#Menu').height() - 25)
      }, 500);

    });
   



    
    
  };


</script>



  <!-- End Document
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>
</html>