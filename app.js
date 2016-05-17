 var allProducts = [];
 var productNames = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  allProducts.push(this);
   }

(function imageAlbum(){
  for(var i = 0; i < productNames.length; i++){
    new Product(productNames[i], "images/" + productNames[i] + ".jpg");
  }
 })();

var productRank = {
  totalClicks: 0,
  leftObj: null,
  midObj: null,
  rightObj: null,
  leftEls: document.getElementById('img1'),
  midEls: document.getElementById('img2'),
  rightEls: document.getElementById('img3'),
  imageEls: document.getElementById('images'),
  resultsEl: document.getElementById('results'),
  resultsButton: document.getElementById('showResults'),
  resetButton: document.getElementById('reset'),

    // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
    // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function() {
    return Math.floor(Math.random() * productNames.length);
       // TODO: Hmm... what's going to happen here?
  },

  displayImages: function() {
    this.leftObj = allProducts[this.getRandomIndex()];
    this.midObj = allProducts[this.getRandomIndex()];
    this.rightObj = allProducts[this.getRandomIndex()];

      if(this.leftObj === this.midObj || this.leftObj === this.rightObj || this.rightObj === this.midObj){
      this.displayImages();
    }
    this.leftEls.src = this.leftObj.path;
    this.leftEls.id = this.leftObj.name;

    this.midEls.src = this.midObj.path;
    this.midEls.id = this.midObj.name;

    this.rightEls.src = this.rightObj.path;
    this.rightEls.id = this.rightObj.name;

  },

  tallyClicks: function(elId) {
    for (var i in allProducts) {
      if (elId === allProducts[name].name) {
        allProducts[i].tally += 1;
        this.totalClicks += 1;
        console.log(allProducts[name].name + ' has' + allProducts[name].tally + ' clicks');
        console.log('Total click so far is ' + productRank.totalClicks);
      }
    }
  },

  displayResults: function() {
    var ulEl = document.createElement('ul');
    for(var i in allProducts){
      var liElOne = document.createElement('li');
      var str = allProducts[i].name + ' has ' + allProducts[i].tally + ' votes';
      liElOne.textContent = (str);
      ulEl.appendChild(liElOne);
    }
    var liElTwo = document.createElement('li');
    liElTwo.textContent = 'Total Clicks: ' + productRank.totalClicks;
    ulEl.appendChild(liElTwo);
    this.resultsEl.appendChild(liElOne);
  },

  showButton: function() {
      this.resultsButton.hidden = false;
      this.resultsButton.addEventListener('click', function(){
        productRank.resultsButton.hidden = false;
        productRank.resultsButton.hidden = true;
        productRank.displayResults();
        productRank.resetButton.addEventListener('click', function(){
            productRank.resultsButton.hidden = true;
            location.reload();
        })
      });
  },

  onClick: function() {
    if (event.target.id === productRank.leftObj.name || event.target.id === productRank.midObj.name || event.target.id === productRank.rightObj.name)
      productRank.tallyClicks[event.target.id];

      if (productRank.totalClicks % 15 === 0){
        productRank.imageEls.removeEventListener('click', productRank.onClick);
        productRank.showButton();
      }
      productRank.displayImages();
  }
};

 productRank.imageEls.addEventListener('click', productRank.onClick);
 productRank.displayImages();




//chart.js
/*var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
bar Chart
set data
one data set object
clear display results from n13 put this chart in viewresults to display
name of images in labes and data associtated with arrays and arrays of product names.
craeat object and add it to the ojb arrays*/
