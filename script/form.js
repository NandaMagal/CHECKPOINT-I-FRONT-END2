let nomeCidade = document.getElementById("cityname");
let descricaoCidade = document.getElementById("descriptionCity");
let urlCidade = document.getElementById("urlCity");
let novocard = document.getElementById("cidades")
let botaoSalvar = document.getElementById("salvar");



    

botaoSalvar.addEventListener("click", function(evento) {
    evento.preventDefault();

    let cardcriado = document.createElement("div");

    cardcriado.setAttribute("id","card");
    novocard.appendChild(cardcriado);

    let titulonome = document.createElement("h3");

    titulonome.innerText = "Nome da Cidade:";
    cardcriado.appendChild(titulonome);

    let titulo = document.createElement("p");
        
    titulo.innerText =  nomeCidade.value;
    cardcriado.appendChild(titulo);

    let desctitulo = document.createElement("h5");

    desctitulo.innerText = "Descrição:";
    cardcriado.appendChild(desctitulo);

    let textdesc = document.createElement("p");

    textdesc.innerText = descricaoCidade.value;
    cardcriado.appendChild(textdesc);

    let urlimg = document.createElement("h6");

    urlimg.innerText = "URL";
    cardcriado.appendChild(urlimg);

    let urltext = document.createElement("img");
    
    urltext.setAttribute("src", urlCidade.value);
    cardcriado.appendChild(urltext);

});







