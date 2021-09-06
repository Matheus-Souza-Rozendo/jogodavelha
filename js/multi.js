//variaveis
var jogo = [];
var tabuleiro = [];
var quemJoga = 0; //0=jogador 1=cpu
var verifica;
var jogando = 0;
var nivel = 1;
var jogadaCpu = 1;
var QuemComeca = 1;
var btn;
var mensagem;
var jogada;
//função que verifica se houve um vencedor
function verificaVitoria() {
    var i;
    //linhas
    for (i = 0; i < 3; i++) {
        if ((jogo[i][0] == jogo[i][1]) && (jogo[i][1] == jogo[i][2])) {
            return jogo[i][0];
        }
    }
    //coluna
    for (i = 0; i < 3; i++) {
        if ((jogo[0][i] == jogo[1][i]) && (jogo[1][i] == jogo[2][i])) {
            return jogo[0][i];
        }
    }
    //diagonal
    if (((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2]))) {
        return jogo[1][1];
    }
    if (((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0]))) {
        return jogo[1][1];
    }
    return "";
}
//função que computa as jogadas dos jogadores
function jogar(p) {
    if ((jogando == 1) && (quemJoga == 0)) {
        jogada++;
        switch (p) {
            case 1:
                if (jogo[0][0] == "") {
                    jogo[0][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 2:
                if (jogo[0][1] == "") {
                    jogo[0][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 3:
                if (jogo[0][2] == "") {
                    jogo[0][2] = "X";
                    quemJoga = 1;
                }
                break;
            case 4:
                if (jogo[1][0] == "") {
                    jogo[1][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 5:
                if (jogo[1][1] == "") {
                    jogo[1][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 6:
                if (jogo[1][2] == "") {
                    jogo[1][2] = "X";
                    quemJoga = 1;
                }
                break;
            case 7:
                if (jogo[2][0] == "") {
                    jogo[2][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 8:
                if (jogo[2][1] == "") {
                    jogo[2][1] = "X";
                    quemJoga = 1;
                }
                break;
            default:
                if (jogo[2][2] == "") {
                    jogo[2][2] = "X";
                    quemJoga = 1;
                }
                break;
        }
        if (quemJoga == 1) {
            atualizaTabuleiro();
            verifica = verificaVitoria();
            if (verifica != "") {
                mensagem.innerHTML = verifica + " Venceu";
                jogando = 0;
                btn.style.display = "block";
            }
            if ((jogada == 9) && (jogando == 1)) {
                mensagem.innerHTML = "Empate";
                jogando = 0;
                btn.style.display = "block";
            }
        }
    } else {
        if ((jogando == 1) && (quemJoga == 1)) {
            jogada++;
            switch (p) {
                case 1:
                    if (jogo[0][0] == "") {
                        jogo[0][0] = "O";
                        quemJoga = 0;
                    }
                    break;
                case 2:
                    if (jogo[0][1] == "") {
                        jogo[0][1] = "O";
                        quemJoga = 0;
                    }
                    break;
                case 3:
                    if (jogo[0][2] == "") {
                        jogo[0][2] = "O";
                        quemJoga = 0;
                    }
                    break;
                case 4:
                    if (jogo[1][0] == "") {
                        jogo[1][0] = "O";
                        quemJoga = 0;
                    }
                    break;
                case 5:
                    if (jogo[1][1] == "") {
                        jogo[1][1] = "O";
                        quemJoga = 0;
                    }
                    break;
                case 6:
                    if (jogo[1][2] == "") {
                        jogo[1][2] = "O";
                        quemJoga = 0;
                    }
                    break;
                case 7:
                    if (jogo[2][0] == "") {
                        jogo[2][0] = "O";
                        quemJoga = 0;
                    }
                    break;
                case 8:
                    if (jogo[2][1] == "") {
                        jogo[2][1] = "O";
                        quemJoga = 0;
                    }
                    break;
                default:
                    if (jogo[2][2] == "") {
                        jogo[2][2] = "O";
                        quemJoga = 0;
                    }
                    break;
            }
            if (quemJoga == 0) {
                atualizaTabuleiro();
                verifica = verificaVitoria();
                if (verifica != "") {
                    mensagem.innerHTML = verifica + " Venceu";
                    jogando = 0;
                    btn.style.display = "block";
                }
                if ((jogada == 9) && (jogando == 1)) {
                    mensagem.innerHTML = "Empate";
                    jogando = 0;
                    btn.style.display = "block";
                }
            }
        }
    }
    if (jogando == 1) {
        if (quemJoga == 0) {
            mensagem.innerHTML = "Vez do Jogador 1"
        }
        if (quemJoga == 1) {
            mensagem.innerHTML = "Vez do Jogador 2"
        }
    }
}
//função responsavel por atualizar o tabuleiro
function atualizaTabuleiro() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (jogo[i][j] == "X") {
                tabuleiro[i][j].innerHTML = "X";
                tabuleiro[i][j].style.cursor = "default";
            } else {
                if (jogo[i][j] == "O") {
                    tabuleiro[i][j].innerHTML = "O";
                    tabuleiro[i][j].style.cursor = "default";
                } else {
                    if (jogo[i][j] == "") {
                        tabuleiro[i][j].innerHTML = "";
                        tabuleiro[i][j].style.cursor = "pointer";
                    }
                }
            }
        }
    }
}

//função responsavel por inicializar os elementos
function inicia() {
    btn = document.getElementById("btn");
    mensagem = document.getElementById("dvQuemComeca");
    btn.style.display = "none";
    jogando = 1;
    jogada = 0;
    quemJoga = Math.random();
    quemJoga = Math.round(quemJoga);
    jogo = [["", "", "",], ["", "", ""], ["", "", ""]];
    tabuleiro = [[document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
    [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
    [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]];

    atualizaTabuleiro();
    if (quemJoga == 0) {
        mensagem.innerHTML = "Vez do Jogador 1"
    }
    if (quemJoga == 1) {
        mensagem.innerHTML = "Vez do Jogador 2"
    }


}

//eventos
window.addEventListener("load", inicia);
