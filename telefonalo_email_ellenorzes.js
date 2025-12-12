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
    return false;
}