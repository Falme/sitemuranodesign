/*

	// * = Mobile

	// MenuMobileAtivo			=	Booleano se o Menu No Mobile está visível
	// ScrollPosition			=	Posicao do Scrollbar (Body)
	// WindowWidth				=	Largura da janela do Browser {Adaptar para Document}
	// margemDeErro				=	Numero que divide os olhares no angulo Horizontal/Vertical x Diagonal para as pessoas do Grupo
	// pessoaSelecionada		=	Variavel que salvará a ultima pessoa clicada
	// classSelected			=	Local para salvar na variavel qual pessoa foi selecionada
	// *numeroPerson			=	Verificador de Atual Pessoa no carrousel de Fotos de Funcionarios
	// *directionSwipe			=	Verifica para qual Direção foi feito o Swipe ("r" || "l")
	// *CanSwipe				=	Se tem a possibilidade de ir para proxima foto (previne de ir ao proximo antes da animação terminar)
	// *mc						=	Função que habilita o Swipe nas fotos dos Funcionarios
	// numeroTransicaoClientes	=	Numero de Logos a serem mudados a cada transição
	// AncoraAtual				=	Qual Coluna da página o site está situado
	// curvaExercicios			=	Variavel com vários objetos, cada ubjeto é uma linha que vai do ponto A ao ponto B (Infográfico)
	// curvaNum					=	Numero de Divs/Bolinhas/Casas/Assets necessários para cada linha
	// curvaForm				=	Numeração de quantas linhas devem ser processadas

*/
var PageVars = {
	"MenuMobileAtivo": false,
	"ScrollPosition": 0,
	"WindowWidth": 0,
	"margemDeErro": 1.5,
	"pessoaSelecionada": undefined,
	"classSelected": undefined,
	"numeroPerson": 0,
	"directionSwipe": undefined,
	"CanSwipe": true,
	"mc": new Hammer(document.getElementById('contentGroupSwipe')),
	"numeroTransicaoClientes" : 4,
	"AncoraAtual" : "",
	"curvaExercicios" : [],
    "curvaNum" : [12, 12, 18,10,7,13,14],
    "curvaForm" : [1,2,3,4,5,6,7],
    "SliderPortfolioPos": 0,
    "SliderPortfolioLimite": 0
};






