import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const drinkEach = document.createElement('div');
  drinkEach.className = 'drink';
  drinkEach.innerHTML = `
  <div class="drink__product">
    <div class="drink__cup">
    <img src="/assets/cups/${props.id}.png" />
    </div>
    <div class="drink__info">
      <h3>${props.name}</h3>
    </div>
  </div>    
  <div class="drink__controls">
  <button class="order-btn">Objednat</button>
  </div>
  `;
  const objednavka = drinkEach.querySelector('.order-btn');
  const drinkCup = drinkEach.querySelector('.drink__cup');

  const order = () => {
    if (props.ordered === false) {
      drinkCup.classList.toggle('drink__cup--selected');
      objednavka.innerHTML = 'Zrušit';
      props.ordered = true;
    } else {
      drinkCup.classList.toggle('drink__cup--selected');
      objednavka.innerHTML = 'Objednat';
      props.ordered = false;
    }
  };
  objednavka.addEventListener('click', order);

  const layerApp = drinkEach.querySelector('.drink__info');

  for (let i = 0; i < props.layers.length; i++) {
    layerApp.innerHTML += Layer(props.layers[i]);
  }

  return drinkEach;
};
