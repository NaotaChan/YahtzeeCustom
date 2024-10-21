var clickFatti=0;
var clickMassimi=3;
var turno;
var array_dadi = document.getElementsByClassName("cellaDado");

var nomeP1 = window.prompt("Inserisci il nome del primo giocatore 1");
var nomeP2 = window.prompt("Inserisci il nome del primo giocatore 2");

var starter = window.prompt("Scegli quale giocatore inizia");

var celleNomeP1 = document.getElementsByClassName("cellaNomeP1");
var celleNomeP2 = document.getElementsByClassName("cellaNomeP2");



/*Assegna il nome del primo giocatore a tutte le celle con la classe "cellaNomeP1"*/
for (var x = 0; x < celleNomeP1.length; x++) {
    celleNomeP1[x].innerHTML = nomeP1;
}

/*Assegna il nome del secondo giocatore a tutte le celle con la classe "cellaNomeP2"*/
for (var x = 0; x < celleNomeP2.length; x++) {
    celleNomeP2[x].innerHTML = nomeP2;
}

/*chi inizi ail turno sarà sulla prima colonna, il turno viene assegnato in base a chi iniza.*/
if (starter === nomeP1) {
    turno = 0;
    document.getElementsByClassName("cellaNomeP1").innerHTML = nomeP1;
    document.getElementsByClassName("cellaNomeP2").innerHTML = nomeP2;
} else if (starter === nomeP2) {
    turno = 1;
    document.getElementsByClassName("cellaNomeP1").innerHTML = nomeP2;
    document.getElementsByClassName("cellaNomeP2").innerHTML = nomeP1;
} else {
    alert("C'è un errore di battitura nella scelta del turno. Riaggiornare la pagina e reinserire i nomi :(");
}


function Turno() {
    if (turno === 0) {   
        document.getElementById("starter").innerHTML = "È il turno di " + nomeP1;
        document.getElementById('cellasomma1P1').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { sommaUnoP1(this); } };
        document.getElementById('cellasomma2P1').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { sommaDueP1(this); } };
        document.getElementById('cellasomma3P1').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { sommaTreP1(this); } };
        document.getElementById('cellasomma4P1').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { sommaQuattroP1(this); } };
        document.getElementById('cellasomma5P1').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { sommaCinqueP1(this); } };
        document.getElementById('cellasomma6P1').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { sommaSeiP1(this); } };
        document.getElementById('cellaCoppieP1').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { coppieUnoP1(this); } };
        document.getElementById('cellaDoppieCoppieP1').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { doppieCoppieP1(this); } };
        document.getElementById('cellaTrisP1').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { trisP1(this); } };
        document.getElementById('cellaQuadrisP1').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { quadrisP1(this); } };
        document.getElementById('cellaGrandeScalaP1').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { grandeScalaP1(this); } };
        document.getElementById('cellaFullP1').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { FullP1(this); } };
        document.getElementById('cellaChanceP1').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { ChancheP1(this); } };
        document.getElementById('cellaYahtzeeP1').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { yahtzeeP1(this); } };

        // Disabilita le celle del giocatore 2
        document.getElementById('cellasomma1P2').onclick = null;
        document.getElementById('cellasomma2P2').onclick = null;
        document.getElementById('cellasomma3P2').onclick = null;
        document.getElementById('cellasomma4P2').onclick = null;
        document.getElementById('cellasomma5P2').onclick = null;
        document.getElementById('cellasomma6P2').onclick = null;
        document.getElementById('cellaCoppieP2').onclick = null;
        document.getElementById('cellaDoppieCoppieP2').onclick = null;
        document.getElementById('cellaTrisP2').onclick = null;
        document.getElementById('cellaQuadrisP2').onclick = null;
        document.getElementById('cellaGrandeScalaP2').onclick = null;
        document.getElementById('cellaFullP2').onclick = null;
        document.getElementById('cellaChanceP2').onclick = null;
        document.getElementById('cellaYahtzeeP2').onclick = null;
        turno = 1;
    } else if (turno === 1) {
        document.getElementById("starter").innerHTML = "È il turno di " + nomeP2;
        document.getElementById('cellasomma1P2').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { sommaUnoP2(this); } };
        document.getElementById('cellasomma2P2').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { sommaDueP2(this); } };
        document.getElementById('cellasomma3P2').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { sommaTreP2(this); } };
        document.getElementById('cellasomma4P2').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { sommaQuattroP2(this); } };
        document.getElementById('cellasomma5P2').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { sommaCinqueP2(this); } };
        document.getElementById('cellasomma6P2').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { sommaSeiP2(this); } };
        document.getElementById('cellaCoppieP2').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { coppieUnoP2(this); } };
        document.getElementById('cellaDoppieCoppieP2').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { doppieCoppieP2(this); } };
        document.getElementById('cellaTrisP2').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { trisP2(this); } };
        document.getElementById('cellaQuadrisP2').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { quadrisP2(this); } };
        document.getElementById('cellaGrandeScalaP2').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { grandeScalaP2(this); } };
        document.getElementById('cellaFullP2').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { FullP2(this); } };
        document.getElementById('cellaChanceP2').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { ChancheP2(this); } };
        document.getElementById('cellaYahtzeeP2').onclick = function() { if (this.style.backgroundColor !== "darkgrey") { yahtzeeP2(this); } };

        // Disabilita le celle del giocatore 1
        document.getElementById('cellasomma1P1').onclick = null;
        document.getElementById('cellasomma2P1').onclick = null;
        document.getElementById('cellasomma3P1').onclick = null;
        document.getElementById('cellasomma4P1').onclick = null;
        document.getElementById('cellasomma5P1').onclick = null;
        document.getElementById('cellasomma6P1').onclick = null;
        document.getElementById('cellaCoppieP1').onclick = null;
        document.getElementById('cellaDoppieCoppieP1').onclick = null;
        document.getElementById('cellaTrisP1').onclick = null;
        document.getElementById('cellaQuadrisP1').onclick = null;
        document.getElementById('cellaGrandeScalaP1').onclick = null;
        document.getElementById('cellaFullP1').onclick = null;
        document.getElementById('cellaChanceP1').onclick = null;
        document.getElementById('cellaYahtzeeP1').onclick = null;
        turno = 0;
    }
}

