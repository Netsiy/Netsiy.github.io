// let myImage = document.querySelector('img');
let  myImage = document.getElementById('AA');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === './images/netsiy.jpg') {
      myImage.setAttribute('src', './images/netsiyee.jpg');
    } else {
      myImage.setAttribute('src', './images/netsiy.jpg');
    }
}