const zone = document.querySelector("h3");

var addFriend = document.querySelector("#add");

var buttonText = document.querySelector('button')

//This code For When We want to Use Two Buttons
//var removeFriend = document.querySelector('#remove')
/*addFriend.addEventListener('click',function(){
    zone.innerHTML = "Friend's"
    zone.style.color = "green"
})
removeFriend.addEventListener('click', function(){
    zone.innerHTML = "Stranger"
    zone.style.color = "red"
})
*/

//Here this Code For When We Want to Use Single Button
var check = 0;

addFriend.addEventListener("click", function () {
  if (check == 0) {
    zone.innerHTML = "Friend's";
    zone.style.color = "green";
    check = 1;
    buttonText.innerHTML = "Remove Friend"
    
  } else {
    zone.innerHTML = "Stranger";
    zone.style.color = "red";
    check = 0;
    buttonText.innerHTML = "Add Friend"
  }
})