Turno();



 /*function Turno()
{
    ripristinaBottone();
    if (turno == 0)
    {   document.getElementById("starter").innerHTML="È il turno di " + nomeP1;



    }else{
        document.getElementById("starter").innerHTML="È il turno di " + nomeP2;

    }
}*/




 





function lanciaDadi()
{  
    for(var x=0; x<array_dadi.length; x++)
        {   
            if (array_dadi[x].style.backgroundColor!="darkred")
            {
                array_dadi[x].innerHTML=Math.floor(Math.random()*6)+1;
            }
        }

  clickFatti++;
        
    if(clickFatti>=clickMassimi)
    {
        var bottone = document.getElementById("bottone");
        bottone.disabled = true;
        bottone.className = "button-disabled"; // Aggiunge la classe disabilitata
  
    }
}

function blocca_sblocca(cella_corrente)
{
    if(cella_corrente.style.backgroundColor=="darkred")
    {
        cella_corrente.style.backgroundColor="white";
    } else {
        cella_corrente.style.backgroundColor="darkred";
    }
}


function azzeraDadi()
{
    clickFatti=0;
    for(var x=0; x<array_dadi.length;x++)
    {
        array_dadi[x].style.backgroundColor="white";
        array_dadi[x].innerHTML=" ";
    }
    ripristinaBottone(); // Aggiunge qui la chiamata per ripristinare il bottone
    Turno();

   
}

function ripristinaBottone() {
    var bottone = document.getElementById("bottone");
    bottone.disabled = false;
    bottone.className = "button-initial"; // Ripristina lo stato iniziale del bottone
}

function sommaUnoP1(cellaCliccata) {
    var somma = 0;
    for (var x = 0; x < array_dadi.length; x++) {
        if (array_dadi[x].innerHTML == 1) {
            somma += parseInt(array_dadi[x].innerHTML);
        }
    }

    cellaCliccata.innerHTML = somma;
    document.getElementById("cellasomma1P1").onclick=null;
    cellaCliccata.style.backgroundColor = "darkgrey";

    azzeraDadi();
    aggiornaSommaTotale();
    ripristinaBottone(); // Ripristina lo stato del bottone alla fine
}
function sommaUnoP2()
{
    
    document.getElementById("bottone").disabled=false;
    
    var somma= 0;

    for(var x=0; x<array_dadi.length; x++)
    {
        if (array_dadi[x].innerHTML==1)
        {
            somma = somma + parseInt(array_dadi[x].innerHTML);
            
        } 
    }
   
    document.getElementById("cellasomma1P2").innerHTML=somma;
    document.getElementById("cellasomma1P2").onclick=null;
    document.getElementById("cellasomma1P2").style.backgroundColor="darkgrey";
    azzeraDadi();
    aggiornaSommaTotale();

    
}
 
function sommaDueP1()
{
    document.getElementById("bottone").disabled=false;
    
    var somma= 0;

    for(var x=0; x<array_dadi.length; x++)
    {
        if (array_dadi[x].innerHTML==2)
        {
            somma = somma + parseInt(array_dadi[x].innerHTML);
            
        } 
    }
   
    document.getElementById("cellasomma2P1").innerHTML=somma;
    document.getElementById("cellasomma2P1").onclick=null;
    document.getElementById("cellasomma2P1").style.backgroundColor="darkgrey";
    azzeraDadi();
    aggiornaSommaTotale();

    
}