/* Fotos Funcionarios */


	/*--------------------------------------------------------------------*/

	//-----------------------------------------
	//
	//	Pessoas no Grupo [Desktop/Tablet]
	//
	//-----------------------------------------

	var Pessoas = [
				{"Nome":"Julia",		"NomeCompleto":"Julia Murano",			"X": [(56-55)+"","14"],			"Y":["41","32"],	"Width":["200","228"],	"Texto":"Javascript e lógica de programação na cabeça. É ela que chamamos quando precisamos de uma nova solução."	},
				{"Nome":"Dora",			"NomeCompleto":"Dora Murano",			"X": [(463-55)+"","375"],		"Y":["206","15"],	"Width":["150","179"],	"Texto":"Ligada 24/7, entusiasta de <br/> novas tecnologias, garimpa <br/> oportunidades incríveis."	},
				{"Nome":"Nilton",		"NomeCompleto":"Nilton Leme",			"X": [(222-55)+"","185"],		"Y":["271","167"],	"Width":["110","135"],	"Texto":"Nosso cara de TI, que também coloca a mão na massa quando o assunto é negócio."	},
				{"Nome":"Carol",		"NomeCompleto":"Carol Ferreira",		"X": [(806-55)+"","397"],		"Y":["438","283"],	"Width":["145","162"],	"Texto":"Essa mineirinha é fera em linguagem de programação. Comprometida, faz a diferença em todos os projetos que participa."	},
				{"Nome":"Pedro",		"NomeCompleto":"Pedro Henrique",		"X": [(360-55)+"","210"],		"Y":["435","375"],	"Width":["100","157"],	"Texto":"O menino do Debugger, mestre no CookieClicker, ta mt frio to bolado"	},
				{"Nome":"Fernando",		"NomeCompleto":"Fernando Siniscalchi",			"X": [(813-55)+"","567"],		"Y":["466","418"],	"Width":["200","138"],	"Texto":"Jovem <i>padawan</i> das artes milenares e ocultas da programação. Poliglota em <i>coding</i>, com fluência em Java, C#, C e ‘imbromeition’ em vb6 e javascript."	},
				{"Nome":"Bruno",		"NomeCompleto":"Bruno Ahn",				"X": [(428-55)+"","200"],		"Y":["613","571"],	"Width":["125","106"],	"Texto":"Aprende tudo muito rápido e está sempre atento. Designer versátil, gosta de produção audiovisual, diagramação e programação."	},
				{"Nome":"Diego",		"NomeCompleto":"Diego Garcia",			"X": [(479-55)+"","364"],		"Y":["10","15"],	"Width":["180","189"],	"Texto":"Imaginativo e apaixonado, gosta de presenciar pequenos milagres que fazem um código funcionar."	},
				{"Nome":"Rogerio",		"NomeCompleto":"Rogério Santos",		"X": [(700-55)+"","491"],		"Y":["580","849"],	"Width":["125","208"],	"Texto":"Nosso arquiteto de soluções. Profissional incansável na busca de novas tecnologias. Conectado 24 horas por dia, entusiasma a todos em cada projeto que participa."	},
				{"Nome":"Lucas",		"NomeCompleto":"Lucas Tavares",			"X": [(96-55)+"","66"],			"Y":["430","418"],	"Width":["115","102"],	"Texto":"Animação, edição e pós-produção. Motion Graphics é a sua praia."	},
				{"Nome":"Fabio",		"NomeCompleto":"Fabio Carvalho",		"X": [(55-55)+"","299"],		"Y":["458","743"],	"Width":["165","149"],	"Texto":"Talentoso programador de web e games, nosso Kenny G dos códigos."	},
				{"Nome":"Vitor",		"NomeCompleto":"Vitor Murano",			"X": [(428-55)+"","436"],		"Y":["55","855"],	"Width":["120","233"],	"Texto":"Admirador de práticas pedagógicas inovadoras, acompanha a implantação de projetos dentro das escolas sempre com disposição e bom-humor."	},
				{"Nome":"Alessandra",	"NomeCompleto":"Alessandra Stradiotto",	"X": [(814-55)+"","47"],		"Y":["409","863"],	"Width":["170","214"],	"Texto":"Entende muito de experiência do usuário e adora caçar bugs, garantindo o controle de qualidade."	},
				{"Nome":"Rafael",		"NomeCompleto":"Rafael Moreno",			"X": [(60-55)+"","455"],		"Y":["450","289"],	"Width":["140","120"],	"Texto":"Proatividade em pessoa, ágil na concepção de projetos e curte técnicas manuais."	}
				//{"Nome":"Felipe",		"NomeCompleto":"Felipe Veríssimo",		"X": [(769-55)+"","441"],		"Y":["208","545"],	"Width":["155","90"],	"Texto":"Gosta de pesquisa e está sempre bem informado nas tendências de design e vídeo."	},
					];

    


	/* Clientes */

	var listaClientes = [
							"natura",
							"telefonica",
							"amorim",
							"instituto_unibanco",
							"saraiva",
							"etico",
							"HCB",
							"EdBrasil"
							];



	/* Portfolio */

	var listaPortfolio = [
		/*{
			"nome":"Plataforma educacional amorim lima",
			"tags":["Plataforma","Web Design"],
			"ref":"amorim.png",
			"link":"Amorim",
			"size":[12,12,6]
		},*/
		{
			"nome":"Plataforma educacional crianças como parceiras",
			"tags":["Plataforma", "Web Design", "Objetos Digitais", "Ilustração"],
			"ref":"HCB.png",
			"link":"HCB",
			"size":[12,12,6]
		}
		/*{
			"nome":"Objetos digitais de aprendizagem",
			"tags":["Animação", "3D", "Web Design", "Ilustração"],
			"ref":"objetos.png",
			"link":"objDigitais",
			"size":[12,12,4]
		},
		{
			"nome":"Livros digitais",
			"tags":["Web Design", "Projeto Gráfico", "Motion Design"],
			"ref":"livros.png",
			"link":"livrosDigitais",
			"size":[12,12,4]
		}*/
	];



/* Init */
$( document ).ready(function() {

	PageVars.ScrollPosition = $(window).scrollTop();
	PageVars.WindowWidth = $(window).width();

	initPortfolio();

	$( window ).resize(function() {
		update();
	});

	$(window).scroll(function () {
		update();
	});

	window.setInterval(update,100);

});


function initPortfolio(){

	var html = "";

	for(var val of listaPortfolio){

		html+= '<div class="col-xs-'+val.size[0]+' col-sm-'+val.size[1]+' col-md-'+val.size[2]+'">'+
				'<div class="ImgPortfolioContainer" onclick="CarregaPortifolio(\''+val.link+'\')">'+
				'<img src="images/portfolio/'+val.ref+'" height="auto" width="100%" alt="" class="ImgPortfolio">'+
				'<div class="FiltroImgPortfolio text-center">'+
				'<div class="FiltroImgInfo">'+
				'<p class="FiltroImgTitulo text-uppercase">'+val.nome+'</p>'+
				'<hr class="FiltroImgSeparador">'+
				'<p class="FiltroImgTags">'+((val.tags).toString()).replace(/,/gi, ", ")+'</p>'+
				'</div>'+
				'</div>'+
				'</div>'+
				'</div>';

	}

	$(".iconesPortfolio").html(html);

}




function ActScroll(){

   	//showDotsGroup();
    
	sombraMenuSuperior();
	

	atualizaComoFazemos();
   	setDots();
}


