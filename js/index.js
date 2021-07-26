let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let link4 = document.getElementById("link4");


window.onscroll = function () {
    if(document.documentElement.scrollTop > 500){
        document.getElementById("navbar").style.background = "rgb(65, 65, 65)";
        document.getElementById("link1").style.color = "white";
        document.getElementById("link2").style.color = "white";
        document.getElementById("link3").style.color = "white";
        document.getElementById("link4").style.color = "white";

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
            document.getElementById("link1").style.color = "white";
        });
        link2.addEventListener("mouseout", function() {
            document.getElementById("link2").style.color ="white";
        });
        link3.addEventListener("mouseout", function() {
            document.getElementById("link3").style.color = "white";
        });
        link4.addEventListener("mouseout", function() {
            document.getElementById("link4").style.color = "white";
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
            document.getElementById("link1").style.color = "brown";
        });
    
        link2.addEventListener("mouseover", function() {
            document.getElementById("link2").style.color = "brown";
        });
        link3.addEventListener("mouseover", function() {
            document.getElementById("link3").style.color = "brown";
        });
        link4.addEventListener("mouseover", function() {
            document.getElementById("link4").style.color = "brown";
        });
        

        link1.addEventListener("mouseout", function() {
            document.getElementById("link1").style.color = "rgb(70, 62, 59)";
        });
        link2.addEventListener("mouseout", function() {
            document.getElementById("link2").style.color = "rgb(70, 62, 59)";
        });
        link3.addEventListener("mouseout", function() {
            document.getElementById("link3").style.color ="rgb(70, 62, 59)";
        });
        link4.addEventListener("mouseout", function() {
            document.getElementById("link4").style.color = "rgb(70, 62, 59)";
        });
    }
}

document.getElementById("card1").addEventListener("mouseout", function() {
    document.getElementById("link_card1").style.display = "none";
    document.getElementById("img_card1").style.filter ="brightness(100%)";
});

document.getElementById("card2").addEventListener("mouseout", function() {
    document.getElementById("link_card2").style.display = "none";
    document.getElementById("img_card2").style.filter ="brightness(100%)";
});

document.getElementById("card3").addEventListener("mouseout", function() {
    document.getElementById("link_card3").style.display = "none";
    document.getElementById("img_card3").style.filter ="brightness(100%)";
});

document.getElementById("card4").addEventListener("mouseout", function() {
    document.getElementById("link_card4").style.display = "none";
    document.getElementById("img_card4").style.filter ="brightness(100%)";
});

document.getElementById("card1").addEventListener("mouseover", function() {
    document.getElementById("link_card1").style.display = "block";
    document.getElementById("img_card1").style.filter ="brightness(50%)";
});

document.getElementById("card2").addEventListener("mouseover", function() {
    document.getElementById("link_card2").style.display = "block";
    document.getElementById("img_card2").style.filter ="brightness(50%)";
});

document.getElementById("card3").addEventListener("mouseover", function() {
    document.getElementById("link_card3").style.display = "block";
    document.getElementById("img_card3").style.filter ="brightness(50%)";
});

document.getElementById("card4").addEventListener("mouseover", function() {
    document.getElementById("link_card4").style.display = "block";
    document.getElementById("img_card4").style.filter ="brightness(50%)";
});