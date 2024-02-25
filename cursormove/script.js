var main = document.querySelector('.main')

var crsor = document.querySelector('#cursor')


main.addEventListener("mousemove", function(dets){
    crsor.style.left = dets.x+"px"
    crsor.style.top = dets.y+"px"
})