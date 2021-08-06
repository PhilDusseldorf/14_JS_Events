
/********  Variablen **********/
const btn = document.getElementById("trigBtn");
let status = true;

/*********** Business-Logic | Toggle ************/

// Modul: Toggle status
function toggleStatus()
{
    status = !status;
    updateView();
}

function updateView()
{
    if (!status) 
    {
        switchClassName("night");
        switchBtnTxt("day");
    } 
    else 
    {
        switchClassName("day");
        switchBtnTxt("night");
    }
}

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

// Modul: Button-Funktion | Test:
//switchBtnTxt("night");
//switchBtnTxt("day");
function switchBtnTxt(modeStr)
{
    btn.innerHTML = modeStr;
}

/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}