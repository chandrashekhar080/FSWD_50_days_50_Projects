var card = document.querySelector(".card")

var likes = document.querySelector("i")

card.addEventListener("dblclick", function(){
likes.style.transform = 'translate(-50%, -50%) scale(2)'
likes.style.opacity = '1'
setTimeout(function(){
 likes.style.transform = 'translate(-50%, -50%) scale(0)'
},3000)
setTimeout(function(){
    likes.style.opacity = '0'
},2000)
})

