// /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/

function ellenorAlap(){
    let nev = document.forms["alapUrlap"]["nev"].value;
    console.log(nev);


if(nev.trim() === ""){
    alert("A név mező nem lehet üres!");
    if(nevKiiratasa){
        nevKiiratasa.innerText = "A mező nem lehet üres!";
    }
    return false;
}

let nevFilter = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/;
if(!nevFilter.test(nev)){
    alert("A név csak betűket és szóközöket tartalmazhat!");
    return false;
}

let nevKiiratasa = document.getElementById("nevEredmeny");
nevKiiratasa.innerText = "A megadott név: " + nev;;

return false;
}