function sommaDueP2()
{
    document.getElementById("bottone").disabled=false;
    
    var somma= 0;

    for(var x=0; x<array_dadi.length; x++)
    {
        if (array_dadi[x].innerHTML==2)
        {
            somma = somma + parseInt(array_dadi[x].innerHTML);
            
        } 
    }
   
    document.getElementById("cellasomma2P2").innerHTML=somma;
    document.getElementById("cellasomma2P2").onclick=null;
    document.getElementById("cellasomma2P2").style.backgroundColor="darkgrey";
    azzeraDadi();
    aggiornaSommaTotale();

    
}

function sommaTreP1()
{
    document.getElementById("bottone").disabled=false;
    
    var somma= 0;

    for(var x=0; x<array_dadi.length; x++)
    {
        if (array_dadi[x].innerHTML==3)
        {
            somma = somma + parseInt(array_dadi[x].innerHTML);
        } 
    }
   
    document.getElementById("cellasomma3P1").innerHTML=somma;
    document.getElementById("cellasomma3P1").onclick=null;
    document.getElementById("cellasomma3P1").style.backgroundColor="darkgrey";
    azzeraDadi();
    aggiornaSommaTotale();

    
}


function sommaTreP2()
{
    document.getElementById("bottone").disabled=false;
    
    var somma= 0;

    for(var x=0; x<array_dadi.length; x++)
    {
        if (array_dadi[x].innerHTML==3)
        {
            somma = somma + parseInt(array_dadi[x].innerHTML);
            
        } 
    }
   
    document.getElementById("cellasomma3P2").innerHTML=somma;
    document.getElementById("cellasomma3P2").onclick=null;
    document.getElementById("cellasomma3P2").style.backgroundColor="darkgrey";
    azzeraDadi();
    aggiornaSommaTotale();

    
}

function sommaQuattroP1()
{
    document.getElementById("bottone").disabled=false;
    
    var somma= 0;

    for(var x=0; x<array_dadi.length; x++)
    {
        if (array_dadi[x].innerHTML==4)
        {
            somma = somma + parseInt(array_dadi[x].innerHTML);
            
        } 
    }
   
    document.getElementById("cellasomma4P1").innerHTML=somma;
    document.getElementById("cellasomma4P1").onclick=null;
    document.getElementById("cellasomma4P1").style.backgroundColor="darkgrey";
    azzeraDadi();
    aggiornaSommaTotale();

    
}


function sommaQuattroP2()
{
    document.getElementById("bottone").disabled=false;
    
    var somma= 0;

    for(var x=0; x<array_dadi.length; x++)
    {
        if (array_dadi[x].innerHTML==4)
        {
            somma = somma + parseInt(array_dadi[x].innerHTML);
            
        } 
    }
   
    document.getElementById("cellasomma4P2").innerHTML=somma;
    document.getElementById("cellasomma4P2").onclick=null;
    document.getElementById("cellasomma4P2").style.backgroundColor="darkgrey";
    azzeraDadi();
    aggiornaSommaTotale();

    
}

function sommaCinqueP1()
{
    document.getElementById("bottone").disabled=false;
    
    var somma= 0;

    for(var x=0; x<array_dadi.length; x++)
    {
        if (array_dadi[x].innerHTML==5)
        {
            somma = somma + parseInt(array_dadi[x].innerHTML);
            
        } 
    }
   
    document.getElementById("cellasomma5P1").innerHTML=somma;
    document.getElementById("cellasomma5P1").onclick=null;
    document.getElementById("cellasomma5P1").style.backgroundColor="darkgrey";
    azzeraDadi();
    aggiornaSommaTotale();

}

function sommaCinqueP2()
{
    document.getElementById("bottone").disabled=false;
    
    var somma= 0;

    for(var x=0; x<array_dadi.length; x++)
    {
        if (array_dadi[x].innerHTML==5)
        {
            somma = somma + parseInt(array_dadi[x].innerHTML);
            
        } 
    }
   
    document.getElementById("cellasomma5P2").innerHTML=somma;
    document.getElementById("cellasomma5P2").onclick=null;
    document.getElementById("cellasomma5P2").style.backgroundColor="darkgrey";
    azzeraDadi();
    aggiornaSommaTotale();

}

function sommaSeiP1() {
    document.getElementById("bottone").disabled = false;
    var somma = 0;
    for (var x = 0; x < array_dadi.length; x++) {
        if (array_dadi[x].innerHTML == 6) {
            somma += parseInt(array_dadi[x].innerHTML);
        }
    }
    document.getElementById("cellasomma6P1").innerHTML=somma;
    document.getElementById("cellasomma6P1").onclick=null;
    document.getElementById("cellasomma6P1").style.backgroundColor="darkgrey";
    azzeraDadi();
    aggiornaSommaTotale();
}

