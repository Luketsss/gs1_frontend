const imgs = document.getElementById("imgcarrossel");
const img = document.querySelectorAll("#imgcarrossel img")

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 800}px)`
}

setInterval(carrossel, 2500)