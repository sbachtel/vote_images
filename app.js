 var allProducts = [];
 var productNames = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];

function Product(name, path) {//constructor
  this.name = name;
  this.path = path;
  this.tally = 0;
  allProducts.push(this);//push images to allProducts array
   }

(function imageAlbum(){ //create an iffy
  for(var i = 0; i < productNames.length; i++){
    new Product(productNames[i], "images/" + productNames[i] + ".jpg");
  }
 })();


   var productRank = { //<- object literal
     //assign object to null except total clicks
   //total clicks
   //obj left, right, mid: null
    // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
    // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

     getRandomIndex: function() {
       return Math.floor(Math.random() * productNames.length);
       // TODO: Hmm... what's going to happen here?
     },

    displayImages: function() {
      // TODO: Hmm... what's going to happen here?
      //product rank object put all procduts and get random into the product
      //make an if statement to make sure they are not the same images.

      //start pluging in obj elem into html left, right, center elemnts
      //need path(scr) and name (id)
    },

    tallyClicks: function(elementId) {
      // TODO: Hmm... what's going to happen here?

      //when call tallyClicks you need and id of an elementId
      //need for loop and will refrence productRank
    },

    displayResults: function() {
      // TODO: Hmm... what's going to happen here?
  //create ul list
  //create for loop of allProducts
  //in the for loop create li element
  // a var which will add allProducts array and .name to 'has' allProducts array .tally +'voteImages'
  //then make new str with charset and slice
  //appent the str to the li
    },

    showButton: function() {
      // TODO: Hmm... what's going to happen here?
    },

    onClick: function() {
      // TODO: Hmm... what's going to happen here?
      //if statement evnt targ id of the productRank leftobj.name or rightobj or centerobj
      //productRank tallyclikc event target and id
      //antoher if statement inside the first if statement totalclicks %15 === 0
      //remove eventlisterner(cick,productRank.onClick);
      //products displayImages()
      //else with about warning click an image
    }
  };

// productRank.imageEls.addEventListener('click', productRank.onClick);
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
