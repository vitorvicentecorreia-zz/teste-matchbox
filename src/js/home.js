$(document).ready(function(){
    
    abrirMenu();
    botaoPrincipal();
    botaoHome();
    botaoQuemsomos();
    botaoNossosboxes();
    botaoVamosconversar();
    
});

var superiorAltura = $(".menu-superior").height();

function abrirMenu(){

    $('#menu').click(function(){
        $(this).toggleClass('open');
        $(".menu-mobile").toggle();
        $(this).toggleClass('menu-fixo');
    });
}

function botaoPrincipal(){

    $('.botao-principal').click(function(){

        var quemSomos = $(".quem-somos").offset().top;        
        $("body").animate(
        {
            scrollTop: quemSomos - superiorAltura + 2
        }, 1000);
    });
}

function botaoHome(){

    $('.botao-home').click(function(){

        $(".menu-mobile").hide();
        $("#menu").removeClass("open");
        var superior = $(".superior").offset().top;
        $("body").animate(
        {
            scrollTop: superior
        },1000);
        
    });
}

function botaoQuemsomos(){

    $('.botao-quemsomos').click(function(){

        $(".menu-mobile").hide();
        $("#menu").removeClass("open");
        var quemSomos = $(".quem-somos").offset().top;
        $("body").animate(
        {
            scrollTop: quemSomos - superiorAltura + 2
        },1000);

    });    
}


function botaoNossosboxes(){

    $('.botao-nossosboxes').click(function(){

        $(".menu-mobile").hide();
        $("#menu").removeClass("open");
        var nossosBoxes = $(".nossos-boxes").offset().top;
        $("body").animate(
        {
            scrollTop: nossosBoxes - superiorAltura + 2
        },1000);
        
    });    
}

function botaoVamosconversar(){

    $('.botao-vamosconversar').click(function(){

        $(".menu-mobile").hide();
        $("#menu").removeClass("open");
        var vamosConversar = $(".vamos-conversar").offset().top;
        $("body").animate(
        {
            scrollTop: vamosConversar - superiorAltura + 2
        },1000);
        
    });    
}