function sommaSeiP2()
{
    document.getElementById("bottone").disabled=false;
    
    var somma= 0;

    for(var x=0; x<array_dadi.length; x++)
    {
        if (array_dadi[x].innerHTML==6)
        {
            somma = somma + parseInt(array_dadi[x].innerHTML);
            
        } 
    }
   
    document.getElementById("cellasomma6P2").innerHTML=somma;
    document.getElementById("cellasomma6P2").onclick=null;
    document.getElementById("cellasomma6P2").style.backgroundColor="darkgrey";
    azzeraDadi();
    aggiornaSommaTotale();


}


function aggiornaSommaTotale() {
    var sommaTotaleP1 = 0;
    var sommaTotaleP2 = 0;

    var sommaPunteggiP1 = document.getElementsByClassName("celleP1");
    for (var x = 0; x < sommaPunteggiP1.length; x++) {
        var totale = parseInt(sommaPunteggiP1[x].innerHTML);
        if (!isNaN(totale)) {
            sommaTotaleP1 += totale;
        }
    }
    document.getElementById("totP1").innerHTML = sommaTotaleP1;

    var sommaPunteggiP2 = document.getElementsByClassName("celleP2");
    for (var x = 0; x < sommaPunteggiP2.length; x++) {
        var totale = parseInt(sommaPunteggiP2[x].innerHTML);
        if (!isNaN(totale)) {
            sommaTotaleP2 += totale;
        }
    }
    document.getElementById("totP2").innerHTML = sommaTotaleP2;

    if (sommaTotaleP1 >= 63) {
        document.getElementById("cellaBonusP1").innerHTML = 35;
        document.getElementById("cellaBonusP1").style.background= "rgb(242, 255, 184)";
    } else {
        document.getElementById("cellaBonusP1").innerHTML = 0;
    }

    if (sommaTotaleP2 >= 63) {
        document.getElementById("cellaBonusP2").innerHTML = 35;
        document.getElementById("cellaBonusP2").style.background= "rgb(242, 255, 184)";
    } else {
        document.getElementById("cellaBonusP2").innerHTML = 0;
        
    }

    aggiornaSommaSuperTotale();
}

function coppieUnoP1() {
    document.getElementById("bottone").disabled = false;
    console.log("ciao")

    var valori_dadi = new Array();

    for (var x = 0; x < array_dadi.length; x++) {
        
        valori_dadi[x] = parseInt(array_dadi[x].innerHTML);
        
  
    }

    valori_dadi.sort();

    if (valori_dadi[0] == valori_dadi[1]) {
        document.getElementById("cellaCoppieP1").innerHTML = valori_dadi[0]+valori_dadi[1]+valori_dadi[2]+valori_dadi[3]+valori_dadi[4];
    }
    else if (valori_dadi[1] == valori_dadi[2]) {
        document.getElementById("cellaCoppieP1").innerHTML = valori_dadi[0]+valori_dadi[1]+valori_dadi[2]+valori_dadi[3]+valori_dadi[4];
    }
    else if (valori_dadi[2] == valori_dadi[3]) {
        document.getElementById("cellaCoppieP1").innerHTML = valori_dadi[0]+valori_dadi[1]+valori_dadi[2]+valori_dadi[3]+valori_dadi[4];
    }
    else if (valori_dadi[3] == valori_dadi[4]) {
        document.getElementById("cellaCoppieP1").innerHTML = valori_dadi[0]+valori_dadi[1]+valori_dadi[2]+valori_dadi[3]+valori_dadi[4];
    } else {document.getElementById("cellaCoppieP1").innerHTML = 0 }console.log("sommo e scrivo")

    document.getElementById("cellaCoppieP1").onclick = null;
    document.getElementById("cellaCoppieP1").style.backgroundColor = "darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();
}

function coppieUnoP2() {
    document.getElementById("bottone").disabled = false;
    console.log("ciao")

    var valori_dadi = new Array();

    for (var x = 0; x < array_dadi.length; x++) {
        
        valori_dadi[x] = parseInt(array_dadi[x].innerHTML);
        console.log("loop");
              
    }

    valori_dadi.sort();

    if (valori_dadi[0] == valori_dadi[1]) {
        document.getElementById("cellaCoppieP2").innerHTML = valori_dadi[0]+valori_dadi[1]+valori_dadi[2]+valori_dadi[3]+valori_dadi[4];
    }
    else if (valori_dadi[1] == valori_dadi[2]) {
        document.getElementById("cellaCoppieP2").innerHTML = valori_dadi[0]+valori_dadi[1]+valori_dadi[2]+valori_dadi[3]+valori_dadi[4];
    }
    else if (valori_dadi[2] == valori_dadi[3]) {
        document.getElementById("cellaCoppieP2").innerHTML = valori_dadi[0]+valori_dadi[1]+valori_dadi[2]+valori_dadi[3]+valori_dadi[4];
    }
    else if (valori_dadi[3] == valori_dadi[4]) {
        document.getElementById("cellaCoppieP2").innerHTML = valori_dadi[0]+valori_dadi[1]+valori_dadi[2]+valori_dadi[3]+valori_dadi[4];
    }else {document.getElementById("cellaCoppieP2").innerHTML = 0 }console.log("sommo e scrivo")


    document.getElementById("cellaCoppieP2").onclick = null;
    document.getElementById("cellaCoppieP2").style.backgroundColor = "darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();
}

