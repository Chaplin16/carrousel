window.onscroll = function () {
    if(document.documentElement.scrollTop > 500){
        document.getElementById("navbar").style.background = "rgb(65, 65, 65)";
        document.getElementById("link1").style.color = "white";
        document.getElementById("link2").style.color = "white";
        document.getElementById("link3").style.color = "white";
        document.getElementById("link4").style.color = "white";
    }
    else{
        document.getElementById("navbar").style.background = "white";
        document.getElementById("title").style.color = "rgb(228, 172, 126)";
        document.getElementById("link1").style.color = "rgb(70, 62, 59)";
        document.getElementById("link2").style.color = "rgb(70, 62, 59)";
        document.getElementById("link3").style.color = "rgb(70, 62, 59)";
        document.getElementById("link4").style.color = "rgb(70, 62, 59)";
    }
}