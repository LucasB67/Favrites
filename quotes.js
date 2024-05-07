let quotes = [
    {
        "id":1,
        "author": "Rocky Balboa",
        "title" : "Citation de Rocky",
        "content": "Ce qui compte, ce n'est pas la force des coups que tu donnes. Ce qui compte, ce n'est pas la force des coups que tu donnes. Ce qui compte, ce n'est pas la force des coups que tu donnes."
    },

    {
        "id":2,
        "author": "Tyrion Lannister",
        "title" : "Citation de Tyrion ",
        "content": "Ce qui compte, ce n'est pas la force des coups que tu donnes."
    },

    {
        "id":3,
        "author": "Tyrion Balboa",
        "title" : "Citation de Tyrion Balboa",
        "content": "D'accord."
    },

    {
        "id":4,
        "author": "Tyrion Lannister",
        "title" : "Citation de Tyrion ",
        "content": "Ce qui compte, ce n'est pas la force."
    }
]


favoritesQuotes = []
savedQuotes = localStorage.getItem("favoritesQuotesKey")
if (savedQuotes == null){
    savedQuotes = ""
}

for (let i in savedQuotes){
    favoritesQuotes.push(quotes[Number(savedQuotes[i])-1])
}
console.log(favoritesQuotes)
    

const quotesList    = document.getElementById("quotesList")
const favoritesList = document.getElementById("favoritesList")
const quoteMold     = document.getElementById("quoteMold")

fillQuotesDiv(quotesList, quotes)


function fillQuotesDiv(quotesDiv, quotesArray){

    for (let i in quotesArray){
        let newQuote = quoteMold.cloneNode(true)
        newQuote.id = quotesArray[i]["id"].toString()
        newQuote.innerHTML = '<p class = text>"' + quotesArray[i]["content"] + '"</p><i class="fa fa-heart heart"></i><p class = author>' + quotesArray[i]["author"] + "</p>"
        for (let j in savedQuotes){
            if (newQuote.id == savedQuotes[j]){
                newQuote.classList.add("favorite")
            }
        }
        newQuote.addEventListener("click", function(){

            let doublon = false
            for (let j in favoritesQuotes){
                if (favoritesQuotes[j]["id"] == newQuote.getAttribute('id')){
                    favoritesQuotes.splice(j, 1)
                    savedQuotes = savedQuotes.replaceAll(newQuote.getAttribute('id'), "")
                    newQuote.classList.remove("favorite")
                    doublon = true
                    break
                }
            }
            if (!doublon){
                favoritesQuotes.push(quotesArray[Number(newQuote.getAttribute('id'))-1])
                savedQuotes += newQuote.getAttribute('id')
                newQuote.classList.add("favorite")
            }

            console.log(savedQuotes)
            localStorage.setItem("favoritesQuotesKey", savedQuotes)
        })
        
        quotesDiv.appendChild(newQuote)
      }
}

