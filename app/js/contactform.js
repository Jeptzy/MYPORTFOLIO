

// $('#contactform').submit(function(e) {
//     var name = document.getElementById('txtname')
//     var email = document.getElementById('txtEmail')
//     var message = document.getElementById('txtmessage');
//     if(!name.value || !email.value || !message.value){
//         alert('check yu ebjntries')
//     }else{
//         $.ajax({
//             url: "https://formspree.io/f/mpzonpop",
//             method: "POST",
//             dataType: "json",
//           });

//         e.preventDefault()
//         $(this).get(0).reset()
//         alert('message sent')
//     }
// })

function clearfields(){
    document.querySelector('.txtname').value = "";
    document.querySelector('.txtEmail').value = "";
   document.querySelector('.txtmessage').value = "";
}

