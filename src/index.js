import './index.html';
import './style.css';
import { Drink } from './Drink/index.js';

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

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
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
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

drinks.forEach((drink) => {
  const drinksList = document.querySelector('.drinks-list');
  drinksList.appendChild(Drink(drink));
});

/*

for (let i = 0; i < layers.length; i++) {
  layerApp.innerHTML += Layer(layers[i]);
}

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

<div class="drink">
            <div class="drink__product">
              <div class="drink__cup">
                <img src="/assets/cups/cappuccino.png" />
              </div>
              <div class="drink__info">
                <h3>Cappuccino</h3>
                <div class="app"></div>
              </div>
            </div>


//const orderBtn = document.querySelectorAll('.order-btn');
//const drinkCup = document.querySelector('.drink__cup');

//for (let i = 0; i < orderBtn.length; i++) {}


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


const drinks = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};
 */
