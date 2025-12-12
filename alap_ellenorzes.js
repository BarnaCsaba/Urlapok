// /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/

function ellenorAlap(){
    let nev = document.forms["alapUrlap"]["nev"].value;
    console.log(nev);


if(nev.trim() === ""){
    
    if(nevKiiratasa){
        nevKiiratasa.innerText = "A mező nem lehet üres!";
        nevKiiratasa.classList.add("hiba"); 
            
                
            
        
    }
    return false;
}

let nevFilter = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/;
if(!nevFilter.test(nev)){
    nevKiiratasa.innerText = "Érvénytelen név! Csak betűk és szóközök használhatók.";
    nevKiiratasa.classList.add("hiba");
    return false;
}

let nevKiiratasa = document.getElementById("nevEredmeny");
nevKiiratasa.innerText = "A megadott név: " + nev;;

return false;
}