function update(){

	resetMapGoogle();

	if(PageVars.ScrollPosition != $(window).scrollTop()){
	

		ActScroll();

		PageVars.ScrollPosition = $(window).scrollTop();
	} else if(PageVars.WindowWidth != $(window).width()){

		PageVars.AncoraAtual = "";
		setResize();

		PageVars.WindowWidth = $(window).width();
	}



	if($(".purpleDot").length == 0){
		showDotsGroup();

	}

	atualizaPosicaoHighlightMenu();
}

function showDotsGroup(){
	if($( window ).width() >= 768)
	{
		$('.purpleDot').detach();
		createLinesFunc();
	}
}

function sombraMenuSuperior(){

    var scrollTop = $(window).scrollTop();


	if(scrollTop>10 || (PageVars.MenuMobileAtivo && $('#OpcoesMenu').is(":visible"))){
	    $('#Menu').css({ 'box-shadow': '0px 2px 2px 0px rgba(0,0,0,0.34)'});
	    $('#Menu').css({ '-webkit-box-shadow': '0px 2px 2px 0px rgba(0,0,0,0.34)'});
	    $('#Menu').css({ '-moz-box-shadow': '0px 2px 2px 0px rgba(0,0,0,0.34)'});
		
	} else {
        $('#Menu').css({ 'box-shadow': '0px 0px 0px 0px rgba(0,0,0,0)'});
        $('#Menu').css({ '-webkit-box-shadow': '0px 0px 0px 0px rgba(0,0,0,0)'});
        $('#Menu').css({ '-moz-box-shadow': '0px 0px 0px 0px rgba(0,0,0,0)'});

	}
}


$("#buttonSaibaMais").click(function(){
	$("#ContentSaibaMais").slideToggle("slow");
});

$("#HamburgerIcon").click(function(){

	if(PageVars.MenuMobileAtivo)
	{
		$("#OpcoesMenu").css("top","-250px");
		PageVars.MenuMobileAtivo = false;

	} else {
		
		$("#OpcoesMenu").css("top","65px");
		PageVars.MenuMobileAtivo = true;
	}

});

/*window.onbeforeunload = function() {

return false;

}*/



/* Menu 
	Este Menu, ao ser clicado, vai leva o usuário até certa tela/posição do layout
*/

	


	$('.Opcao').on('click',function(e){
	     
		var Selecionado;
		var IDParent = $(this).parent().attr('id');
		var splitClasses = $(this).attr('class').split(" ");
		var IDMenuEscolhido = splitClasses[1].split("_");

		if(IDParent == "OpcoesMenu"){
			$("#OpcoesMenu").css("top","-250px");
			PageVars.MenuMobileAtivo = false;
		}



		$("#wrapper").css("height","auto");
    	$("#floatPortfolio").css("display","none");

    	//console.log('#AncoraPortfolio');

		$('html, body').animate({
			scrollTop: ($('#Ancora'+IDMenuEscolhido[1]).offset().top - $('#Menu').height() - 25)
		}, 500);

	});




