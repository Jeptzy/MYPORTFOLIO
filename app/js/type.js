var x = 0;
var textType = "Hi i am Jeff a self taught Front end Web Developer."
var container = document.getElementById('typing');

function animatetype(){
    if(x< textType.length){
        container.innerHTML += textType.charAt(x);
        x++;
        setTimeout(animatetype, 30);
    }
}
animatetype();