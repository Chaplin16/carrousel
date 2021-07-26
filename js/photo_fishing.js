let card_fishing = document.getElementById('card_fishing'); 

fishing.forEach(function (element) {
    card_fishing.innerHTML += 
        `<img class="card mb-3" style="width:200px; height: 230px;" src="${element.attachment}" alt="${element.alt}">`
})