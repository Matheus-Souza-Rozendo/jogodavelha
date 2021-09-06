		//variaveis
        var jogo=[];
        var tabuleiro=[];
        var quemJoga=0; //0=jogador 1=cpu
        var verifica;
        var jogando=0;
        var nivel=1;
        var jogadaCpu=1;
        var QuemComeca=1;
        var btn;
        var mensagem;
        var jogada;
  //função responsavel pela jogada da CPU
        function cpuJoga(){
          if(jogando==1){
            var i,j;
            if(nivel==1){
              do{
                i=Math.random()*2;
                i = Math.round(i);
                j=Math.random()*2;
                j = Math.round(j);                  
              }while(jogo[i][j]!="");
              jogo[i][j]="O";
            }else{
              //nivel 2
              if(nivel==2){
                //ataque
                //jogadas da linha 1
                if((jogo[0][0]=="O")&&(jogo[0][1]=="O")&&(jogo[0][2]=="")){
                    jogo[0][2]="O";
                }else if((jogo[0][0]=="O")&&(jogo[0][1]=="")&&(jogo[0][2]=="O")){
                  jogo[0][1]="O";
                }else if((jogo[0][0]=="")&&(jogo[0][1]=="O")&&(jogo[0][2]=="O")){
                  jogo[0][0]="O";
                }else
                  //jogada linha 2
                  if((jogo[1][0]=="O")&&(jogo[1][1]=="O")&&(jogo[1][2]=="")){
                    jogo[1][2]="O";
                }else if((jogo[1][0]=="O")&&(jogo[1][1]=="")&&(jogo[1][2]=="O")){
                  jogo[1][1]="O";
                }else if((jogo[1][0]=="")&&(jogo[1][1]=="O")&&(jogo[1][2]=="O")){
                  jogo[1][0]="O";
                }else
                  //jogada linha 3
                if((jogo[2][0]=="O")&&(jogo[2][1]=="O")&&(jogo[2][2]=="")){
                    jogo[2][2]="O";
                }else if((jogo[2][0]=="O")&&(jogo[2][1]=="")&&(jogo[2][2]=="O")){
                  jogo[2][1]="O";
                }else if((jogo[2][0]=="")&&(jogo[2][1]=="O")&&(jogo[2][2]=="O")){
                  jogo[2][0]="O";
                }else 
               //jogadas da coluna 1
                if((jogo[0][0]=="O")&&(jogo[1][0]=="O")&&(jogo[2][0]=="")){
                    jogo[2][0]="O";
                }else if((jogo[0][0]=="O")&&(jogo[1][0]=="")&&(jogo[2][0]=="O")){
                  jogo[1][0]="O";
                }else if((jogo[0][0]=="")&&(jogo[1][0]=="O")&&(jogo[2][0]=="O")){
                  jogo[0][0]="O";
                }else
                  //jogada coluna 2
                  if((jogo[0][1]=="O")&&(jogo[1][1]=="O")&&(jogo[2][1]=="")){
                    jogo[2][1]="O";
                }else if((jogo[0][1]=="O")&&(jogo[1][1]=="")&&(jogo[2][1]=="O")){
                  jogo[1][1]="O";
                }else if((jogo[0][1]=="")&&(jogo[1][1]=="O")&&(jogo[2][1]=="O")){
                  jogo[0][1]="O";
                }else
                  //jogada linha 3
                if((jogo[0][2]=="O")&&(jogo[1][2]=="O")&&(jogo[2][2]=="")){
                    jogo[2][2]="O";
                }else if((jogo[0][2]=="O")&&(jogo[1][2]=="")&&(jogo[2][2]=="O")){
                  jogo[1][2]="O";
                }else if((jogo[0][2]=="")&&(jogo[1][2]=="O")&&(jogo[2][2]=="O")){
                  jogo[0][2]="O";
                }else  
                  //diagonal 1
                if((jogo[0][0]=="O")&&(jogo[1][1]=="O")&&(jogo[2][2]=="")){
                    jogo[2][2]="O";
                }else if((jogo[0][0]=="O")&&(jogo[1][1]=="")&&(jogo[2][2]=="O")){
                  jogo[1][1]="O";
                }else if((jogo[0][0]=="")&&(jogo[1][1]=="O")&&(jogo[2][2]=="O")){
                  jogo[0][0]="O";
                }else
                //diagonal 2
                if((jogo[0][2]=="O")&&(jogo[1][1]=="O")&&(jogo[2][0]=="")){
                    jogo[2][0]="O";
                }else if((jogo[0][2]=="O")&&(jogo[1][1]=="")&&(jogo[2][0]=="O")){
                  jogo[1][1]="O";
                }else if((jogo[0][2]=="")&&(jogo[1][1]=="O")&&(jogo[2][0]=="O")){
                  jogo[0][2]="O";
                }else
                  //defesa
                 //jogadas da linha 1
                if((jogo[0][0]=="X")&&(jogo[0][1]=="X")&&(jogo[0][2]=="")){
                    jogo[0][2]="O";
                }else if((jogo[0][0]=="X")&&(jogo[0][1]=="")&&(jogo[0][2]=="X")){
                  jogo[0][1]="O";
                }else if((jogo[0][0]=="")&&(jogo[0][1]=="X")&&(jogo[0][2]=="X")){
                  jogo[0][0]="O";
                }else
                  //jogada linha 2
                  if((jogo[1][0]=="X")&&(jogo[1][1]=="X")&&(jogo[1][2]=="")){
                    jogo[1][2]="O";
                }else if((jogo[1][0]=="X")&&(jogo[1][1]=="")&&(jogo[1][2]=="X")){
                  jogo[1][1]="O";
                }else if((jogo[1][0]=="")&&(jogo[1][1]=="X")&&(jogo[1][2]=="X")){
                  jogo[1][0]="O";
                }else
                  //jogada linha 3
                if((jogo[2][0]=="X")&&(jogo[2][1]=="X")&&(jogo[2][2]=="")){
                    jogo[2][2]="O";
                }else if((jogo[2][0]=="X")&&(jogo[2][1]=="")&&(jogo[2][2]=="X")){
                  jogo[2][1]="O";
                }else if((jogo[2][0]=="")&&(jogo[2][1]=="X")&&(jogo[2][2]=="X")){
                  jogo[2][0]="O";
                }else 
               //jogadas da coluna 1
                if((jogo[0][0]=="X")&&(jogo[1][0]=="X")&&(jogo[2][0]=="")){
                    jogo[2][0]="O";
                }else if((jogo[0][0]=="X")&&(jogo[1][0]=="")&&(jogo[2][0]=="X")){
                  jogo[1][0]="O";
                }else if((jogo[0][0]=="")&&(jogo[1][0]=="X")&&(jogo[2][0]=="X")){
                  jogo[0][0]="O";
                }else
                  //jogada coluna 2
                  if((jogo[0][1]=="X")&&(jogo[1][1]=="X")&&(jogo[2][1]=="")){
                    jogo[2][1]="O";
                }else if((jogo[0][1]=="X")&&(jogo[1][1]=="")&&(jogo[2][1]=="X")){
                  jogo[1][1]="O";
                }else if((jogo[0][1]=="")&&(jogo[1][1]=="X")&&(jogo[2][1]=="X")){
                  jogo[0][1]="O";
                }else
                  //jogada linha 3
                if((jogo[0][2]=="X")&&(jogo[1][2]=="X")&&(jogo[2][2]=="")){
                    jogo[2][2]="O";
                }else if((jogo[0][2]=="X")&&(jogo[1][2]=="")&&(jogo[2][2]=="X")){
                  jogo[1][2]="O";
                }else if((jogo[0][2]=="")&&(jogo[1][2]=="X")&&(jogo[2][2]=="X")){
                  jogo[0][2]="O";
                }else  
                  //diagonal 1
                if((jogo[0][0]=="X")&&(jogo[1][1]=="X")&&(jogo[2][2]=="")){
                    jogo[2][2]="O";
                }else if((jogo[0][0]=="X")&&(jogo[1][1]=="")&&(jogo[2][2]=="X")){
                  jogo[1][1]="O";
                }else if((jogo[0][0]=="")&&(jogo[1][1]=="X")&&(jogo[2][2]=="X")){
                  jogo[0][0]="O";
                }else
                //diagonal 2
                if((jogo[0][2]=="X")&&(jogo[1][1]=="X")&&(jogo[2][0]=="")){
                    jogo[2][0]="O";
                }else if((jogo[0][2]=="X")&&(jogo[1][1]=="")&&(jogo[2][0]=="X")){
                  jogo[1][1]="O";
                }else if((jogo[0][2]=="")&&(jogo[1][1]=="X")&&(jogo[2][0]=="X")){
                  jogo[0][2]="O";
                }else{ if(jogada<9){
                        do{
                              i=Math.random()*2;
                              i = Math.round(i);
                              j=Math.random()*2;
                              j = Math.round(j);                  
                          }while(jogo[i][j]!="");
                        jogo[i][j]="O";
                }
              }
            }

            }
            jogada++;
            atualizaTabuleiro();
            verifica=verificaVitoria();
            if(verifica!=""){
              mensagem.innerHTML=verifica+" Venceu";
              jogando=0;
              btn.style.display="block";
              }
              if((jogada==9)&&(jogando==1)){
                mensagem.innerHTML="Empate";
                jogando=0;
                btn.style.display="block";
              }
            quemJoga=0;
          }
        }
  //função que verifica se houve um ganhador
        function verificaVitoria(){
          var i;
          //linhas
          for(i=0;i<3;i++){
            if((jogo[i][0]==jogo[i][1])&&(jogo[i][1]==jogo[i][2])){
                return jogo[i][0];
            }
          }
          //coluna
          for(i=0;i<3;i++){
            if((jogo[0][i]==jogo[1][i])&&(jogo[1][i]==jogo[2][i])){
                return jogo[0][i];
            }
          }
          //diagonal
          if(((jogo[0][0]==jogo[1][1])&&(jogo[1][1]==jogo[2][2]))){
            return jogo[1][1];
          } 
          if(((jogo[0][2]==jogo[1][1])&&(jogo[1][1]==jogo[2][0]))){
            return jogo[1][1];
          } 

          return "";      
        }
  //função responsavel por computadar a jogada do jogador
        function jogar(p){
          if((jogando==1)&&(quemJoga==0)){
            jogada++;
            switch(p){
              case 1:
                if(jogo[0][0]==""){
                    jogo[0][0]="X";
                    quemJoga=1;    
                }
                break;
              case 2:
                if(jogo[0][1]==""){
                    jogo[0][1]="X";
                    quemJoga=1;    
                }
                break;
              case 3:
                if(jogo[0][2]==""){
                    jogo[0][2]="X";
                    quemJoga=1;    
                }
                break;  
              case 4:
                if(jogo[1][0]==""){
                    jogo[1][0]="X";
                    quemJoga=1;    
                }
                break;
              case 5:
                if(jogo[1][1]==""){
                    jogo[1][1]="X";
                    quemJoga=1;    
                }
                break;
              case 6:
                if(jogo[1][2]==""){
                    jogo[1][2]="X";
                    quemJoga=1;    
                }
                break;
              case 7:
                if(jogo[2][0]==""){
                    jogo[2][0]="X";
                    quemJoga=1;    
                }
                break;
              case 8:
                if(jogo[2][1]==""){
                    jogo[2][1]="X";
                    quemJoga=1;    
                }
                break;
              default:
                if(jogo[2][2]==""){
                    jogo[2][2]="X";
                    quemJoga=1;    
                }
                break;                                  
            }
            if(quemJoga==1){
              atualizaTabuleiro();
              verifica=verificaVitoria();
              if(verifica!=""){
                mensagem.innerHTML=verifica+" Venceu";
                jogando=0;
                btn.style.display="block";
              }
              if((jogada==9)&&(jogando==1)){
                mensagem.innerHTML="Empate";
                jogando=0;
                btn.style.display="block";
              }
              cpuJoga();
            }
          }
        }
  //função que atualiza o tabuleiro
        function atualizaTabuleiro(){
          for(var i=0;i<3;i++){
            for(var j=0;j<3;j++){
              if(jogo[i][j]=="X"){
                tabuleiro[i][j].innerHTML="X";
                tabuleiro[i][j].style.cursor="default";
              }else{
                  if(jogo[i][j]=="O"){
                    tabuleiro[i][j].innerHTML="O";
                    tabuleiro[i][j].style.cursor="default";
                  }else{
                    if(jogo[i][j]==""){
                      tabuleiro[i][j].innerHTML="";
                      tabuleiro[i][j].style.cursor="pointer";  
                    }                 
                }
              }
            }
          }
        }
  //função que inicializa os elementos
        function inicia(){
          btn = document.getElementById("btn");
          mensagem=document.getElementById("dvQuemComeca");
          btn.style.display="none";
          jogando=1;
          jogada=0;
          quemJoga=Math.random();
          quemJoga=Math.round(quemJoga);
          jogo=[["","","",],["","",""],["","",""]];
          tabuleiro=[[document.getElementById("p1"),document.getElementById("p2"),document.getElementById("p3")],
                    [document.getElementById("p4"),document.getElementById("p5"),document.getElementById("p6")],
                    [document.getElementById("p7"),document.getElementById("p8"),document.getElementById("p9")]];
        
          atualizaTabuleiro();
          if(quemJoga==0){
              mensagem.innerHTML="Jogador Começa";
          }
          if(quemJoga==1){
            mensagem.innerHTML="CPU Começa";
            cpuJoga();
          }
          if(nivel==1){
            document.getElementById("nivel1").style.backgroundColor="rgb(27,140,212)";
            document.getElementById("nivel1").style.color="#FFF";
            document.getElementById("nivel2").style.backgroundColor="rgba(150,150,150,50%)";
            document.getElementById("nivel2").style.color="#000";              
          }else{
            if(nivel==2){
            document.getElementById("nivel2").style.backgroundColor="rgb(27,140,212)";
            document.getElementById("nivel2").style.color="#FFF";
            document.getElementById("nivel1").style.backgroundColor="rgba(150,150,150,50%)";
            document.getElementById("nivel1").style.color="#000";
            } 
          }

        }
       //função que muda o nivel de jogo
        function mudaNivel(l){
          nivel=l;
          if(nivel==1){
            document.getElementById("nivel1").style.backgroundColor="rgb(27,140,212)";
            document.getElementById("nivel1").style.color="#FFF";
            document.getElementById("nivel2").style.backgroundColor="rgba(150,150,150,50%)";
            document.getElementById("nivel2").style.color="#000";              
          }else{
            if(nivel==2){
            document.getElementById("nivel2").style.backgroundColor="rgb(27,140,212)";
            document.getElementById("nivel2").style.color="#FFF";
            document.getElementById("nivel1").style.backgroundColor="rgba(150,150,150,50%)";
            document.getElementById("nivel1").style.color="#000";
            } 
          }
        }
  //eventos
        window.addEventListener("load",inicia);