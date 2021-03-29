

var userName = prompt("Pleas enter your username");
function enterUsername (userName) {
    
while (userName !== "Qusai-Alnonah") {
var userName = prompt("Pleas enter correct username");

}
    alert('Username is Right' );


}
enterUsername(userName); 

var Password = prompt("Pleas enter your Password");
function enterPassword(Password) {
    

 while (Password !== "123456") {
     var Password = prompt("The Password you inter is wrong reinter it pleas");
 }
 
 alert('PASSWORD IS CORRECT ');
}
enterPassword(Password);

var nameSocial = prompt("What is your favorite Social Media Facebook ,Twitter,Github ,Youtube ");
var repPhoto = prompt("how many time you wont to see the photo for your favarite site");

function repetImage(repetPhoto) {
    

for (var i = 0; i <= repPhoto; i++) {
    
   
    if (nameSocial === 'Facebook') {
        document.write('<img src ="https://www.facebook.com/images/fb_icon_325x325.png"/>');
    } else if (nameSocial === 'Twitter') {
        document.write('<img src = "https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/300px-Twitter_Bird.svg.png"/>');
    } else if (nameSocial === 'Github') {
        document.write('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFequSxunU1CSZiEE0WzIKTlMj7WqC_w3Hg&usqp=CAU"/>');
    } else if (nameSocial === 'Youtube') {
        document.write('<img src ="https://pbs.twimg.com/profile_images/954305257898561536/k2qB-Igk_400x400.jpg"/>');
    }
    else {
        alert('You Are Welcome');
    }
}
alert('repet is loading');
}
repetImage(repPhoto);