function doppieCoppieP1() {
    document.getElementById("bottone").disabled = false;
    console.log("ciao")

    var valori_dadi = new Array();

    for (var x = 0; x < array_dadi.length; x++) {
        valori_dadi[x] = parseInt(array_dadi[x].innerHTML);
        console.log("loop")
    }

    valori_dadi.sort();

    
    if ((valori_dadi[0] == valori_dadi[1] && valori_dadi[2] == valori_dadi[3]) || //se dado 1 è = a dado 2 e dado 3 è uguale a dado 4, o se dado 1 è = a dado 2 e dado 4 è uguale a dado 5, o se dado 2 è = a dado 3 e dado 4 = dado 5, risulta vera, c'è una doppia coppia, scrive il numero totale, sennò 0 
        (valori_dadi[0] == valori_dadi[1] && valori_dadi[3] == valori_dadi[4]) ||
        (valori_dadi[1] == valori_dadi[2] && valori_dadi[3] == valori_dadi[4])) {
        
        var somma = valori_dadi[0] + valori_dadi[1] + valori_dadi[2] + valori_dadi[3] + valori_dadi[4];
        document.getElementById("cellaDoppieCoppieP1").innerHTML = somma;
    } else {
        
        document.getElementById("cellaDoppieCoppieP1").innerHTML = 0;
    }

    console.log("sommo e scrivo");

    document.getElementById("cellaDoppieCoppieP1").onclick = null;
    document.getElementById("cellaDoppieCoppieP1").style.backgroundColor = "darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();
}

function doppieCoppieP2() {
    document.getElementById("bottone").disabled = false;
    console.log("ciao")

    var valori_dadi = new Array();

    for (var x = 0; x < array_dadi.length; x++) {
        valori_dadi[x] = parseInt(array_dadi[x].innerHTML);
        console.log("loop")
    }

    valori_dadi.sort();

    
    if ((valori_dadi[0] == valori_dadi[1] && valori_dadi[2] == valori_dadi[3]) || //se dado 1 è = a dado 2 e dado 3 è uguale a dado 4, o se dado 1 è = a dado 2 e dado 4 è uguale a dado 5, o se dado 2 è = a dado 3 e dado 4 = dado 5, risulta vera, c'è una doppia coppia, scrive il numero totale, sennò 0 
        (valori_dadi[0] == valori_dadi[1] && valori_dadi[3] == valori_dadi[4]) ||
        (valori_dadi[1] == valori_dadi[2] && valori_dadi[3] == valori_dadi[4])) {
        
        var somma = valori_dadi[0] + valori_dadi[1] + valori_dadi[2] + valori_dadi[3] + valori_dadi[4];
        document.getElementById("cellaDoppieCoppieP2").innerHTML = somma;
    } else {
        
        document.getElementById("cellaDoppieCoppieP2").innerHTML = 0;
    }

    console.log("sommo e scrivo");

    document.getElementById("cellaDoppieCoppieP2").onclick = null;
    document.getElementById("cellaDoppieCoppieP2").style.backgroundColor = "darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();
}

function trisP1() {
    document.getElementById("bottone").disabled = false;
    console.log("ciao")

    var valori_dadi = new Array();

    for (var x = 0; x < array_dadi.length; x++) {
        valori_dadi[x] = parseInt(array_dadi[x].innerHTML);
        console.log("loop")
    }

    valori_dadi.sort();

    
    if ((valori_dadi[0] == valori_dadi[1] && valori_dadi[1] == valori_dadi[2]) || 
        (valori_dadi[1] == valori_dadi[2] && valori_dadi[2] == valori_dadi[3]) ||
        (valori_dadi[2] == valori_dadi[3] && valori_dadi[3] == valori_dadi[4])) {
        
        var somma = valori_dadi[0] + valori_dadi[1] + valori_dadi[2] + valori_dadi[3] + valori_dadi[4];
        document.getElementById("cellaTrisP1").innerHTML = somma;
    } else {
        
        document.getElementById("cellaTrisP1").innerHTML = 0;
    }

    console.log("sommo e scrivo");

    document.getElementById("cellaTrisP1").onclick = null;
    document.getElementById("cellaTrisP1").style.backgroundColor = "darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();
}

