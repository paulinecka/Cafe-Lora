import './index.html';
import './style.css';
import { Layer } from './Layer/index.js';

console.log('funguju!');

const navElm = document.querySelector('#nav-btn');

navElm.addEventListener('click', () => {
  const nav1 = document.querySelector('nav');
  nav1.classList.toggle('nav-closed');
});

const navLinky = document.querySelectorAll('#nav-links');
for (let i = 0; i < navLinky.length; i++) {
  const navLink = navLinky[i];
  navLink.addEventListener('click', () => {
    const nav2 = document.querySelector('nav');
    nav2.classList.add('nav-closed');
  });
}

const orderBtn = document.querySelectorAll('.order-btn');
const drinkCup = document.querySelector('.drink__cup');

for (let i = 0; i < orderBtn.length; i++) {
  const objednavka = orderBtn[i];
  objednavka.addEventListener('click', () => {
    drinkCup.classList.toggle('drink__cup--selected');
    //objednavka.innerHTML = 'Zrušit';
    if (drinkCup.classList.contains('drink__cup--selected')) {
      objednavka.innerHTML = 'Zrušit';
    } else {
      objednavka.innerHTML = 'Objednat';
    }
  });
}

const layerApp = document.querySelector('#app');

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

for (let i = 0; i < layers.length; i++) {
  layerApp.innerHTML += Layer(layers[i]);
}

/*
                    <div class="layer__color"
                    style="background-color: #feeeca"
                  ></div>
                  <div class="layer__label">mléčná pěna</div>
<div class="layer">
                  <div
                    class="layer__color"
                    style="background-color: #fed7b0"
                  ></div>
                  <div class="layer__label">teplé mléko</div>
                </div>

                <div class="layer">
                  <div
                    class="layer__color"
                    style="background-color: #613916"
                  ></div>
                  <div class="layer__label">espresso</div>
                </div>
                  
layerApp.innerHTML = Layer({ color: '#feeeca', label: 'mléčná pěna' });

layerApp.innerHTML += Layer({ color: '#fed7b0', label: 'teplé mléko' });

layerApp.innerHTML += Layer({ color: '#613916', label: 'espresso' });
 */