//---------------------------------------------------------------------------
// 																		   
// Função de Inicialização do grupo, para Setar todas as pessoas e valores 
// 																		   
//---------------------------------------------------------------------------


	//Cria As div's das pessoas em seus locais específicos, de acordo com o Array acima
	for(var a=0; a< Pessoas.length; a++)
	{
		var localHTML = "<div class='Pessoa "+Pessoas[a].Nome+"' numId='"+a+"'></div>"+
						"<div class='TextoPessoaContent Box"+Pessoas[a].Nome+"' numId='"+a+"'>"+
								"<div class='Corners A'></div><div class='Corners B'></div><div class='Corners C'></div><div class='Corners D'></div>"+
							"<div class='TituloRoxo'>"+Pessoas[a].NomeCompleto+"</div>"+
							"<div class='TextoPessoal'>"+Pessoas[a].Texto+
							"</div>"+
						"</div>";

		$('#containerGrupo').append(localHTML);

		ResetPosicaoTextoFuncionario(a);

	}



	//Ao clicar em alguma pessoa do Grupo
	$('.Pessoa').click(function(){

		

		if(PageVars.pessoaSelecionada == undefined || PageVars.pessoaSelecionada.attr('class') != $(this).attr('class'))
		{
			PageVars.pessoaSelecionada = $(this);

			var pessoaPos = new getCenter(PageVars.pessoaSelecionada);

			refreshPersonsPosition(pessoaPos.posX,pessoaPos.posY);

			PageVars.pessoaSelecionada.css('background-position',((125*(PageVars.pessoaSelecionada.attr("numId")))*-1)+'px 0px');

			PageVars.classSelected =PageVars.pessoaSelecionada.attr('class').split(/\s+/);
			$('.TextoPessoaContent').fadeOut();
			$('.purpleDot').show();

			$('.Box'+PageVars.classSelected[1]).fadeIn(500);

			for(var a=0; a< $('.purpleDot').length; a++)
			{
				if($($('.purpleDot').get(a)).hasClass( "Linha"+PageVars.classSelected[1] ))
				{
					$($('.purpleDot').get(a)).hide();
				}

				//console.log($('.TextoPessoaContent.Box'+PageVars.classSelected[1]), $($('.purpleDot').get(a)));
				//console.log(VerificaColisao($('.TextoPessoaContent.Box'+PageVars.classSelected[1]), $($('.purpleDot').get(a))));

				//if(VerificaColisao($('.TextoPessoaContent.Box'+PageVars.classSelected[1]+''), $($('.purpleDot').get(a)))){
				//if(distanciaEntre($('.TextoPessoaContent.Box'+PageVars.classSelected[1]), $($('.purpleDot').get(a))) < 100){
						

				/*		$($('.purpleDot').get(a)).addClass("escond");
					
				} else {
						$($('.purpleDot').get(a)).removeClass("escond");

				}*/

					
			}


			for(var a=0; a<$('.Pessoa').length; a++){
				//for(var b=0; b<$('.Pessoa').length; b++){

					//if(a>b){

						var p1 = ($($('.Pessoa').get(a)).attr("class")).split(" ");
							$("."+p1[1]).removeClass("Moved");

						if(distanciaEntre($("."+p1[1]),$('.Box'+PageVars.classSelected[1])) < ($("."+p1[1]).height() + $('.Box'+PageVars.classSelected[1]).height()) && 
							$("."+p1[1]).position().top > $('.Box'+PageVars.classSelected[1]).position().top){
							//$("."+p1[1]).addClass("Moved");
						}
					//}

				//}
			}




		}

	});


	//Atualizar as Linhas que conectam com outros funcionarios ao redimensionar a tela

	function setResize(){

		setDots();

		if($('.Pessoa').is(":visible") && PageVars.pessoaSelecionada != undefined)
		{
			var pessoaPos = new getCenter(PageVars.pessoaSelecionada);
		
			refreshPersonsPosition(pessoaPos.posX,pessoaPos.posY);
		
			PageVars.pessoaSelecionada.css('background-position',((125*(PageVars.pessoaSelecionada.attr("numId")))*-1)+'px 0px');
		}

		if($( window ).width() >= 768)
		{
			$('.purpleDot').detach();
			createLinesFunc();
		}

		for(var a=0; a<$('.TextoPessoaContent').length; a++)
		{
			ResetPosicaoTextoFuncionario(a);
		}



		/* para Clientes */

		var restNumero = PageVars.numeroTransicaoClientes;

		PageVars.numeroTransicaoClientes = ($( window ).width() <= 400 ? 1:4);
		
		if(restNumero != PageVars.numeroTransicaoClientes){
			listaClientes = [
							"natura",
							"telefonica",
							"amorim",
							"instituto_unibanco",
							"saraiva",
							"etico",
							"HCB",
							"EdBrasil"
							];
			atualizarSlideClientes(PageVars.numeroTransicaoClientes);
		}
	
	}


	function ResetPosicaoTextoFuncionario(numero)
	{
		/*if($( window ).width() >= 768 && $('#detectGroupStyle').is(':hidden'))
		{
			$($('.TextoPessoaContent').get(numero)).css({"top":(Pessoas[numero].Y[1])+"px", "left":(Pessoas[numero].X[1])+"px", "width":(Pessoas[numero].Width[1])+"px"});
			
		} else if($('#detectGroupStyle').is(':visible'))
		{
			$($('.TextoPessoaContent').get(numero)).css({"top":(Pessoas[numero].Y[0])+"px", "left":(Pessoas[numero].X[0])+"px", "width":(Pessoas[numero].Width[0])+"px"});
			
		}*/


			$($('.TextoPessoaContent').get(numero)).css({"top":($($(".Pessoa").get(numero)).position().top + $($(".Pessoa").get(numero)).height())+"px", "left":($($(".Pessoa").get(numero)).position().left)+"px", "width":(200)+"px"});
	}


	//Ligações das pessoas
	function createLinesFunc()
	{

		if($( window ).width() >= 768)
		{
			$('.purpleDot').detach();
		}
		($('#detectGroupStyle').is(':visible') ? (LinesHD()):(LinesTab()));
		//NearPerson();


		if(PageVars.classSelected != undefined)
		{

			for(var a=0; a< $('.purpleDot').length; a++)
			{
				if($($('.purpleDot').get(a)).hasClass( "Linha"+PageVars.classSelected[1] ))
				{
					$($('.purpleDot').get(a)).hide();
				}
			}
		}

	}


	

	//Atualiza o angulo que as pessoas estão olhando
	function refreshPersonsPosition(X,Y)
	{
		for(var a=0; a< Pessoas.length; a++)
		{

			var elm = $($('.Pessoa').get(a));
			var pessoaPos = new getCenter(elm);
			var newAngle = getAngle(pessoaPos.posX, pessoaPos.posY, X, Y);
			var standardPositionX = (((125*a)*-1)-1);



			if(newAngle > -90-(22.5/PageVars.margemDeErro) && newAngle <= -90+(22.5/PageVars.margemDeErro)){ elm.css('background-position',standardPositionX+'px '+((125*2)*-1)+'px'); }
			else if(newAngle > -45-(22.5*PageVars.margemDeErro) && newAngle <= -45+(22.5*PageVars.margemDeErro)){ elm.css('background-position',standardPositionX+'px '+((125*3)*-1)+'px'); }
			else if(newAngle > 0-(22.5/PageVars.margemDeErro) && newAngle <= 0+(22.5/PageVars.margemDeErro)){ elm.css('background-position',standardPositionX+'px '+((125*4)*-1)+'px'); }
			else if(newAngle > 45-(22.5*PageVars.margemDeErro) && newAngle <= 45+(22.5*PageVars.margemDeErro)){ elm.css('background-position',standardPositionX+'px '+((125*5)*-1)+'px'); }
			else if(newAngle > 90-(22.5/PageVars.margemDeErro) && newAngle <= 90+(22.5/PageVars.margemDeErro)){ elm.css('background-position',standardPositionX+'px '+((125*6)*-1)+'px'); }
			else if(newAngle > 135-(22.5*PageVars.margemDeErro) && newAngle <= 135+(22.5*PageVars.margemDeErro)){ elm.css('background-position',standardPositionX+'px '+((125*7)*-1)+'px'); }
			else if(newAngle > 180-(22.5/PageVars.margemDeErro) && newAngle <=180 || 
				newAngle > -180 && newAngle <= -180+(22.5/PageVars.margemDeErro)){ elm.css('background-position',standardPositionX+'px '+((125*8)*-1)+'px'); }
			else if(newAngle > -135-(22.5*PageVars.margemDeErro) && newAngle <= -135+(22.5*PageVars.margemDeErro)){ elm.css('background-position',standardPositionX+'px '+((125*9)*-1)+'px'); }
			else{console.log("Sem angulo : "+newAngle);}
		}
	}

	//Função pra criar linha que liga uma pessoa com outra
	function createLine(obj1,obj2, persons)
	{
		var lineWidth = distanciaEntre($('.'+obj1), $('.'+obj2));
		var pessoaPos = new getCenter($('.'+obj1));

		if(persons == undefined){persons = "";}

		var collectClick = persons.split(/\s+/);

		for(var a=0;a<collectClick.length;a++)
		{
			collectClick[a] = "Linha"+collectClick[a];
		}

		var linhaString = collectClick.toString().replace(/,/g, " ");

		$('#containerGrupo').append("<div class='purpleDot"+(linhaString == "Linha" ? "":" "+linhaString)+"' style='width:"+lineWidth+"px;left:"+pessoaPos.posX+"px;top:"+pessoaPos.posY+"px;transform: rotate("+(getAngle($('.'+obj1).offset().left, $('.'+obj1).offset().top, $('.'+obj2).offset().left, $('.'+obj2).offset().top))+"deg);-webkit-transform: rotate("+(getAngle($('.'+obj1).offset().left, $('.'+obj1).offset().top, $('.'+obj2).offset().left, $('.'+obj2).offset().top))+"deg);'><div class='A'></div><div class='B'></div><div class='C'></div><div class='D'></div></div>");
	}



		//
		//--------------Mobile-----------------------------------------
		//



			PageVars.mc.on("swipeleft", function(ev) {

				SwipeMobileGrupo("l");
			});


			PageVars.mc.on("swiperight",function(){
				SwipeMobileGrupo("r");
			});

			//Caso clique na Seta Direita para mudar de funcionario
			$($('.ArrowMobileGroup').get(1)).click(function(){

				SwipeMobileGrupo("l");
			});

			//Caso clique na Seta Esquerda para mudar de funcionario
			$($('.ArrowMobileGroup').get(0)).click(function(){

				SwipeMobileGrupo("r");
			});

			function SwipeMobileGrupo(direcao)
			{
				if(PageVars.CanSwipe)
				{

					(direcao == "r" ? PageVars.numeroPerson--:PageVars.numeroPerson++);

					if(PageVars.numeroPerson == -1 && direcao == "r")
					{
						PageVars.numeroPerson = (Pessoas.length-1);
					} else if(PageVars.numeroPerson == Pessoas.length && direcao == "l")
					{
						PageVars.numeroPerson = 0;
					}

					PageVars.directionSwipe = direcao;

					ResetBlueButtons();

					PageVars.CanSwipe = false;
				}
			}

			//Animação de proximo/anterior Foto funcionário
			function ResetBlueButtons()
			{
				$('#PersonsMobile #NextPerson .groupimage, #PersonsMobile #AnteriorPerson .groupimage').css('background-position', ((($('#PersonsMobile #NextPerson .groupimage').width()*PageVars.numeroPerson))*-1)+'px -'+$('#PersonsMobile #NextPerson .groupimage').width()+'px');
				$('#PersonsMobile #NextPerson .grouptext .tituloMobile, #PersonsMobile #AnteriorPerson .grouptext .tituloMobile').html(Pessoas[PageVars.numeroPerson].NomeCompleto+'');
				$('#PersonsMobile #NextPerson .grouptext .textoMobile, #PersonsMobile #AnteriorPerson .grouptext .textoMobile').html(Pessoas[PageVars.numeroPerson].Texto+'');

				
				
				for(var a=0; a<$('#ContentPontos .dot').length;a++)
				{
					$($('#ContentPontos .dot').get(a)).addClass('stand');
					$($('#ContentPontos .dot').get(a)).removeClass("ativo");
				}
				$($('#ContentPontos .dot').get(PageVars.numeroPerson)).addClass('ativo');

				$( "#PersonsMobile" ).animate({
				    left: (PageVars.directionSwipe == 'r' ? "0%":"-200%")
				  }, 500, function() {
					$('#PersonsMobile #ActualPerson .groupimage').css('background-position', ((($('#PersonsMobile #NextPerson .groupimage').width()*PageVars.numeroPerson))*-1)+'px -'+$('#PersonsMobile #NextPerson .groupimage').width()+'px');
				  	$('#PersonsMobile #ActualPerson .grouptext .tituloMobile').html(Pessoas[PageVars.numeroPerson].NomeCompleto+'');
					$('#PersonsMobile #ActualPerson .grouptext .textoMobile').html(Pessoas[PageVars.numeroPerson].Texto+'');
				  	$( "#PersonsMobile" ).css("left","-100%");

				  	for(var a=0; a<$('#ContentPontos .dot').length;a++)
					{
						$($('#ContentPontos .dot').get(a)).removeClass("stand");
					}
					PageVars.CanSwipe = true;
				});

			}





