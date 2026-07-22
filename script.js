// ===== BAZA POJAZDÓW =====

const baza = {

    "36WEa": {
        mo: 135,
        mhr: 217,
        pg: 0.50,
        spr: 1.00
    },

    "48WEc": {
        mo: 201,
        mhr: 358,
        pg: 0.50,
        spr: 0.95
    },

    "EN57": {
        mo: 126,
        mhr: 210,
        pg: 0.50,
        spr: 0.95
    },

    "ET22": {
        mo: 120,
        mhr: 300,
        pg: 0.50,
        spr: 1.00
    }

};


// ===== ELEMENTY =====

const pojazd = document.getElementById("pojazd");

const mo = document.getElementById("mo");
const mhr = document.getElementById("mhr");
const pg = document.getElementById("pg");
const spr = document.getElementById("spr");
const pw = document.getElementById("pw");


const formularz = document.getElementById("formularz");
const wyniki = document.getElementById("wyniki");


const btnOblicz = document.getElementById("obliczBtn");
const btnNowe = document.getElementById("powrotBtn");


// ===== LISTA POJAZDÓW =====

for (let nazwa in baza) {

    let option = document.createElement("option");

    option.value = nazwa;
    option.textContent = nazwa;

    pojazd.appendChild(option);

}


// ustaw pierwszy pojazd

pojazd.value = Object.keys(baza)[0];

zaladujPojazd();


// ===== ZMIANA POJAZDU =====

pojazd.addEventListener("change", zaladujPojazd);


function zaladujPojazd(){

    let p = baza[pojazd.value];

    mo.value = p.mo;
    mhr.value = p.mhr;
    pg.value = p.pg;
    spr.value = p.spr;

}



// ===== OBLICZ =====

btnOblicz.addEventListener("click", function(){


    let Mo = Number(mo.value);
    let Mhr = Number(mhr.value);
    let Pw = Number(pw.value);
    let PG = Number(pg.value);
    let SPR = Number(spr.value);



    if(!Pw || Pw <= 0){

        alert("Podaj Pw [%]");

        return;

    }



    let Mos = Mo;

    let Mhw = (Mo * Pw) / 100;

    let PR = (Mhr / Mo) * 100;



    document.getElementById("mos").textContent =
        Mos.toFixed(1)+" t";


    document.getElementById("moW").textContent =
        Mo.toFixed(1)+" t";


    document.getElementById("mhw").textContent =
        Mhw.toFixed(1)+" t";


    document.getElementById("mhrW").textContent =
        Mhr.toFixed(1)+" t";


    document.getElementById("pwW").textContent =
        Pw.toFixed(1)+" %";


    document.getElementById("pr").textContent =
        PR.toFixed(1)+" %";


    document.getElementById("pgW").textContent =
        PG.toFixed(2)+" MPa";


    document.getElementById("sprW").textContent =
        SPR.toFixed(2)+" MPa";



    let status=document.getElementById("status");


    if(Mhr >= Mhw){

        status.className="pozytywna";
        status.innerHTML="✅ PRÓBA POZYTYWNA";

    }

    else{

        status.className="negatywna";
        status.innerHTML="❌ PRÓBA NEGATYWNA";

    }



    formularz.style.display="none";

    wyniki.style.display="block";


});




// ===== POWRÓT =====

btnNowe.addEventListener("click", function(){

    wyniki.style.display="none";

    formularz.style.display="block";

});
