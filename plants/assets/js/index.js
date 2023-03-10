let cells = document.querySelectorAll('.nav-list__item')

for(let i=0; i<cells.length;i++){
    cells[i].addEventListener('click', function() {
        if(!this.classList.contains('active')) {
            for (let j = 0; j < cells.length; j++) {
                cells[j].classList.remove('active')
            }
            this.classList.add('active')
        }
    });    
}


// animate details


class Accordion {
    constructor(el) {
      // Store the <details> element
      this.el = el;
      // Store the <summary> element
      this.summary = el.querySelector('summary');
      // Store the <div class="content"> element
      this.content = el.querySelector('.price-desc');
        
  
      // Store the animation object (so we can cancel it if needed)
      this.animation = null;
      // Store if the element is closing
      this.isClosing = false;
      // Store if the element is expanding
      this.isExpanding = false;
      // Detect user clicks on the summary element
      this.summary.addEventListener('click', (e) => this.onClick(e));
    }
  
    onClick(e) {
      // Stop default behaviour from the browser
      e.preventDefault();
      // Add an overflow on the <details> to avoid content overflowing
      this.el.style.overflow = 'hidden';
      // Check if the element is being closed or is already closed
      if (this.isClosing || !this.el.open) {
        this.open();
      // Check if the element is being openned or is already open
      } else if (this.isExpanding || this.el.open) {
        this.shrink();
      }
    }
  
    shrink() {
      // Set the element as "being closed"
      this.isClosing = true;
      
      // Store the current height of the element
      const startHeight = `${this.el.offsetHeight}px`;
      // Calculate the height of the summary
      const endHeight = `${this.summary.offsetHeight}px`;
      
      // If there is already an animation running
      if (this.animation) {
        // Cancel the current animation
        this.animation.cancel();
      }
      
      // Start a WAAPI animation
      this.animation = this.el.animate({
        // Set the keyframes from the startHeight to endHeight
        height: [startHeight, endHeight]
      }, {
        duration: 600,
        easing: 'ease-out'
      });
      
      // When the animation is complete, call onAnimationFinish()
      this.animation.onfinish = () => this.onAnimationFinish(false);
      // If the animation is cancelled, isClosing variable is set to false
      this.animation.oncancel = () => this.isClosing = false;
    }
  
    open() {
      // Apply a fixed height on the element
      this.el.style.height = `${this.el.offsetHeight}px`;
      // Force the [open] attribute on the details element
      this.el.open = true;
      // Wait for the next frame to call the expand function
      window.requestAnimationFrame(() => this.expand());
    }
  
    expand() {
      // Set the element as "being expanding"
      this.isExpanding = true;
      // Get the current fixed height of the element
      const startHeight = `${this.el.offsetHeight}px`;
      // Calculate the open height of the element (summary height + content height)
      const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;
      
      // If there is already an animation running
      if (this.animation) {
        // Cancel the current animation
        this.animation.cancel();
      }
      
      // Start a WAAPI animation
      this.animation = this.el.animate({
        // Set the keyframes from the startHeight to endHeight
        height: [startHeight, endHeight]
      }, {
        duration: 600,
        easing: 'ease-out'
      });
      // When the animation is complete, call onAnimationFinish()
      this.animation.onfinish = () => this.onAnimationFinish(true);
      // If the animation is cancelled, isExpanding variable is set to false
      this.animation.oncancel = () => this.isExpanding = false;
    }
  
    onAnimationFinish(open) {
      // Set the open attribute based on the parameter
      this.el.open = open;
      // Clear the stored animation
      this.animation = null;
      // Reset isClosing & isExpanding
      this.isClosing = false;
      this.isExpanding = false;
      // Remove the overflow hidden and the fixed height
      this.el.style.height = this.el.style.overflow = '';
    }
  }
  
  document.querySelectorAll('details').forEach((el) => {
    new Accordion(el);
  });


  ////




