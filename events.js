
/********  Variablen **********/

/*********** Änderung in View-Schicht ************/

// Modul: Umschaltung der Klassennamen | Test:
//switchClassName("night");
//switchClassName("day");
function switchClassName(modeStr)
{
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;
}

/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}