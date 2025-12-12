function ellenor() {
let telefon = document.forms["urlap"]["tel"].value;
let email = document.forms["urlap"]["mail"].value;

let telError = telefonError(telefon);

}

function telefonError(telefon) {
    let newString = strng.replace(/[\(\)\.\-\ ]/g, '');
    let filter = /^\d+$/;
    if (!filter.test(newString)) {
        error = "Érvénytelen telefonszám! Csak számok használhatók.";
    }
    return error;
}


function ellenor(){
    let telefon = document.forms["urlap"]["tel"].value;
    let email = document.forms["urlap"]["mail"].value;

    let telError = telefonError(telefon);
    if(telError){
        alert(telError);
        return false;
    }
    else{
        let telefonEredmeny = document.getElementById("telEredmeny");
        telefonEredmeny.innerText = "A megadott telefonszám érvényes: " + telefon;
        return false;
    }
}