let wr = document.querySelector('.contacts-wrapper')
let x, i, j, l, ll, selElmnt, a, b, c, res, test;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        let y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
            res = s[i]
            
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            
            let testA = document.createElement('div');
            let testD = document.createElement('div');
            let selImg = document.querySelector('.contacts-wrapper');
            testD.setAttribute('class', 'selected-city__left');
            testD.innerHTML = `<p>City:</p><p>Phone:</p><p class="selected-city__office">Office adress:</p>`;
            let testC = document.createElement('div')
            testC.setAttribute('class', 'selected-city__right');
            testC.innerHTML = `<p>${res.value}</p><p>${res.value === 'Canandaigua, NY' ? '+1585	3930001' : res.value === 'New York City' ? '+12124560002' : res.value === 'Yonkers, NY' ? '+19146780003' : res.value === 'Sherrill, NY' ? '+13159080004' : false}</p><p class="selected-city__office">${res.value === 'Canandaigua, NY' ? '151 Charlotte Street' : res.value === 'New York City' ? '9 East 91st Street' : res.value === 'Yonkers, NY' ? '511 Warburton Ave' : res.value === 'Sherrill, NY' ? '14 WEST Noyes BLVD' : false}</p><a href="tel:${res.value === 'Canandaigua, NY' ? '+15853930001' : res.value === 'New York City' ? '+12124560002' : res.value === 'Yonkers, NY' ? '+19146780003' : res.value === 'Sherrill, NY' ? '+13159080004' : false}" class="button tel">Call us</a>`;
            
            if(!!document.querySelector('.selected-city')) {
                testB = document.querySelector('.selected-city');
                while (testB.firstChild) {
                    testB.removeChild(testB.firstChild);
                  }
                testD.innerHTML = `<p>City:</p><p>Phone:</p><p class="selected-city__office">Office adress:</p>`;
                testC.innerHTML = `<p>${res.value}</p><p>${res.value === 'Canandaigua, NY' ? '+15853930001' : res.value === 'New York City' ? '+12124560002' : res.value === 'Yonkers, NY' ? '+19146780003' : res.value === 'Sherrill, NY' ? '+13159080004' : false}</p><p class="selected-city__office">${res.value === 'Canandaigua, NY' ? '151 Charlotte Street' : res.value === 'New York City' ? '9 East 91st Street' : res.value === 'Yonkers, NY' ? '511 Warburton Ave' : res.value === 'Sherrill, NY' ? '14 WEST Noyes BLVD' : false}</p><a href="tel:${res.value === 'Canandaigua, NY' ? '+15853930001' : res.value === 'New York City' ? '+12124560002' : res.value === 'Yonkers, NY' ? '+19146780003' : res.value === 'Sherrill, NY' ? '+13159080004' : false}" class="button tel  ">Call us</a>`;
                testB.appendChild(testD);
                testB.appendChild(testC);
                if(window.innerWidth < 500) {
                  selImg.style.backgroundImage = 'none';
                  selImg.style.height = '400px !important';
                }
            } else {
                testA.setAttribute('class', 'selected-city');
                
                testA.appendChild(testD);
                testA.appendChild(testC);
                // testA.innerHTML = `<p>City: ${res.value}</p><p>Phone: ${res.value === 'Canandaigua, NY' ? '+1	585	393 0001' : res.value === 'New York City' ? '+1	212	456 0002' : res.value === 'Yonkers, NY' ? '+1	914	678 0003' : res.value === 'Sherrill, NY' ? '+1315908 0004' : false}</p><p>Office adress: ${res.value === 'Canandaigua, NY' ? '151 Charlotte Street' : res.value === 'New York City' ? '9 East 91st Street' : res.value === 'Yonkers, NY' ? '511 Warburton Ave' : res.value === 'Sherrill, NY' ? '14 WEST Noyes BLVD' : false}</p><button>Call us</button>`
                wr.appendChild(testA);
                if(window.innerWidth < 500) {
                  selImg.style.backgroundImage = 'none';
                  selImg.style.height = '400px !important';
                }
            }
            
            

            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
      this.classList.add("select-always-active")
    });
}
function closeAllSelect(elmnt) {
  let x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);



const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const popupOpened = document.querySelector('open')
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);
popup.addEventListener('click', () => {
  popup.classList.toggle("open");
  hamb.classList.toggle("hamb-active");
  body.classList.toggle("noscroll");
})

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("hamb-active");
  body.classList.toggle("noscroll");
}

// Здесь мы рендерим элементы в наш попап

// Код для закрытия меню при нажатии на ссылку

// Для каждого элемента меню при клике вызываем ф-ию

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("hamb-active");
  body.classList.remove("noscroll");
}


let popUpLinks = document.querySelectorAll('.popup-list__item');
let popUpMenu = document.querySelector('.menu')

