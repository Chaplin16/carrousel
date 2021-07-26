let card_carousel = document.getElementById('card_carousel'); 

carousel.forEach(function (element) {
    card_carousel.innerHTML += 
        `<img class="card mb-3" style="width:200px; height: 230px;" src="${element.attachment}" alt="${element.alt}">`
})