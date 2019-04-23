//Állapottér

const palyak = [
    
    {
        nev: 'nagy',
        m: 7,
        n: 14,
        tabla: [
            "◼◼◼◼◼◼◼◼◼◼◼◼◼◼",
            "◼▩▩▩◼↑▩▩▩✹▩▩▩◼",
            "◼▩▩▩▩↑▩▩▩▩▩▩▩◼",
            "◼▩▩▩▩⮤←←←←↺▩▩◼",
            "◼▩▩▩▩▩▩▩▩▩▩▩▩◼",
            "◼▩◼◼▩▩▩▩▩⮘▩▩▩◼",
            "◼◼◼◼◼◼◼◼◼◼◼◼◼◼",
        ],
        falak: [
            {sor: 5, oszlop: 6, oldal: "lent"}, // az 5. sor 6. cellájának alsó részén van a fal
            {sor: 5, oszlop: 6, oldal: "balra"},
        ],
        ido: 5000       // 5s van a kártyák kiválasztására
    },
    
    {
        nev: 'kicsi',
        m: 7,
        n: 8,
        tabla: [
            "◼◼◼◼◼◼◼◼",
            "◼▩✹▩▩◼▩◼",
            "◼▩⮦⮢▩▩▩◼",
            "◼▩↓⮤←←←◼",
            "◼▩↺▩▩▩▩◼",
            "◼▩▩◼▩⮘▩◼",
            "◼◼◼◼◼◼◼◼"
        ],
        falak: [
            {sor: 5, oszlop: 6, oldal: "lent"}, // az 5. sor 6. cellájának alsó részén van a fal
            {sor: 5, oszlop: 6, oldal: "balra"},
        ],
        ido: 5000       // 5s van a kártyák kiválasztására
    }
]

let pakli = ['⭢','⭢','⭢','⮆','⮆','⮆','⇶','⇶','⇶','⬏','⬏','⬏','⬎','⬎','⬎','⮌','⮌','⮌','⭠','⭠','⭠'];

function shuffellin() {
    const shuffled = pakli.sort(() => 0.5 - Math.random());
    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, 9);

    kartyakDiv = document.createElement('div')
    kartyak = document.createElement('table')
    kartyak.id = 'kartya'
    const kbdy = document.createElement('tbdy')
    const ktr = document.createElement('tr')

    for (let i = 0; i < 9; i++) {
        const kartyi = document.createElement('td')
        kartyi.classList.add('cella')
        let kartyiBody = document.createElement("BUTTON")
        kartyiBody.innerHTML = selected[i]
        kartyi.appendChild(kartyiBody)
        ktr.appendChild(kartyi)
    }
    kbdy.appendChild(ktr)
    kartyak.appendChild(kbdy)
    kartyakDiv.appendChild(kartyak)
    document.body.appendChild(kartyakDiv);

}

function valasztomenu() {

    kartyakDiv = document.createElement('div')
    kartyak = document.createElement('table')
    kartyak.id = 'kartya'
    const kbdy = document.createElement('tbdy')
    const ktr = document.createElement('tr')

    for (let i = 0; i < 5; i++) {
        const kartyi = document.createElement('td')
        kartyi.classList.add('cella')
        let kartyiBody = document.createTextNode(" ")
        kartyi.appendChild(kartyiBody)
        ktr.appendChild(kartyi)
    }
    kbdy.appendChild(ktr)
    kartyak.appendChild(kbdy)
    kartyakDiv.appendChild(kartyak)
    document.body.appendChild(kartyakDiv);


}

//Dropdown menü

/* Kattintásra vált a megjelenítés és az elrejtés között */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
  // Becsukja, ha kikattintunk onnan
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

function kicsi() {
    //document.getElementById("demo").innerHTML = "KICSI";        
    kicsipalya();
    //document.getElementById("test").innerHTML = "KICSILEFUT";
}

function nagy() {
    //document.getElementById("demo").innerHTML = "NAGY";
    nagypalya();
    //document.getElementById("test").innerHTML = "NAGYLEFUT";
}

function kicsipalya() {
    divTabla = document.createElement('div')
    lvlTabla = document.createElement('table')
    lvlTabla.id = 'level'
    const tbdy = document.createElement('tbdy')

    for (let i = 0; i < palyak[1].m; i++) {
        const tr = document.createElement('tr')
        for (let j = 0; j < palyak[1].n; j++) {
                const mezotipus = palyak[1].tabla[i].charAt(j)
                const td = genCella(mezotipus)
                tr.appendChild(td)
            }
            tbdy.appendChild(tr)
        } 
    lvlTabla.appendChild(tbdy)
    divTabla.appendChild(lvlTabla)
    document.body.appendChild(divTabla);

    valasztomenu();

    shuffellin();
}

function nagypalya() {
    divTabla = document.createElement('div')
    lvlTabla = document.createElement('table')
    lvlTabla.id = 'level'
    const tbdy = document.createElement('tbdy')

    for (let i = 0; i < palyak[0].m; i++) {
        const tr = document.createElement('tr')
        for (let j = 0; j < palyak[0].n; j++) {
                const mezotipus = palyak[0].tabla[i].charAt(j)
                const td = genCella(mezotipus)
                tr.appendChild(td)
            }
            tbdy.appendChild(tr)
        } 
    lvlTabla.appendChild(tbdy)
    divTabla.appendChild(lvlTabla)
    document.body.appendChild(divTabla);

    valasztomenu();

    shuffellin();
}


function genCella(tipus) {
    const cella = document.createElement('td');
    cella.classList.add('cella');

    let cellaBody = document.createTextNode('');
    switch(tipus) {
        case '▩':
            cella.classList.add('floor');
            break;
        case '←': case '↑': case '→':
        case '↓': case '⮠': case '⮡':
        case '⮢': case '⮣': case '⮤':
        case '⮥': case '⮦': case '⮧':
            cellaBody.textContent = tipus;
            cella.classList.add('conveyor_belt');
            break;
        case '↺': case '↻':
            cellaBody.textContent = tipus
            cella.classList.add('rotator')
            break;
        case '◼':
            cellaBody.textContent = '⬛'
            cella.classList.add('hole')
            break;
        case '✹':
            cellaBody.textContent = tipus
            cella.classList.add('damaged')
            break;
        case '⮘': case '⮙': case '⮚': case '⮛':
            cellaBody.textContent = tipus
            cella.classList.add('start')
            break;
        default:
        throw "N/A"
    }

    cella.appendChild(cellaBody)
    return cella
}