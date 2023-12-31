
document.getElementById("addDispesa").addEventListener("click", function() {
    console.log("Botão 'Adicionar Despesa' clicado");
    // Ao clicar no botão "Adicionar Despesa", exibe o popup
    document.getElementById("popup").style.display = "flex";
});

document.getElementById("closePop").addEventListener("click", function() {
    // Ao clicar no botão "Adicionar Despesa", exibe o popup
    document.getElementById("popup").style.display = "none";
});

document.getElementById("closePop2").addEventListener("click", function() {
    // Ao clicar no botão "Adicionar Despesa", exibe o popup
    document.getElementById("popup").style.display = "none";

    // Limpa os inputs
    document.getElementById("inputNome").value = "";
     // Substitua "inputCategoria" pelo ID real do seu input de categoria
    document.getElementById("inputValor").value = ""; // Substitua "inputValor" pelo ID real do seu input de valor

    // Define o <select> de volta para a opção padrão
    document.getElementById("categoriasDespesas").selectedIndex = 0; // Substitua "categoriasDespesas" pelo ID real do seu select
});

document.getElementById("menuIcon").addEventListener("click", function() {
    var navigation = document.querySelector(".navegation");
    var main = document.getElementById('main')
    var isExpanded = navigation.classList.contains("expanded");

    if (isExpanded) {
        // Se a navegação estiver expandida, recolha
        navigation.classList.remove("expanded");
        main.style.transition ="0.3s"
        main.style.marginLeft = "270px"
        console.log("Navegação recolhida");
    } else {
        // Se a navegação estiver recolhida, expanda
        navigation.classList.add("expanded");
        main.style.transition = "0.3s"
        main.style.marginLeft = "75px"
    }
});




// ..............................




document.getElementById("addReceita").addEventListener("click", function() {
    console.log("Botão 'Adicionar Despesa' clicado");
    // Ao clicar no botão "Adicionar Despesa", exibe o popup
    document.getElementById("popup2").style.display = "flex";
});

document.getElementById("closePop4").addEventListener("click", function() {
    // Ao clicar no botão "Adicionar Despesa", exibe o popup
    document.getElementById("popup2").style.display = "none";
});

document.getElementById("closePop3").addEventListener("click", function() {
    // Ao clicar no botão "Adicionar Despesa", exibe o popup
    document.getElementById("popup2").style.display = "none";

    // Limpa os inputs
    document.getElementById("inputNome").value = "";
     // Substitua "inputCategoria" pelo ID real do seu input de categoria
    document.getElementById("inputValor").value = ""; // Substitua "inputValor" pelo ID real do seu input de valor

    // Define o <select> de volta para a opção padrão
    document.getElementById("categoriasDespesas").selectedIndex = 0; // Substitua "categoriasDespesas" pelo ID real do seu select
});

// ................
document.addEventListener('DOMContentLoaded', function () {
    var flashMessages = document.getElementById('flash-messages');
    if (flashMessages) {
        flashMessages.addEventListener('animationend', function () {
            flashMessages.style.display = 'none';
        });

        setTimeout(function () {
            flashMessages.classList.add('hide');
        }, 5000);
    }
});