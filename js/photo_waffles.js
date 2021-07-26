let card_waffles = document.getElementById('card_waffles'); 

waffles.forEach(function (element) {
    card_waffles.innerHTML += 
        `<img class="card mb-3" style="width:200px; height: 230px;" src="${element.attachment}" alt="${element.alt}">`
})