/* CLIENTES */

	window.setInterval(function(){
			$(".PlaceBrand img").css("opacity","0");
		window.setTimeout(function(){
			atualizarSlideClientes(PageVars.numeroTransicaoClientes);
			$(".PlaceBrand img").css("opacity","1");
		},500);
	},3000);

	function atualizarSlideClientes(numero){



		for(var a=0; a<numero; a++){
			listaClientes.unshift(listaClientes[listaClientes.length-1]);
			listaClientes.pop();
		}


		var valid = 0;
		for(var a=0; a<$(".PlaceBrand").length; a++){

			if($($(".PlaceBrand").get(a)).is(':visible')){

				$($(".PlaceBrand").get(a)).find("img").attr("src","images/Clientes/"+listaClientes[valid]+".png");
				valid++;
			}

		}
	}

/* Curvas Dots */


      function createDots(){

        var soma = 0;

        for(var num of PageVars.curvaNum){
          soma+=num;
        }

        for (var i = 0; i<((parseInt(soma/2)-1)); i++) {
          $("#ComoFazemos").append('<div class="obj_iconeG"></div>');
          $("#ComoFazemos").append('<div class="obj_icone"></div>');

        }

		for (var i = 0; i<((parseInt(soma/2)-21)); i++) {
          $("#ComoFazemos").append('<div class="obj_iconeG hidden-xs hidden-sm"></div>');
          $("#ComoFazemos").append('<div class="obj_icone hidden-xs hidden-sm"></div>');
        }

        atualizaComoFazemos();

      }

     function setDots(){

      var aNum= 0;

      for(var a=0; a< PageVars.curvaNum.length; a++){

        PageVars.curvaExercicios[a] = new Curva(PageVars.curvaForm[a]);

       for (var i = 0; i < PageVars.curvaNum[a]; i++){
        var pos = PageVars.curvaExercicios[a].getRelativePosition(i*1/(PageVars.curvaNum[a]-1));

        if(i%2==0){

          $(".obj_iconeG")[aNum].style.left = pos[0] + "px";
          $(".obj_iconeG")[aNum].style.top = pos[1] + "px";
        } else {
          $(".obj_icone")[aNum].style.left = pos[0] + "px";
          $(".obj_icone")[aNum].style.top = pos[1] + "px";

          aNum++;
        }
       }


      }

     }

	function atualizaComoFazemos(){

		if($( window ).width() >= 976){
			PageVars.curvaNum = [(12+6), 
	                      (12+6), 
	                      (18+6),
	                      (10+9),
	                      (7+2),
	                      (13+9),
	                      (14+6)];

		} else {
			PageVars.curvaNum = [12, 
	                      12, 
	                      18,
	                      10,
	                      7,
	                      13,
	                      14];

		}
	}

     createDots();

     setDots();



	function LinesHD()
	{
		createLine('Julia','Vitor');
		createLine('Julia','Nilton');
		createLine('Julia','Lucas', "Julia");

		createLine('Vitor','Diego');
		createLine('Vitor','Nilton', "Vitor");

		createLine('Diego','Nilton', 'Vitor');
		createLine('Diego','Dora', 'Diego');
		//createLine('Diego','Felipe');

		//createLine('Felipe','Dora');
		//createLine('Felipe','Alessandra','Felipe');

		createLine('Lucas','Rafael');
		createLine('Lucas','Bruno', "Lucas");
		createLine('Lucas','Nilton');
		//createLine('Lucas','Fabio', 'Lucas Rafael Fabio');

		createLine('Nilton','Rafael', "Nilton");
		createLine('Nilton','Pedro', "Nilton");
		createLine('Nilton','Dora');

		createLine('Dora','Pedro', "Dora");
		createLine('Dora','Carol', "Dora");
		createLine('Dora','Alessandra');

		createLine('Alessandra','Carol', "Alessandra");
		createLine('Alessandra','Fernando', 'Alessandra');

		//createLine('Rafael','Fabio');
		createLine('Rafael','Pedro');
		createLine('Rafael','Bruno');
		createLine('Rafael','Rogerio', "Rafael");

		createLine('Pedro','Rogerio','Pedro');
		createLine('Pedro','Carol');

		createLine('Carol','Rogerio','Pedro');
		createLine('Carol','Fernando', "Carol");

		createLine('Fabio','Diego');
		createLine('Fabio','Dora', "Diego");
		createLine('Fabio','Alessandra', "Fabio");

		createLine('Bruno','Rogerio');

		createLine('Rogerio','Fernando');

	}

	//No Tablet, Quem se Liga com quem (InicioLinha, FimLinha, [Linha deve sumir para aparecer o texto ao clica em quem])
	function LinesTab()
	{

		createLine('Julia','Dora');
		createLine('Julia','Nilton', "Julia");
		createLine('Julia','Lucas', "Julia");

		createLine('Dora','Diego');
		createLine('Dora','Carol');
		createLine('Dora','Nilton', "Dora");

		createLine('Diego','Rafael', "Diego");
		createLine('Diego','Carol');
		
		createLine('Lucas','Nilton');
		createLine('Lucas','Pedro');
		createLine('Lucas','Bruno', "Lucas");

		//createLine('Nilton','Rafael', "Carol Rafael");
		createLine('Nilton','Carol');
		createLine('Nilton','Pedro', "Nilton");
		createLine('Nilton','Fernando', "Nilton");

		createLine('Carol','Rafael');
		createLine('Carol','Fernando', "Carol");

		createLine('Rafael','Fernando', "Rafael");
		createLine('Rafael','Vitor', "Fernando Rafael");

		createLine('Bruno','Pedro');
		createLine('Bruno','Fabio');
		createLine('Bruno','Alessandra' , "Bruno");

		createLine('Pedro','Fernando');
		createLine('Pedro','Fabio', "Pedro");



		createLine('Fernando','Fabio', "Fernando Pedro");
		createLine('Fernando','Vitor', "Fernando");

		//createLine('Pedro','Felipe', "Felipe");
		//createLine('Pedro','Fabio');

		//createLine('Kevyn','Felipe');

		createLine('Fabio','Alessandra');
		////createLine('Fabio','Felipe', "Felipe");
		createLine('Fabio','Vitor');
		//createLine('Fabio','Rogerio');

		//createLine('Felipe','Rogerio');

		//createLine('Alessandra','Vitor');
		createLine('Alessandra','Rogerio');

		createLine('Fabio','Rogerio', "Fabio");

		createLine('Vitor','Rogerio', "Vitor");
	}



