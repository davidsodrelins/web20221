//pegar o elemento
var appElement = document.querySelector("#app"); //busca a div com id='app

var btnAddElement = document.createElement('button'); //cria um elemento botão
var inputElement = document.createElement('input');

inputElement.setAttribute('id','cor');

btnAddElement.appendChild(document.createTextNode('DESENHAR QUADRADO')); //acrescenta o rotulo ao botão

appElement.appendChild(btnAddElement); //acrescenta o botão na div app
appElement.appendChild(inputElement);

btnAddElement.onclick = function () { //configura a ação do botão criado com uma função
    criarQuadrado(); //função que desenha um quadrado
};

function criarQuadrado() {
    var boxElement = document.createElement('div') //cria novo elemento

    boxElement.style.width = '150px'; // adiciona a largura 150
    boxElement.style.height = '150px';// adiciona a altura 150
    boxElement.style.border = 'solid 1px black';
    boxElement.style.backgroundColor = inputElement.value == ''?'black':inputElement.value; //adiciona a cor
    inputElement.value=''

    appElement.appendChild(boxElement); //acrescenta o novo elemento a div app
};