for (let i = 0; i < popUpLinks.length; i++) {
  popUpLinks[i].addEventListener('click', function() {
    if(!this.classList.contains('active')) {
        for (let j = 0; j < popUpLinks.length; j++) {
            popUpLinks[j].classList.remove('active')
        }
        this.classList.add('active')
    }
});    
}

function closePopUp() {
  popup.classList.remove('open')
}

let garden = document.querySelectorAll('.gardens')
let planting = document.querySelectorAll('.planting')
let lawn = document.querySelectorAll('.lawn')
let arrayCards = [];
garden.forEach((node) => arrayCards.push(node))
planting.forEach((node) => arrayCards.push(node))
lawn.forEach((node) => arrayCards.push(node))

let serviceButtons = document.querySelectorAll('.service button')
activeButtons = 1;

for (let i = 0; i < serviceButtons.length; i++) {

  
  
    serviceButtons[i].addEventListener('click', function() {
      nowActive = [];
      if (serviceButtons[i].classList.contains('button-active')) {
        serviceButtons[i].classList.remove('button-active')
        activeButtons--
      } else {
        if (activeButtons >= 3) {
          return alert('Вы не можете выбрать все 3 кнопки');    
        } else {
          // nowActive.push(serviceButtons[i])
          activeButtons++;
          serviceButtons[i].classList.add('button-active');
        }
        
      }
      for (let j = 0; j < serviceButtons.length; j++) {
        if (serviceButtons[j].classList.contains('button-active')) {
          nowActive.push(serviceButtons[j])
        }
      }
      
      arrayCards.forEach(el => el.classList.add('noise'))


      if (nowActive.length === 1) {
        
        


        if(serviceButtons[i].innerHTML === 'Cakes') {
          arrayCards.forEach(el => {
            if(el.classList.contains('gardens')) {
              el.classList.remove('noise')
            }
          })
        }
        if(serviceButtons[i].innerHTML === 'Cupcakes') {
          arrayCards.forEach(el => {
            if(el.classList.contains('lawn')) {
              el.classList.remove('noise')
            }
          })
        }
        if(serviceButtons[i].innerHTML === 'Buns') {
          arrayCards.forEach(el => {
            if(el.classList.contains('planting')) {
              el.classList.remove('noise')
            }
          }) 
        }
        
        
        if(nowActive[0].innerHTML === 'Cakes') {
          arrayCards.forEach(el => el.classList.add('noise'))
          arrayCards.forEach(el => {
            if(el.classList.contains('gardens')) {
              el.classList.remove('noise')
            }
          })
        }
        if(nowActive[0].innerHTML === 'Cupcakes') {
          arrayCards.forEach(el => el.classList.add('noise'))
          arrayCards.forEach(el => {
            if(el.classList.contains('lawn')) {
              el.classList.remove('noise')
            }
          })
        }
        if(nowActive[0].innerHTML === 'Buns') {
          arrayCards.forEach(el => el.classList.add('noise'))
          arrayCards.forEach(el => {
            if(el.classList.contains('planting')) {
              el.classList.remove('noise')
            }
          })
        }
       
      } else if (nowActive.length === 2) {
        arrayCards.forEach(el => el.classList.remove('noise'))


        if(nowActive[0].innerHTML === 'Cakes' && nowActive[1].innerHTML === 'Cupcakes') {
          arrayCards.forEach(el => {
            if (el.classList.contains('planting')) {el.classList.add('noise')}
          })
        }

        if(nowActive[0].innerHTML === 'Cakes' && nowActive[1].innerHTML === 'Buns') {
          arrayCards.forEach(el => {
            if (el.classList.contains('lawn')) {el.classList.add('noise')}
          })
        }

        if(nowActive[0].innerHTML === 'Cupcakes' && nowActive[1].innerHTML === 'Buns') {
          arrayCards.forEach(el => {
            if (el.classList.contains('gardens')) {el.classList.add('noise')}
          })
        }


      }
      else {
        arrayCards.forEach(el => el.classList.remove('noise'))
      }
 





      // arrayCards.forEach(el => el.classList.add('noise'))
      

      
      
        // for (let j = 0; j < serviceButtons.length; j++) {

          


        //   // arrayCards.forEach((el) => el.classList.add('noise'))
        //   // if(serviceButtons[j].classList.contains('button-active')) {
        //   //   arrayCards.forEach((el) => el.classList.add('noise'))
        //   // }
          
        // }
    
    })
}



// arrayCards.forEach((el) => el.classList.add('noise'))



const details = document.querySelectorAll("details");

details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});


