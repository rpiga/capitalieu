const countryArray = [
    {
        name: "Albania",
        capital: "Tirana",
        flag: "F_Albania.png",
        map: "EU_Albania.png",
    },
    {
        name: "Andorra",
        capital: "Andorra La Vella",
        flag: "F_Andorra.png",
        map: "EU_Andorra.png",
    },
    {
        name: "Austria",
        capital: "Vienna",
        flag: "F_Austria.png",
        map: "EU_Austria.png",
    },
    {
        name: "Belgio",
        capital: "Bruxelles",
        flag: "F_Belgio.png",
        map: "EU_Belgio.png",
    },
    {
        name: "Bielorussia",
        capital: "Minsk",
        flag: "F_Bielorussia.png",
        map: "EU_Bielorussia.png",
    },
    {
        name: "Bosnia ed Erzegovina",
        capital: "Sarajevo",
        flag: "F_Bosnia Erzegovina.png",
        map: "EU_Bosnia Herzegovina.png",
    },
    {
        name: "Bulgaria",
        capital: "Sofia",
        flag: "F_Bulgaria.png",
        map: "EU_Bulgaria.png",
    },
    {
        name: "Cipro",
        capital: "Nicosia",
        flag: "F_Cipro.png",
        map: "EU_Cipro.png",
    },
    {
        name: "Repubblica Ceca",
        capital: "Praga",
        flag: "F_Rep Ceca.png",
        map: "EU_Rep Ceca.png",
    },
    {
        name: "Croazia",
        capital: "Zagabria",
        flag: "F_Croazia.png",
        map: "EU_Croazia.png",
    },
    {
        name: "Danimarca",
        capital: "Copenaghen",
        flag: "F_Danimarca.png",
        map: "EU_Danimarca.png",
    },
    {
        name: "Estonia",
        capital: "Tallinn",
        flag: "F_Estonia.png",
        map: "EU_Estonia.png",
    },
    {
        name: "Finlandia",
        capital: "Helsinki",
        flag: "F_Finlandia.png",
        map: "EU_Finlandia.png",
    },
    {
        name: "Francia",
        capital: "Parigi",
        flag: "F_Francia.png",
        map: "EU_Francia.png",
    },
    {
        name: "Germania",
        capital: "Berlino",
        flag: "F_Germania.png",
        map: "EU_Germania.png",
    },
    {
        name: "Grecia",
        capital: "Atene",
        flag: "F_Grecia.png",
        map: "EU_Grecia.png",
    },
    {
        name: "Irlanda",
        capital: "Dublino",
        flag: "F_Irlanda.png",
        map: "EU_Irlanda.png",
    },
    {
        name: "Islanda",
        capital: "Reykjavik",
        flag: "F_Islanda.png",
        map: "EU_Islanda.png",
    },
    {
        name: "Italia",
        capital: "Roma",
        flag: "F_Italia.png",
        map: "EU_Italia.png",
    },
    {
        name: "Kosovo",
        capital: "Pristina",
        flag: "F_Kosovo.png",
        map: "EU_Kosovo.png",
    },
    {
        name: "Lettonia",
        capital: "Riga",
        flag: "F_Lettonia.png",
        map: "EU_Lettonia.png",
    },
    {
        name: "Liechtenstein",
        capital: "Vaduz",
        flag: "F_Liechtenstein.png",
        map: "EU_Liechtenstein.png",
    },
    {
        name: "Lituania",
        capital: "Vilnius",
        flag: "F_Lituania.png",
        map: "EU_Lituania.png",
    },
    {
        name: "Lussemburgo",
        capital: "Lussemburgo",
        flag: "F_Lusemburgo.png",
        map: "EU_Lussemburgo.png",
    },
    {
        name: "Macedonia",
        capital: "Skopje",
        flag: "F_Macedonia.png",
        map: "EU_Macedonia.png",
    },
    {
        name: "Malta",
        capital: "La Valletta",
        flag: "F_Malta.png",
        map: "EU_Malta.png",
    },
    {
        name: "Moldavia",
        capital: "Chisinau",
        flag: "F_Moldavia.png",
        map: "EU_Moldavia.png",
    },
    {
        name: "Monaco",
        capital: "Monaco",
        flag: "F_Monaco.png",
        map: "EU_Monaco.png",
    },
    {
        name: "Montenegro",
        capital: "Podgorica",
        flag: "F_Montenegro.png",
        map: "EU_Montenegro.png",
    },
    {
        name: "Norvegia",
        capital: "Oslo",
        flag: "F_Norvegia.png",
        map: "EU_Norvegia.png",
    },
    {
        name: "Paesi Bassi",
        capital: "Amsterdam",
        flag: "F_Paesi Bassi.png",
        map: "EU_Paesi Bassi.png",
    },
    {
        name: "Polonia",
        capital: "Varsavia",
        flag: "F_Polonia.png",
        map: "EU_Polonia.png",
    },
    {
        name: "Portogallo",
        capital: "Lisbona",
        flag: "F_Portogallo.png",
        map: "EU_Portogallo.png",
    },
    {
        name: "Regno Unito",
        capital: "Londra",
        flag: "F_Regno Unito.png",
        map: "EU_Regno Unito.png",
    },
    {
        name: "Romania",
        capital: "Bucarest",
        flag: "F_Romania.png",
        map: "EU_Romania.png",
    },
    {
        name: "Russia",
        capital: "Mosca",
        flag: "F_Russia.png",
        map: "EU_Russia.png",
    },
    {
        name: "San Marino",
        capital: "San Marino",
        flag: "F_San Marino.png",
        map: "EU_San Marino.png",
    },
    {
        name: "Serbia",
        capital: "Belgrado",
        flag: "F_Serbia.png",
        map: "EU_Serbia.png",
    },
    {
        name: "Slovacchia",
        capital: "Bratislava",
        flag: "F_Slovacchia.png",
        map: "EU_Slovacchia.png",
    },
    {
        name: "Slovenia",
        capital: "Lubiana",
        flag: "F_Slovenia.png",
        map: "EU_Slovenia.png",
    },
    {
        name: "Spagna",
        capital: "Madrid",
        flag: "F_Spagna.png",
        map: "EU_Spagna.png",
    },
    {
        name: "Svezia",
        capital: "Stoccolma",
        flag: "F_Svezia.png",
        map: "EU_Svezia.png",
    },
    {
        name: "Svizzera",
        capital: "Berna",
        flag: "F_Svizzera.png",
        map: "EU_Svizzera.png",
    },
    {
        name: "Turchia",
        capital: "Ankara",
        flag: "F_Turchia.png",
        map: "EU_Turchia.png",
    },
    {
        name: "Ucraina",
        capital: "Kiev",
        flag: "F_Ukraina.png",
        map: "EU_Ukraina.png",
    },
    {
        name: "Ungheria",
        capital: "Budapest",
        flag: "F_Ungheria.png",
        map: "EU_Ungheria.png",
    },
    {
        name: "Citta del Vaticano",
        capital: "Citta del Vaticano",
        flag: "F_Citta del Vaticano.png",
        map: "EU_Citta del Vaticano.png",
    },
   
]