function resetMapGoogle(){

	var Store = ($( document ).width() >= 751 ? "MapWrapDesk":"MapWrapMob");

	if($.trim($('#'+Store).html()) == ""){
		$("#MapGoogle").detach().appendTo('#'+Store);
	}

}


/* Linha Abaixo do menu para Tablet e Desktop | Interação */

	function atualizaPosicaoHighlightMenu(){
		var scrollTop = $(window).scrollTop() + $(window).height();

		var addTop = 37;
		var addLeft = 9;
		var addWidth = -6;

		var selected = "";


		if(!$("#floatPortfolio").is(":visible")){

			if(scrollTop >= $("#AncoraContato").offset().top){
				selected = "Contato";
			} else if(scrollTop >= $("#AncoraClientes").offset().top){
				selected = "Clientes";
			} else if(scrollTop >= $("#AncoraSomos").offset().top){
				selected = "Somos";
			} else if(scrollTop >= $("#AncoraQueFazemos").offset().top){
				selected = "QueFazemos";
			} else if(scrollTop >= $("#AncoraComoFazemos").offset().top){
				selected = "ComoFazemos";
			} else if(scrollTop >= $("#AncoraPortfolio").offset().top){
				selected = "Portfolio";
			} else {
				selected = "";
			}
		}


		if(selected != PageVars.AncoraAtual){
			if(selected != ""){

				$("#bottomHighlight").css("left", $("#OpcoesSuperior .Opc_"+selected).position().left+addLeft+"px");
				$("#bottomHighlight").css("top", ($("#OpcoesSuperior .Opc_"+selected).position().top + addTop)+"px");
				$("#bottomHighlight").css("width", "calc(" + ($("#OpcoesSuperior .Opc_"+selected).width() + addWidth)+"px + 1.5% )");
			} else {
				$("#bottomHighlight").css("width", "0px");

			}

			PageVars.AncoraAtual = selected;
		}
	}