function trisP2() {
    document.getElementById("bottone").disabled = false;
    console.log("ciao")

    var valori_dadi = new Array();

    for (var x = 0; x < array_dadi.length; x++) {
        valori_dadi[x] = parseInt(array_dadi[x].innerHTML);
        console.log("loop")
    }

    valori_dadi.sort();

    
    if ((valori_dadi[0] == valori_dadi[1] && valori_dadi[1] == valori_dadi[2]) || 
        (valori_dadi[1] == valori_dadi[2] && valori_dadi[2] == valori_dadi[3]) ||
        (valori_dadi[2] == valori_dadi[3] && valori_dadi[3] == valori_dadi[4])) {
        
        var somma = valori_dadi[0] + valori_dadi[1] + valori_dadi[2] + valori_dadi[3] + valori_dadi[4];
        document.getElementById("cellaTrisP2").innerHTML = somma;
    } else {
        
        document.getElementById("cellaTrisP2").innerHTML = 0;
    }

    console.log("sommo e scrivo");

    document.getElementById("cellaTrisP2").onclick = null;
    document.getElementById("cellaTrisP2").style.backgroundColor = "darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();
}

function quadrisP1() {
    document.getElementById("bottone").disabled = false;
    console.log("ciao")

    var valori_dadi = new Array();

    for (var x = 0; x < array_dadi.length; x++) {
        valori_dadi[x] = parseInt(array_dadi[x].innerHTML);
        console.log("loop")
    }

    valori_dadi.sort();

    
    if ((valori_dadi[0] == valori_dadi[1] && valori_dadi[2] == valori_dadi[3] && valori_dadi[0] == valori_dadi[2] && valori_dadi[1] == valori_dadi[3] ) || 
        (valori_dadi[1] == valori_dadi[2] && valori_dadi[3] == valori_dadi[4] && valori_dadi[1] == valori_dadi[3] && valori_dadi[2] == valori_dadi[4]) ||
        (valori_dadi[0] == valori_dadi[1] && valori_dadi[3] == valori_dadi[4] && valori_dadi[0] == valori_dadi[3] && valori_dadi[1] == valori_dadi[4])) {
        
        var somma = valori_dadi[0] + valori_dadi[1] + valori_dadi[2] + valori_dadi[3] + valori_dadi[4];
        document.getElementById("cellaQuadrisP1").innerHTML = somma;
    } else {
        
        document.getElementById("cellaQuadrisP1").innerHTML = 0;
    }

    console.log("sommo e scrivo");

    document.getElementById("cellaQuadrisP1").onclick = null;
    document.getElementById("cellaQuadrisP1").style.backgroundColor = "darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();
}

function quadrisP2() {
    document.getElementById("bottone").disabled = false;
    console.log("ciao")

    var valori_dadi = new Array();

    for (var x = 0; x < array_dadi.length; x++) {
        valori_dadi[x] = parseInt(array_dadi[x].innerHTML);
        console.log("loop")
    }

    valori_dadi.sort();

    
    if ((valori_dadi[0] == valori_dadi[1] && valori_dadi[2] == valori_dadi[3] && valori_dadi[0] == valori_dadi[2] && valori_dadi[1] == valori_dadi[3] ) || 
        (valori_dadi[1] == valori_dadi[2] && valori_dadi[3] == valori_dadi[4] && valori_dadi[1] == valori_dadi[3] && valori_dadi[2] == valori_dadi[4]) ||
        (valori_dadi[0] == valori_dadi[1] && valori_dadi[3] == valori_dadi[4] && valori_dadi[0] == valori_dadi[3] && valori_dadi[1] == valori_dadi[4])) {
        
        var somma = valori_dadi[0] + valori_dadi[1] + valori_dadi[2] + valori_dadi[3] + valori_dadi[4];
        document.getElementById("cellaQuadrisP2").innerHTML = somma;
    } else {
        
        document.getElementById("cellaQuadrisP2").innerHTML = 0;
    }

    console.log("sommo e scrivo");

    document.getElementById("cellaQuadrisP2").onclick = null;
    document.getElementById("cellaQuadrisP2").style.backgroundColor = "darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();
}

function piccolaScalaP1() {
    document.getElementById("bottone").disabled = false;
    console.log("ciao")

    var valori_dadi = new Array();

    for (var x = 0; x < array_dadi.length; x++) {
        valori_dadi[x] = parseInt(array_dadi[x].innerHTML);
        console.log("loop")
    }

    var valori_unici = new Set(valori_dadi);
    valori_dadi = [...valori_unici];

    valori_dadi.sort();

            
    if ((valori_dadi[0]+1 == valori_dadi[1] && valori_dadi[1]+1 == valori_dadi[2] && valori_dadi[2]+1 == valori_dadi[3]) || 
        (valori_dadi[1]+1 == valori_dadi[2] && valori_dadi[2]+1 == valori_dadi[3] && valori_dadi[3]+1 == valori_dadi[4])
    ) {


        var somma = 30;
        document.getElementById("cellaPiccolaScalaP1").innerHTML = somma;
    } else {
        
        document.getElementById("cellaPiccolaScalaP1").innerHTML = 0;
    }

    console.log("sommo e scrivo");

    document.getElementById("cellaPiccolaScalaP1").onclick = null;
    document.getElementById("cellaPiccolaScalaP1").style.backgroundColor = "darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();
}