countryArray.sort(() => 0.5 - Math.random())

console.log(countryArray)

const gridDisplay = document.querySelector('#grid')
const mapArea = document.querySelector('#mapArea')
const scoreDisplay = document.querySelector('#result')

points = 0
totals = 0

// inizializza Score

function updateScore() {
    scoreDisplay.innerHTML = points + ' / ' + totals
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function determinaArticolo(item) {
    eccezioniArray = ['Andorra', 'Monaco', 'San Marino', 'Cipro', 'Citta del Vaticano']
    if (eccezioniArray.indexOf(item) !== -1) {
        return "di"
    } 
    
    _return = "del"

    vocaliArray = ["A", "E", "I", "O", "U"]

    switch(item.slice(-1)) {
        case "a": _return = "della"
            if ( vocaliArray.indexOf(item[0]) !== -1 ) {
                _return = "dell'"
            }
            break;
        case "i": _return = "dei"
            break;
    }

    return _return
}

function testType(item) {
    const randomType = 0 //randomIntFromInterval(0,2)
    switch(randomType) {
        case 0:
            articolo = determinaArticolo(item['name'])
            return {
                type: 0,
                question: `Qual è la capitale ${articolo} <span style='font-weight: bold;'>${item['name']}</span> <img src='./assets/${item['flag']}' style='border:1px solid #ccc' /> ?`,
                answer: item['capital']
                }
            break;
        case 1:
            return {
                type: 1,
                question: `Quale Stato ha come capitale ${item['capital']}?`,
                answer: item['name']
                }
            break;
        case 2:
            return {
                type: 2,
            }
            break;
    }
}


function gameMode0(item) {
    card.setAttribute('src', './assets/' + item['map'])
    questionArea.innerHTML = `Qual è la capitale ${articolo} <span style='font-weight: bold;'>${item['name']}</span> <img src='./assets/${item['flag']}' style='border:1px solid #ccc' /> ?`

    feedbackArea.createElement('button')
}

for (const element of countryArray) {
    console.log(determinaArticolo(element['name']) + " " + element['name'])
    totals++
    updateScore()

    if(mapArea.firstChild){
        mapArea.removeChild(mapArea.firstChild)
    }
    const card = document.createElement('img')
//    card.setAttribute('src', './assets/' + element['map'])
    card.style['width'] = '100%'
//    card.style['height'] = '50%'

    mapArea.appendChild(card)
    questionTemplate = testType(element)

    switch(questionTemplate['type'])
    {
        case 0:
            card.setAttribute('src', './assets/' + element['map'])
            questionArea.innerHTML = questionTemplate['question']
        break;
        case 1:
            card.setAttribute('src', './assets/EU_Europa hp.png')
            questionArea.innerHTML = questionTemplate['question']
        break;
        case 2:
            card.setAttribute('src', './assets/' + element['map'])
        break;
    }
}