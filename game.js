let lepesek = [
    '⭢',
    '⭢',
    '⭢',
    '⮆',
    '⮆',
    '⮆',
    '⇶',
    '⇶',
    '⇶',
    '⬏',
    '⬏',
    '⬏',
    '⬎',
    '⬎',
    '⬎',
    '⮌',
    '⮌',
    '⮌',
    '⭠',
    '⭠',
    '⭠'
];

let babu = {
 irany : "balra",
 pozicio : [
     x = 0,
     y = 0
 ]
};

const palyak = [
    {
        nev: 'nagy',
        tabla: [
            "▩▩▩◼↑▩▩▩✹▩▩▩",
            "▩▩▩▩↑▩▩▩▩▩▩▩",
            "▩▩▩▩⮤←←←←↺▩▩",
            "▩▩▩▩▩▩▩▩▩▩▩▩",
            "▩◼◼▩▩▩▩▩⮘▩▩▩"
        ],
        falak: [
            {sor: 5, oszlop: 6, oldal: "lent"}, // az 5. sor 6. cellájának alsó részén van a fal
            {sor: 5, oszlop: 6, oldal: "balra"},
        ],
        ido: 10000       // 10s van a kártyák kiválasztására
    },

    {
        nev: 'kicsi',
        tabla: [
            "▩✹▩▩◼▩",
            "▩⮦⮢▩▩▩",
            "▩↓⮤←←←",
            "▩↺▩▩▩▩",
            "▩▩◼▩⮘▩"
        ],
        falak: [
            {sor: 5, oszlop: 6, oldal: "lent"}, // az 5. sor 6. cellájának alsó részén van a fal
            {sor: 5, oszlop: 6, oldal: "balra"},
        ],
        ido: 5000       // 5s van a kártyák kiválasztására
    }
];

function generalpalya(tipus) {
    var tmpString="";
    switch(tipus) {
        case '▩':
            tmpString += '<td class="mezo"></td>';
            break;
        case '←': case '↑': case '→':
        case '↓': case '⮠': case '⮡':
        case '⮢': case '⮣': case '⮤':
        case '⮥': case '⮦': case '⮧':
            tmpString += '<td class="futoszalag">'+tipus+'</td>';
            break;
        case '↺': case '↻':
            tmpString += '<td class="forgato">'+tipus+'</td>';
            break;
        case '◼':
            tmpString += '<td class="godor"></td>';
            break;
        case '✹':
            tmpString += '<td class="cel"></td>';
            break;
        case '⮘': case '⮙': case '⮚': case '⮛':
            tmpString += '<td class="start">'+tipus+'</td>';
            break;
        default:
            throw "N/A"
    }
    return tmpString;
}
function nagy() {
    var palyanagy = "";
    for (let i = 0; i < palyak[0]; i++) {
        palyanagy += "<tr>";
        for (let j = 0; j < palyak[0]; j++) {
            palyanagy += generalpalya(palyak[0].tabla[i].charAt(j));
        }
        palyanagy +="</td>";
    }
    document.getElementById("jatek_tabla").innerHTML = palyanagy;
}