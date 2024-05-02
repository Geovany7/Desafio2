const apagar1 = `<h2>Lorem ipsum dolor sit amet, consectetur ? </h2>
    <img class="icones" src="icone-seta-aberta.png" onclick="desligar1()" alt="icone">`;
const ligar1 = `<h2>Lorem ipsum dolor sit amet, consectetur ? </h2>
    <img class="icones" src="icone-seta-fechada.png" onclick="ativar1()" alt="icone">`;
const apagar2 = `<h2>Lorem ipsum dolor sit amet ? </h2>
    <img class="icones" src="icone-seta-aberta.png" onclick="desligar2()" alt="icone">`;
const ligar2 = `<h2>Lorem ipsum dolor sit amet ? </h2>
    <img class="icones" src="icone-seta-fechada.png" onclick="ativar2()" alt="icone">`;
const apagar3 = `<h2>Lorem ipsum dolor sit ? </h2>
    <img class="icones" src="icone-seta-aberta.png" onclick="desligar3()" alt="icone">`;
const ligar3 = `<h2>Lorem ipsum dolor sit ? </h2>
    <img class="icones" src="icone-seta-fechada.png" onclick="ativar3()" alt="icone">`;

function ativar1() {
    document.getElementById('texto1').innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ex odio amet deleniti, velit et asperiores
    natus repudiandae molestias`;

    document.getElementById('informacoes2').innerHTML = ligar2;
    document.getElementById('texto2').innerHTML = ' ';
    document.getElementById('informacoes3').innerHTML = ligar3;
    document.getElementById('texto3').innerHTML = ' ';
    document.getElementById('informacoes1').innerHTML = apagar1;
}

function desligar1() {
    document.getElementById('texto1').innerHTML = " ";


    document.getElementById('informacoes1').innerHTML = ligar1;
}

function ativar2() {
    document.getElementById('texto2').innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ex odio amet deleniti, velit et asperiores
    natus repudiandae molestias`;
    document.getElementById('informacoes1').innerHTML = ligar1;
    document.getElementById('texto1').innerHTML = ' ';
    document.getElementById('informacoes3').innerHTML = ligar3;
    document.getElementById('texto3').innerHTML = ' ';
    document.getElementById('informacoes2').innerHTML = apagar2;
}

function desligar2() {
    document.getElementById('texto2').innerHTML = " ";


    document.getElementById('informacoes2').innerHTML = ligar2;
}

function ativar3() {
    document.getElementById('texto3').innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ex odio amet deleniti, velit et asperiores
    natus repudiandae molestias`;
    document.getElementById('informacoes1').innerHTML = ligar1;
    document.getElementById('texto1').innerHTML = ' ';
    document.getElementById('informacoes2').innerHTML = ligar2;
    document.getElementById('texto2').innerHTML = ' ';
    document.getElementById('informacoes3').innerHTML = apagar3;
}

function desligar3() {
    document.getElementById('texto3').innerHTML = " ";


    document.getElementById('informacoes3').innerHTML = ligar3;
}
