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
        slidesToShow: 4,
        arrows: true,
        adaptiveHeight: true,
        speed:1300,
        autoplaySpeed:1200,
        autoplay: true,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2.4
                }
            },
            {
                breakpoint: 880,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2.2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1.8
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1.60
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
