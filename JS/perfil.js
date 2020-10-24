
// Enviar uma mensagem de confirmação informando que a partida foi marcada
function partida() {
    alert("partida marcada!")
}

// Receber os dados do usuario.
function statistic(_solicit, _accept, _ausencia) {
    // Passar os parâmetros da função direto para o html
    document.getElementById("solicit").innerHTML = _solicit;
    document.getElementById("accept").innerHTML = _accept;
    document.getElementById("ausencia").innerHTML = _ausencia;

    // Desejo que a cor mude a cor informando se o usuario costuma faltar      
    if (_ausencia > 10) {
        document.getElementById("statistic").style.backgroundColor = 'red';
        document.getElementById("statistic").style.Color = 'white';

    } else if (_ausencia >= 5) {
        document.getElementById("statistic").style.backgroundColor = 'yellow';
        document.getElementById("statistic").style.Color = 'white';

    } else if (_ausencia < 5) {
        document.getElementById("statistic").style.backgroundColor = 'green';
        document.getElementById("statistic").style.Color = 'white';

    }

}

// Sortear os usuarios por alguma identificação

//onde ficaria a idenficação do usuario junto com suas informações
usuario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
function refresh() {

    sorteio = [usuario[Math.floor(Math.random() * 10)], usuario[Math.floor(Math.random() * 10)], usuario[Math.floor(Math.random() * 10)], usuario[Math.floor(Math.random() * 10)], usuario[Math.floor(Math.random() * 10)]]

    //Array antes do refresh
    document.getElementById("00").innerHTML = sorteio[0];
    document.getElementById("01").innerHTML = sorteio[1];
    document.getElementById("02").innerHTML = sorteio[2];
    document.getElementById("03").innerHTML = sorteio[3];
    document.getElementById("04").innerHTML = sorteio[4];

}

// Desejo que apareça os numeros das notificações só quando ter algo. Quando não tiver, fique sem nada
//Essa parte inicial, é para ele iniciar sem aparecer nada nas notificações
document.getElementById("n-usuario").style.display = 'none';
document.getElementById("n-mensagem").style.display = 'none';
document.getElementById("n-convpartida").style.display = 'none';

//Aqui, ele vai receber os dados das notificações
function recebidos(_nusuario, _nmensagem, _nconvpartida) {
    usu = _nusuario;
    mensa = _nmensagem;
    convparti = _nconvpartida;



    if (usu == 0 | usu == undefined) {
        document.getElementById("n-usuario").style.display = 'none';

    } else {
        document.getElementById("n-usuario").innerHTML = _nusuario;
        document.getElementById("n-usuario").style.display = ''
    }

    if (mensa == 0 | mensa == undefined) {
        document.getElementById("n-mensagem").style.display = 'none';

    } else {
        document.getElementById("n-mensagem").innerHTML = _nmensagem;
        document.getElementById("n-mensagem").style.display = '';
    }

    if (convparti == 0 | convparti == undefined) {
        document.getElementById("n-convpartida").style.display = 'none';

    } else {
        document.getElementById("n-convpartida").innerHTML = _nconvpartida;
        document.getElementById("n-convpartida").style.display = ''
    }


}
/*-------------------------Gerar card--------------------*/

/*-------------------------modal--------------------*/

//Modal Card
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




/*--------------------------card--------------------*/
// Caso o organizador clicar no sim, Os convidados irão para a parte dos convidados

function select00() {
    document.getElementById("card0").src = "imagens/logotest.svg"
}
function select01() {
    document.getElementById("card1").src = "imagens/logotest.svg"
}
function select02() {
    document.getElementById("card2").src = "imagens/logotest.svg"
}
function select03() {
    document.getElementById("card3").src = "imagens/logotest.svg"
}
function select04() {
    document.getElementById("card4").src = "imagens/logotest.svg"
}
function select05() {
    document.getElementById("card5").src = "imagens/logotest.svg"
}
function select06() {
    document.getElementById("card6").src = "imagens/logotest.svg"
}
function select07() {
    document.getElementById("card7").src = "imagens/logotest.svg"
}
function select08() {
    document.getElementById("card8").src = "imagens/logotest.svg"
}
function select09() {
    document.getElementById("card9").src = "imagens/logotest.svg"
}
function select10() {
    document.getElementById("card10").src = "imagens/logotest.svg"
}
function select11() {
    document.getElementById("card11").src = "imagens/logotest.svg"
}
function select12() {
    document.getElementById("card12").src = "imagens/logotest.svg"
}
function select13() {
    document.getElementById("card13").src = "imagens/logotest.svg"
}
function select14() {
    document.getElementById("card14").src = "imagens/logotest.svg"
}
function select15() {
    document.getElementById("card15").src = "imagens/logotest.svg"
}
function select16() {
    document.getElementById("card16").src = "imagens/logotest.svg"
}
function select17() {
    document.getElementById("card17").src = "imagens/logotest.svg"
}
function select18() {
    document.getElementById("card18").src = "imagens/logotest.svg"
}
function select19() {
    document.getElementById("card19").src = "imagens/logotest.svg"
}
function select20() {
    document.getElementById("card20").src = "imagens/logotest.svg"
}
function select21() {
    document.getElementById("card21").src = "imagens/logotest.svg"
}
function select22() {
    document.getElementById("card22").src = "imagens/logotest.svg"
}
function select23() {
    document.getElementById("card23").src = "imagens/logotest.svg"
}

