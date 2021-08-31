let card_carousel = document.getElementById('card_carousel'); 

function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(d) {
        element.innerHTML += 
        `<div class="card-img"><img src="${d.attachment}" alt="${d.alt}" class="img-fluid"></div>`;
    });
    $(element).slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 5,
        arrows: true,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3.5
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2.5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
}

carousel(".firstCarousel", carousel_photo);
carousel(".secondCarousel", fishing);
carousel(".thirdCarousel", sweet)
carousel(".fourCarousel", waffles)