function piccolaScalaP2() {
    document.getElementById("bottone").disabled = false;
    console.log("ciao")

    var valori_dadi = new Array();



    for (var x = 0; x < array_dadi.length; x++) {
        valori_dadi[x] = parseInt(array_dadi[x].innerHTML);
        console.log("loop")
    }

    var valori_unici = new Set(valori_dadi); //estraggo i valori unici
    valori_dadi = [...valori_unici]; //trasformo in un array

    valori_dadi.sort();


    if ((valori_dadi[0]+1 == valori_dadi[1] && valori_dadi[1]+1 == valori_dadi[2] && valori_dadi[2]+1 == valori_dadi[3]) || 
        (valori_dadi[1]+1 == valori_dadi[2] && valori_dadi[2]+1 == valori_dadi[3] && valori_dadi[3]+1 == valori_dadi[4])
    ) {
        var somma = 30;
        document.getElementById("cellaPiccolaScalaP2").innerHTML = somma;
    } else {
        
        document.getElementById("cellaPiccolaScalaP2").innerHTML = 0;
    }

    console.log("sommo e scrivo");

    document.getElementById("cellaPiccolaScalaP2").onclick = null;
    document.getElementById("cellaPiccolaScalaP2").style.backgroundColor = "darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();
}


function grandeScalaP1() {
    document.getElementById("bottone").disabled = false;
    console.log("ciao")

    var valori_dadi = new Array();

    for (var x = 0; x < array_dadi.length; x++) {
        valori_dadi[x] = parseInt(array_dadi[x].innerHTML);
        console.log("loop")
    }

    valori_dadi.sort();

    
    if ((valori_dadi[0]+1 == valori_dadi[1] && valori_dadi[1]+1 == valori_dadi[2] && valori_dadi[2]+1 == valori_dadi[3] && valori_dadi[3]+1 == valori_dadi[4])
    ) {

        
        var somma = 40;
        document.getElementById("cellaGrandeScalaP1").innerHTML = somma;
    } else {
        
        document.getElementById("cellaGrandeScalaP1").innerHTML = 0;
    }

    console.log("sommo e scrivo");

    document.getElementById("cellaGrandeScalaP1").onclick = null;
    document.getElementById("cellaGrandeScalaP1").style.backgroundColor = "darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();
}


function grandeScalaP2() {
    document.getElementById("bottone").disabled = false;
    console.log("ciao")

    var valori_dadi = new Array();

    for (var x = 0; x < array_dadi.length; x++) {
        valori_dadi[x] = parseInt(array_dadi[x].innerHTML);
        console.log("loop")
    }

    valori_dadi.sort();

    
    if ((valori_dadi[0]+1 == valori_dadi[1] && valori_dadi[1]+1 == valori_dadi[2] && valori_dadi[2]+1 == valori_dadi[3] && valori_dadi[3]+1 == valori_dadi[4])
    ) {

        
        var somma = 40;
        document.getElementById("cellaGrandeScalaP2").innerHTML = somma;
    } else {
        
        document.getElementById("cellaGrandeScalaP2").innerHTML = 0;
    }

    console.log("sommo e scrivo");

    document.getElementById("cellaGrandeScalaP2").onclick = null;
    document.getElementById("cellaGrandeScalaP2").style.backgroundColor = "darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();
}

function yahtzeeP1() {
    document.getElementById("bottone").disabled = false;
    console.log("ciao")

    var valori_dadi = new Array();

    for (var x = 0; x < array_dadi.length; x++) {
        valori_dadi[x] = parseInt(array_dadi[x].innerHTML);
        console.log("loop")
    }

    valori_dadi.sort();

    
    if ((valori_dadi[0] == valori_dadi[1] && valori_dadi[1] == valori_dadi[2] && valori_dadi[2] == valori_dadi[3] && valori_dadi[3] == valori_dadi[4])
    ) {

        
        var somma = 50;
        document.getElementById("cellaYahtzeeP1").innerHTML = somma;
    } else {
        
        document.getElementById("cellaYahtzeeP1").innerHTML = 0;
    }

    console.log("sommo e scrivo");

    document.getElementById("cellaYahtzeeP1").onclick = null;
    document.getElementById("cellaYahtzeeP1").style.backgroundColor = "darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();
}

function yahtzeeP2() {
    document.getElementById("bottone").disabled = false;
    console.log("ciao")

    var valori_dadi = new Array();

    for (var x = 0; x < array_dadi.length; x++) {
        valori_dadi[x] = parseInt(array_dadi[x].innerHTML);
        console.log("loop")
    }

    valori_dadi.sort();

    
    if ((valori_dadi[0] == valori_dadi[1] && valori_dadi[1] == valori_dadi[2] && valori_dadi[2] == valori_dadi[3] && valori_dadi[3] == valori_dadi[4])
    ) {

        
        var somma = 50;
        document.getElementById("cellaYahtzeeP2").innerHTML = somma;
    } else {
        
        document.getElementById("cellaYahtzeeP2").innerHTML = 0;
    }

    console.log("sommo e scrivo");

    document.getElementById("cellaYahtzeeP2").onclick = null;
    document.getElementById("cellaYahtzeeP2").style.backgroundColor = "darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();
}

