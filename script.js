//codice riferito alle immagini piccole nella pagina dei dettagli
var immagini=document.querySelectorAll(".imgpiccole")
for(let i=0; i<immagini.length; i++){
    immagini[i].addEventListener("click",function(){
        document.querySelector("#dettaglio1").src=immagini[i].src
    })
}

/*Codice riferito all'aggiunta carrello pagina galleria per ogni elemento*/
var carrelloCard= document.querySelectorAll(".carrelloCard")
var btnAggCarr= document.getElementById("aggiungiCarrello")
var pallino= document.getElementById("pallino")
var somma=0

for(let i=0; i<carrelloCard.length;i++){
    carrelloCard[i].addEventListener("click", function(){
        pallino.classList.remove("hidden")
        somma=somma+1
        pallino.innerHTML=somma
    })
}

//invio parametri
var btnVedidettagli=document.querySelectorAll(".btnVedidettagli")
var didascalia=document.querySelectorAll(".didascalia")
var foto= document.querySelectorAll(".foto")
var descrizione=document.querySelectorAll(".descrizioneCard")
var nomeartista=document.querySelectorAll(".nomeartista")
for(let i=0; i<btnVedidettagli.length; i++){
    btnVedidettagli[i].addEventListener("click", function(){
        var titoloInviare=didascalia[i].innerText
        var fotoInviare=foto[i].getAttribute("src")
        var descrizoneInviare=descrizione[i].innerText
        var nomeinviare=nomeartista[i].innerText
        window.location.href=`dettagli.html?titolo=${titoloInviare}&foto=${fotoInviare}&descrizione=${descrizoneInviare}&nomeartista=${nomeinviare}`;

    })
}

//recupero parametri nella pagina dettagli
var parametriURL= new URLSearchParams(window.location.search)

var titolodettaglio= document.querySelector("#titolodettaglio1")
var titolo= parametriURL.get("titolo")
titolodettaglio.innerHTML=titolo
var fotodettaglio=document.querySelector("#dettaglio1")
fotodettaglio.src=parametriURL.get("foto")
var descrizionedettaglio=document.querySelector("#descrizione1")
descrizionedettaglio.innerHTML=parametriURL.get("descrizione")
var nomedettaglio=document.querySelector("#artista")
nomedettaglio.innerHTML=parametriURL.get("nomeartista")
var imgpiccola=document.getElementById("imgpiccola3")
imgpiccola.src=parametriURL.get("foto")


/*Codice riferito all'aggiunta carrello pagina dettagli*/
btnAggCarr.addEventListener("click", function(){
    pallino.classList.remove("hidden")
})

