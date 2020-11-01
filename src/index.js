import './index.html';
import './style.css';

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