function ChancheP1()
{
    document.getElementById("bottone").disabled=false;
    
    var somma= 0;

    for(var x=0; x<array_dadi.length; x++)
    {
        somma = somma + parseInt(array_dadi[x].innerHTML);            
    }
    if (!isNaN(somma))

        {
            document.getElementById("cellaChanceP1").innerHTML=somma;
            document.getElementById("cellaChanceP1").onclick=null;
            document.getElementById("cellaChanceP1").style.backgroundColor="darkgrey";
            azzeraDadi();
            aggiornaSommaSuperTotale();
        }else{
    
   
    document.getElementById("cellaChanceP1").innerHTML=0;
    document.getElementById("cellaChanceP1").onclick=null;
    document.getElementById("cellaChanceP1").style.backgroundColor="darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();}

}

function ChancheP2()
{
    document.getElementById("bottone").disabled=false;
    
    var somma= 0;

    for(var x=0; x<array_dadi.length; x++)
    {
        somma = somma + parseInt(array_dadi[x].innerHTML);            
    } if (!isNaN(somma))

        {
            document.getElementById("cellaChanceP2").innerHTML=somma;
            document.getElementById("cellaChanceP2").onclick=null;
            document.getElementById("cellaChanceP2").style.backgroundColor="darkgrey";
            azzeraDadi();
            aggiornaSommaSuperTotale();

        }else{
   
    document.getElementById("cellaChanceP2").innerHTML=0;
    document.getElementById("cellaChanceP2").onclick=null;
    document.getElementById("cellaChanceP2").style.backgroundColor="darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();
    }

}

function FullP1()
{
    document.getElementById("bottone").disabled = false;
    
    console.log("ciao")

    var valori_dadi = new Array();

    for (var x = 0; x < array_dadi.length; x++) {
        valori_dadi[x] = parseInt(array_dadi[x].innerHTML);
        console.log("loop")
    }

    valori_dadi.sort();

    
    if ((valori_dadi[0] == valori_dadi[1] && valori_dadi[1] == valori_dadi[2] && valori_dadi[3] == valori_dadi[4] || 
        valori_dadi[0] == valori_dadi[1] && valori_dadi[2] == valori_dadi[3] && valori_dadi[3] == valori_dadi[4])
    ) {

        
        var somma = 25;
        document.getElementById("cellaFullP1").innerHTML = somma;
    } else {
        
        document.getElementById("cellaFullP1").innerHTML = 0;
    }

    console.log("sommo e scrivo");

    document.getElementById("cellaFullP1").onclick = null;
    document.getElementById("cellaFullP1").style.backgroundColor = "darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();

}

function FullP2()
{
    document.getElementById("bottone").disabled = false;
    console.log("ciao")

    var valori_dadi = new Array();

    for (var x = 0; x < array_dadi.length; x++) {
        valori_dadi[x] = parseInt(array_dadi[x].innerHTML);
        console.log("loop")
    }

    valori_dadi.sort();

    
    if ((valori_dadi[0] == valori_dadi[1] && valori_dadi[1] == valori_dadi[2] && valori_dadi[3] == valori_dadi[4] || 
        valori_dadi[0] == valori_dadi[1] && valori_dadi[2] == valori_dadi[3] && valori_dadi[3] == valori_dadi[4])
    ) {

        
        var somma = 25;
        document.getElementById("cellaFullP2").innerHTML = somma;
    } else {
        
        document.getElementById("cellaFullP2").innerHTML = 0;
    }

    console.log("sommo e scrivo");

    document.getElementById("cellaFullP2").onclick = null;
    document.getElementById("cellaFullP2").style.backgroundColor = "darkgrey";
    azzeraDadi();
    aggiornaSommaSuperTotale();

}

function aggiornaSommaSuperTotale() {
    var sommaTotale2P1 = 0;
    var sommaTotale2P2 = 0;

    var sommaPunteggi2P1 = document.getElementsByClassName("celle2P1");
    for (var x = 0; x < sommaPunteggi2P1.length; x++) {
        var totaleFinale = parseInt(sommaPunteggi2P1[x].innerHTML);
        if (!isNaN(totaleFinale)) {
            sommaTotale2P1 += totaleFinale;
        }
    }
    document.getElementById("totSuperFinaleP1").innerHTML = sommaTotale2P1;

    var sommaPunteggi2P2 = document.getElementsByClassName("celle2P2");
    for (var x = 0; x < sommaPunteggi2P2.length; x++) {
        var totaleFinale = parseInt(sommaPunteggi2P2[x].innerHTML);
        if (!isNaN(totaleFinale)) {
            sommaTotale2P2 += totaleFinale;
        }
    }
    document.getElementById("totSuperFinaleP2").innerHTML = sommaTotale2P2;
}















    



    


