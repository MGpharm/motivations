let vase = document.getElementById('flowerVase');
const numRows = 3; // Number of rows
const flowersPerRow = 7; // Number of flowers per row

let happinessPhrases = { 
  "joy": 7, 
  "care": 2, 
  "happiness": 10, 
  "free": 8, 
  "laughter": 5,
  "success": 6,
  "bravery": 9,
  "press forward": 6,
  "always sunshine": 9,
  "try_harder": 8,
  "don't fall": 5, 
  "upwards": 7, 
  "prosperity": 8, 
  "ingenious": 5, 
  "wonderful": 7, 
  "aspire": 6, 
  "strive": 8, 
  "conquer": 10, 
  "be free": 8, 
  "be glad": 6, 
  "thankful": 4,
  "wisdom" : 8,
  "purity" : 6,
  "think broadly" : 7,
  "think critically" : 6,
  "realise your desires" : 5,
  "help each other": 4,
  "prudence" : 6,
  "compassion" : 5,
  "be graceful" : 6,
  "tolerance" : 4,
  "seek inspiration" : 8,
  "research" : 7,
  "splendour" : 6,
  "be confident" : 5,
  "you can" : 10,
  "follow your instinct":8  
  
};

let keys = Object.keys(happinessPhrases);

let rectangleContent = [];
let clickCount = 0;
let totalScore = 0;

function randomColor() {
  const random = () => Math.floor(Math.random() * 256);
  return `rgb(${random()}, ${random()}, ${random()})`;
}

for(let r = 0; r < numRows; r++) {
  let row = document.createElement('div');
  for(let i = 0; i < flowersPerRow; i++) {
    if (keys.length == 0) {
      // all keys have been used, it's time to stop
      break;
    }

    let flower = document.createElement('button');
    flower.className = 'flower';

    let randomIndex = Math.floor(Math.random() * keys.length);
    let phrase = keys[randomIndex];
    keys.splice(randomIndex, 1); // removes the used key
    flower.setAttribute('intention', phrase);

    flower.addEventListener('click', function() {
      if (clickCount >= 3) {
        this.removeEventListener('click', arguments.callee); 
      } else {
        clickCount++;
        this.style.backgroundColor = randomColor();
        alert(this.getAttribute('intention'));
        rectangleContent.push(this.getAttribute('intention'));
        totalScore += happinessPhrases[this.getAttribute('intention')];

        if (clickCount === 3) {
          let rectangle = document.getElementById('rectangle');
          rectangle.textContent = rectangleContent.join(', ');

          let motivationScore = totalScore /3;
          let barometer = document.getElementById('motivation1');

          barometer.value = motivationScore;
          barometer.textContent = motivationScore.toFixed(2);
        }
      }
    });

    row.appendChild(flower);
  }

  vase.appendChild(row);

  if (keys.length == 0) {
    // all keys have been used, it's time to stop
    break;
  }
}

let rectangle = document.getElementById('rectangle');
let barometer = document.getElementById('motivation1');

let barometerLabel = document.getElementById('barometer-label');
barometerLabel.innerText = 'barometer of motivation';

let allowedToTryAgain = true;
tryAgain.addEventListener('click', function() {
  if (allowedToTryAgain) {
     // put code here to reset the flower selection, clear the rectangle, reset the barometer etc.

let allowedToTryAgain = true;
let vase = document.getElementById('flowerVase');
const numRows = 3; // Number of rows
const flowersPerRow = 7; // Number of flowers per row

let happinessPhrases = { 
  "joy": 7, 
  "care": 2, 
  "happiness": 10, 
  "free": 8, 
  "laughter": 5,
  "success": 6,
  "bravery": 9,
  "press forward": 6,
  "always sunshine": 9,
  "try_harder": 8,
  "don't fall": 5, 
  "upwards": 7, 
  "prosperity": 8, 
  "ingenious": 5, 
  "wonderful": 7, 
  "aspire": 6, 
  "strive": 8, 
  "conquer": 10, 
  "be free": 8, 
  "be glad": 6, 
  "thankful": 4,
  "wisdom" : 8,
  "purity" : 6,
  "think broadly" : 7,
  "think critically" : 6,
  "realise your desires" : 5,
  "help each other": 4,
  "prudence" : 6,
  "compassion" : 5,
  "be graceful" : 6,
  "tolerance" : 4,
  "seek inspiration" : 8,
  "research" : 7,
  "splendour" : 6,
  "be confident" : 5,
  "you can" : 10,
  "follow your instinct":8  
  
};

let rectangleContent = [];
let clickCount = 0;
let totalScore = 0;
  
function randomColor() {
  const random = () => Math.floor(Math.random() * 256);
  return `rgb(${random()}, ${random()}, ${random()})`;
}

for(let r = 0; r < numRows; r++) {
  let row = document.createElement('div');
  for(let i = 0; i < flowersPerRow; i++) {
    let flower = document.createElement('button');
    flower.className = 'flower';
    
    let keys = Object.keys(happinessPhrases)
    let phrase = keys[Math.floor(Math.random() * keys.length)];
    flower.setAttribute('intention', phrase);

    flower.addEventListener('click', function() {
      if (clickCount >= 3) {
        this.removeEventListener('click', arguments.callee); 
      } else {
        clickCount++;
        this.style.backgroundColor = randomColor();
        alert(this.getAttribute('intention'));
        rectangleContent.push(this.getAttribute('intention'));
        totalScore += happinessPhrases[phrase];
        
        if (clickCount === 3) {
          let rectangle = document.getElementById('rectangle');
          rectangle.textContent = rectangleContent.join(', ');

          let motivationScore = totalScore /3;
          let barometer = document.getElementById('motivation1');

          barometer.value = motivationScore;
          barometer.textContent = motivationScore.toFixed(2);
        }
      }
    });

    row.appendChild(flower);
  }
  vase.appendChild(row);
}

let rectangle = document.getElementById('rectangle');
let barometer = document.getElementById('motivation1');

let barometerLabel = document.getElementById('barometer-label');
barometerLabel.innerText = 'barometer of motivation';

     // after the actions are performed, set allowedToTryAgain to false
     allowedToTryAgain = false;
 }
});
