/* Mobile Header Open Bar */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

(function() {
    "use strict";
  
    const backdrop = document.querySelector('#modal-backdrop');
    document.addEventListener('click', modalHandler);
  
    function modalHandler(evt) {
      const modalBtnOpen = evt.target.closest('.js-modal');
      if (modalBtnOpen) { // open btn click
        const modalSelector = modalBtnOpen.dataset.modal;
        showModal(document.querySelector(modalSelector));
      }
  
      const modalBtnClose = evt.target.closest('.modal-close');
      if (modalBtnClose) { // close btn click
        evt.preventDefault();
        hideModal(modalBtnClose.closest('.modal-window'));
      }
  
      if (evt.target.matches('#modal-backdrop')) { // backdrop click
        hideModal(document.querySelector('.modal-window.show'));
      }
    }
  
    function showModal(modalElem) {
      modalElem.classList.add('show');
      backdrop.classList.remove('hidden');
    }
  
    function hideModal(modalElem) {
      modalElem.classList.remove('show');
      backdrop.classList.add('hidden');
    }
})();


// let qtyInputs = document.querySelector('.qty-input')

// let minus = document.querySelectorAll('.qty-count--minus')
// let add = document.querySelectorAll('.qty-count--add')
// let Inp = document.querySelectorAll('.product-qty')
// let count = 0;
// [...add].forEach(btn =>{
//   btn.addEventListener('click', ()=>{
//     count+=1
//     Inp.value = count
//     console.log(count);
//     // minus.style.cursor = 'pointer'
  
//   })
// })


// minus.addEventListener('click', ()=>{
//   if(Inp.value == 1 || Inp.value == 0){
//     count = 0
//     minus.disabled = false
//     minus.style.cursor = 'not-allowed'
//   }else{
//     count-=1
//   }
//   Inp.value = count
// })


window.addEventListener( 'load', function() {
  var splide = new Splide( '.splide', {
    type    : 'loop',
    perPage : 4,
    perMove: 1,
    autoplay: true,   
    arrows : false,
    keyboard : 'global',
    speed : 500,
    pagination: false,
    gap : '80px',
    height : '500px', 
    padding: '30px',
    breakpoints: {
      640: {
        perPage : 1,
      },
      1250:{
        perPage : 2
      },
      1600:{
        perPage : 4
      }
    },
    interval: 2000,
  } );
  splide.mount();
} );
// let count = 0
// var interval = setInterval(function() {
//   let number =  document.querySelector('.box4uptext1')
//   if (count >= 171) clearInterval(interval);
//   count++;
//   number.innerHTML = count
// }, 30);


// function animateResultCount(number, target, elem) {
//   if(number < target) {
//       var interval = setInterval(function() {
//           $(elem).text(number);
//           if (number >= target) {
//               clearInterval(interval);
//               return;
//           }
//           number++;
//       }, 30);
//   }
//   if(target < number) {
//       var interval = setInterval(function() {
//           doc(elem).text(number);
//           if (target >= number) {
//               clearInterval(interval);
//               return;
//           }
//           number--;
//       }, 30);
//   }
// }

let numberbox = document.querySelectorAll('.box4uptext1')
let interval = 5000


numberbox.forEach(data=>{
  let startValue = 0
  let endValue = parseInt(data.textContent)
  let duration = Math.floor(interval / endValue)
  let counter = setInterval(function() {
    startValue += 1
    data.textContent = startValue;
    if(startValue == endValue){
      clearInterval(counter)
    }
  }, duration)
})