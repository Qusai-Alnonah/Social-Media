// Welcome The User
alert('Welcome'); 
var userName = prompt('what is your name? ');
alert('Welcome ' + userName);
var NameSocial = prompt("What is your favorite Social Media Facebook ,Twitter,Github  ")
if(NameSocial==='Facebook'){
    document.write('<img scr="https://www.facebook.com/images/fb_icon_325x325.png"/>')
}else if (NameSocial==='Twitter'){
    document.write('<img scr = "https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/300px-Twitter_Bird.svg.png"/>')
}else if(NameSocial==='Github'){
    document.write('<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFequSxunU1CSZiEE0WzIKTlMj7WqC_w3Hg&usqp=CAU"/>')
}else {
    alert('You Are Welcome')
}