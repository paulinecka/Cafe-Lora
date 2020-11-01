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