/*  */


/* radius para achar pessoa próxima */

function NearPerson(){

	for(var a=0; a<$('.Pessoa').length; a++){
		for(var b=0; b<$('.Pessoa').length; b++){

			if(a>b){

				var p1 = ($($('.Pessoa').get(a)).attr("class")).split(" ");
				var p2 = ($($('.Pessoa').get(b)).attr("class")).split(" ");

				if(distanciaEntre($("."+p1[1]),$("."+p2[1])) < 300){
					createLine(p1[1],p2[1]);
				}
			}

		}
	}

}




/* Math Funcs */

 function collision($div1, $div2) {
	var x1 = $div1.offset().left;
	var y1 = $div1.offset().top;
	var h1 = $div1.outerHeight(true);
	var w1 = $div1.outerWidth(true);
	var b1 = y1 + h1;
	var r1 = x1 + w1;
	var x2 = $div2.offset().left;
	var y2 = $div2.offset().top;
	var h2 = $div2.outerHeight(true);
	var w2 = $div2.outerWidth(true);
	var b2 = y2 + h2;
	var r2 = x2 + w2;

	if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	return true;
}


	//Função matemática para pegar o centro de uma Div
	//Neste caso, para pegar o centro de cada foto do Funcionario X
	//para criar uma linha que conecta com o centro do Funcionario Y
	function getCenter(obj)
	{
		this.posX = obj.position().left+(obj.outerWidth()/2);
		this.posY = obj.position().top+(obj.outerHeight()/2);
	}

	//Função matemática para calcular a distância entre os funcionarios conectados
	function distanciaEntre(obj1, obj2)
	{
		return (Math.sqrt(Math.pow(obj1.position().left-obj2.position().left, 2) + Math.pow(obj1.position().top-obj2.position().top, 2) ))
	}

	//Pegar angulo entre um Funcionario e outro, para saber quem está olhado pra quem
	function getAngle(x1, y1, x2, y2)
	{
		var deltaX = x2 - x1;
		var deltaY = y2 - y1;

		return Math.atan2(deltaY, deltaX) * 180 / Math.PI;
	}




	function isUndefined(a) {
    return a === undefined;
}

