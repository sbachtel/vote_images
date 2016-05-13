var allProducts = [];
var productNames = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];

var elImg = document.getElementById('myImage');

for(var i = 0; i < productNames.length; i++){
  var voteImages = document.createElement('img');
  voteImages.src = "images/" + productNames[i] + ".jpg";
  elImg.appendChild(voteImages);
}

function Product(name, counter){
  this.name = name;
  this.coutner = counter;


}
