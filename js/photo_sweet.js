let card_sweet = document.getElementById('card_sweet'); 

sweet.forEach(function (element) {
    card_sweet.innerHTML += 
        `<img class="card mb-3" style="width:200px; height: 230px;" src="${element.attachment}" alt="${element.alt}">`
})