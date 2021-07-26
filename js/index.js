let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let link4 = document.getElementById("link4");

let card1 = document.getElementById("card1");
let card2 =document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 =document.getElementById("card4");

let link_card1 = document.getElementById("link_card1");
let link_card2 = document.getElementById("link_card2");
let link_card3 = document.getElementById("link_card3");
let link_card4 = document.getElementById("link_card4");

let img_card1 =document.getElementById("img_card1");
let img_card2 =document.getElementById("img_card2");
let img_card3 =document.getElementById("img_card3");
let img_card4 =document.getElementById("img_card4");

let navbar = document.getElementById("navbar");

window.onscroll = function () {
    if(document.documentElement.scrollTop > 500){
        navbar.style.background = "rgb(65, 65, 65)";
        link1.style.color = "white";
        link2.style.color = "white";
        link3.style.color = "white";
        link4.style.color = "white";

        link1.addEventListener("mouseover", function() {
            document.getElementById("link1").style.color = "rgb(228, 172, 126)";
        });
    
        link2.addEventListener("mouseover", function() {
            document.getElementById("link2").style.color = "rgb(228, 172, 126)";
        });
        link3.addEventListener("mouseover", function() {
            document.getElementById("link3").style.color = "rgb(228, 172, 126)";
        });
        link4.addEventListener("mouseover", function() {
            document.getElementById("link4").style.color = "rgb(228, 172, 126)";
        });

        link1.addEventListener("mouseout", function() {
            link1.style.color = "white";
        });
        link2.addEventListener("mouseout", function() {
            link2.style.color ="white";
        });
        link3.addEventListener("mouseout", function() {
            link3.style.color = "white";
        });
        link4.addEventListener("mouseout", function() {
            link4.style.color = "white";
        });
    }
    else{
        document.getElementById("navbar").style.background = "white";
        document.getElementById("title").style.color = "rgb(228, 172, 126)";
        link1.style.color = "rgb(70, 62, 59)";
        link2.style.color = "rgb(70, 62, 59)";
        link3.style.color = "rgb(70, 62, 59)";
        link4.style.color = "rgb(70, 62, 59)";

        link1.addEventListener("mouseover", function() {
            link1.style.color = "brown";
        });
    
        link2.addEventListener("mouseover", function() {
            link2.style.color = "brown";
        });
        link3.addEventListener("mouseover", function() {
            link3.style.color = "brown";
        });
        link4.addEventListener("mouseover", function() {
            link4.style.color = "brown";
        });
        

        link1.addEventListener("mouseout", function() {
            link1.style.color = "rgb(70, 62, 59)";
        });
        link2.addEventListener("mouseout", function() {
            link2.style.color = "rgb(70, 62, 59)";
        });
        link3.addEventListener("mouseout", function() {
            link3.style.color ="rgb(70, 62, 59)";
        });
        link4.addEventListener("mouseout", function() {
            link4.style.color = "rgb(70, 62, 59)";
        });
    }
}

card1.addEventListener("mouseout", function() {
    link_card1.style.display = "none";
    img_card1.style.filter ="brightness(100%)";
});

card2.addEventListener("mouseout", function() {
    link_card2.style.display = "none";
    img_card2.style.filter ="brightness(100%)";
});

card3.addEventListener("mouseout", function() {
    link_card3.style.display = "none";
    img_card3.style.filter ="brightness(100%)";
});

card4.addEventListener("mouseout", function() {
    link_card4.style.display = "none";
    img_card4.style.filter ="brightness(100%)";
});

card1.addEventListener("mouseover", function() {
    link_card1.style.display = "block";
    img_card1.style.filter ="brightness(50%)";
});

card2.addEventListener("mouseover", function() {
    link_card2.style.display = "block";
    img_card2.style.filter ="brightness(50%)";
});

card3.addEventListener("mouseover", function() {
    link_card3.style.display = "block";
    img_card3.style.filter ="brightness(50%)";
});

card4.addEventListener("mouseover", function() {
    link_card4.style.display = "block";
    img_card4.style.filter ="brightness(50%)";
});