// Caso o organizador clicar no não, eu desejo que aquele card suma OU atualize para um novo  
function notSelect() {
    document.getElementById("complet-card").src = "";  //quando clicar, desejo que o card suma ou atualize pra outro atleta

}


// Excluir card
function excluir0() {
    document.getElementById("card0").src = ""
}
function excluir1() {
    document.getElementById("card1").src = ""
}
function excluir2() {
    document.getElementById("card2").src = ""
}
function excluir3() {
    document.getElementById("card3").src = ""
}
function excluir4() {
    document.getElementById("card4").src = ""
}
function excluir5() {
    document.getElementById("card5").src = ""
}
function excluir6() {
    document.getElementById("card6").src = ""
}
function excluir7() {
    document.getElementById("card7").src = ""
}
function excluir08() {
    document.getElementById("card8").src = ""
}
function excluir09() {
    document.getElementById("card9").src = ""
}
function excluir10() {
    document.getElementById("card10").src = ""
}
function excluir11() {
    document.getElementById("card11").src = ""
}
function excluir12() {
    document.getElementById("card12").src = ""
}
function excluir13() {
    document.getElementById("card13").src = ""
}
function excluir14() {
    document.getElementById("card14").src = ""
}
function excluir15() {
    document.getElementById("card15").src = ""
}
function excluir16() {
    document.getElementById("card16").src = ""
}
function excluir17() {
    document.getElementById("card17").src = ""
}
function excluir18() {
    document.getElementById("card18").src = ""
}
function excluir19() {
    document.getElementById("card19").src = ""
}
function excluir20() {
    document.getElementById("card20").src = ""
}
function excluir21() {
    document.getElementById("card21").src = ""
}
function excluir22() {
    document.getElementById("card22").src = ""
}
function excluir23() {
    document.getElementById("card23").src = ""
};

/*----------------------Atleta--------------------*/

function convidar2() {
    document.getElementById("card").style.display = "";
    document.getElementById("card1").style.display = "";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";
    document.getElementById("card7").style.display = "none";
    document.getElementById("card8").style.display = "none";
    document.getElementById("card9").style.display = "none";
    document.getElementById("card10").style.display = "none";
    document.getElementById("card11").style.display = "none";
    document.getElementById("card12").style.display = "none";
    document.getElementById("card13").style.display = "none";
    document.getElementById("card14").style.display = "none";
    document.getElementById("card15").style.display = "none";
    document.getElementById("card16").style.display = "none";
    document.getElementById("card17").style.display = "none";
    document.getElementById("card18").style.display = "none";
    document.getElementById("card19").style.display = "none";
    document.getElementById("card20").style.display = "none";
    document.getElementById("card21").style.display = "none";
    document.getElementById("card22").style.display = "none";
    document.getElementById("card23").style.display = "none";
    
}

function convidar10() {
    
    document.getElementById("card5").style.display = "none";
    document.getElementById("card11").style.display = "none";
    document.getElementById("card12").style.display = "none";
    document.getElementById("card13").style.display = "none";
    document.getElementById("card14").style.display = "none";
    document.getElementById("card15").style.display = "none";
    document.getElementById("card16").style.display = "none";
    document.getElementById("card17").style.display = "none";
    document.getElementById("card18").style.display = "none";
    document.getElementById("card19").style.display = "none";
    document.getElementById("card20").style.display = "none";
    document.getElementById("card21").style.display = "none";
    document.getElementById("card22").style.display = "none";
    document.getElementById("card23").style.display = "none";
}

function convidar12() {
    
   
    document.getElementById("card12").style.display = "none";
    document.getElementById("card13").style.display = "none";
    document.getElementById("card14").style.display = "none";
    document.getElementById("card15").style.display = "none";
    document.getElementById("card16").style.display = "none";
    document.getElementById("card17").style.display = "none";
    document.getElementById("card18").style.display = "none";
    document.getElementById("card19").style.display = "none";
    document.getElementById("card20").style.display = "none";
    document.getElementById("card21").style.display = "none";
    document.getElementById("card22").style.display = "none";
    document.getElementById("card23").style.display = "none";
}

function convidar24(){
    document.getElementById("card0").style.display = "none";
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";
    document.getElementById("card7").style.display = "none";
    document.getElementById("card8").style.display = "none";
    document.getElementById("card9").style.display = "none";
    document.getElementById("card10").style.display = "none";
    document.getElementById("card11").style.display = "none";
    document.getElementById("card12").style.display = "none";
    document.getElementById("card13").style.display = "none";
    document.getElementById("card14").style.display = "none";
    document.getElementById("card15").style.display = "none";
    document.getElementById("card16").style.display = "none";
    document.getElementById("card17").style.display = "none";
    document.getElementById("card18").style.display = "none";
    document.getElementById("card19").style.display = "none";
    document.getElementById("card20").style.display = "none";
    document.getElementById("card21").style.display = "none";
    document.getElementById("card22").style.display = "none";
    document.getElementById("card23").style.display = "none";
}
   