/**
 * Helper function to determine whether there is an intersection between the two polygons described
 * by the lists of vertices. Uses the Separating Axis Theorem
 *
 * @param a an array of connected points [{x:, y:}, {x:, y:},...] that form a closed polygon
 * @param b an array of connected points [{x:, y:}, {x:, y:},...] that form a closed polygon
 * @return true if there is any intersection between the 2 polygons, false otherwise
 */
function doPolygonsIntersect (a, b) {
    var polygons = [a, b];
    var minA, maxA, projected, i, i1, j, minB, maxB;

    for (i = 0; i < polygons.length; i++) {

        // for each polygon, look at each edge of the polygon, and determine if it separates
        // the two shapes
        var polygon = polygons[i];
        for (i1 = 0; i1 < polygon.length; i1++) {

            // grab 2 vertices to create an edge
            var i2 = (i1 + 1) % polygon.length;
            var p1 = polygon[i1];
            var p2 = polygon[i2];

            // find the line perpendicular to this edge
            var normal = { x: p2.y - p1.y, y: p1.x - p2.x };

            minA = maxA = undefined;
            // for each vertex in the first shape, project it onto the line perpendicular to the edge
            // and keep track of the min and max of these values
            for (j = 0; j < a.length; j++) {
                projected = normal.x * a[j].x + normal.y * a[j].y;
                if (isUndefined(minA) || projected < minA) {
                    minA = projected;
                }
                if (isUndefined(maxA) || projected > maxA) {
                    maxA = projected;
                }
            }

            // for each vertex in the second shape, project it onto the line perpendicular to the edge
            // and keep track of the min and max of these values
            minB = maxB = undefined;
            for (j = 0; j < b.length; j++) {
                projected = normal.x * b[j].x + normal.y * b[j].y;
                if (isUndefined(minB) || projected < minB) {
                    minB = projected;
                }
                if (isUndefined(maxB) || projected > maxB) {
                    maxB = projected;
                }
            }

            // if there is no overlap between the projects, the edge we are looking at separates the two
            // polygons, and we know there is no overlap
            if (maxA < minB || maxB < minA) {
                //console.log("polygons don't intersect!");
                return false;
            }
        }
    }
    return true;
};


function VerificaColisao(obj1, obj2){
    var pointsa = new Array(4),
        pointsb = new Array(4);



    $(obj1).find(".Corners").each(function(i) {
        pointsa[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)};
    });

    $(obj2).find("div").each(function(i) {
        pointsb[i] = {x: parseInt($(this).offset().left), y: parseInt($(this).offset().top)};
    });
    

    console.log(pointsa, pointsb);
    return doPolygonsIntersect(pointsb, pointsa);
};

