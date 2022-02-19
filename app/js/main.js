import {
  testFunction
} from './scripts/test';
testFunction();

// Random colors
let colors = ['#01d3fc', '#ffb9cb', '#025393', '#9db802', '#025b0e', '#fd7c84', '#f9de59', '#0b1003', '#490921']
let section1 = document.getElementById('section-1');

function randColor(colors) {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random]
}
section1.style.backgroundColor = randColor(colors);

// Change color on hover
let techItem = document.querySelectorAll('.choose__item');
techItem.forEach(element => {
  element.addEventListener('mouseenter', () => {
    section1.style.backgroundColor = randColor(colors);
  })
});

// Drop down list
let chooseItm = document.querySelectorAll('.choose__item');
chooseItm.forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('open');
  })
});


// Ticker


let ticker = ['drinking', 'reading', 'training', 'doing', 'sleeping', 'start', 'time', 'eating', 'pushing', 'pulling', 'drawing', 'watching', 'writing', 'breathing'];

function randTicker(ticker) {
  let random = Math.floor(Math.random() * ticker.length);
  return ticker[random]
}

let wtd = document.getElementById('footer__ticker');

setInterval(function tickerTimer() {
  return wtd.innerHTML = randTicker(ticker);
}, 500)



const array = document.querySelectorAll('.technologies__item');
const dataArray = document.querySelectorAll('.choose__item');
let arrIndex = [];

for(let i = 0; i < array.length;i++) {
  arrIndex.push(i);
}

for(let i = 0; i < dataArray.length;i++) {
  dataArray[i].addEventListener('mouseenter', filterData);
  dataArray[i].addEventListener('mouseout', deleteFilterData);
}

function filterData() {
  let dataArr = this.getAttribute('data-filter');
  let a = arrIndex.filter(inArray(dataArr));
  
  a.forEach(el => {
      array[el].classList.add('active');
  })

  array.forEach(el => {
      if(el.classList.contains('active')) {
          el.style.opacity = '1';
      }else {
          el.style.opacity = '0';
      }
  })
}

function deleteFilterData() {
  let dataArr = this.getAttribute('data-filter');
  let a = arrIndex.filter(inArray(dataArr));
  
  a.forEach(el => {
      array[el].classList.remove('active');
  })
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}













