const p = document.querySelector('.p');

const dogs = [
  {name: 'Snickers', age: 2},
  {name: 'hugo', age: 8},
];

function handleClick() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

p.addEventListener('click', handleClick);

// Regular

// Interpolated
console.log('today is %s!', '📅');
// Styled
console.log(
  '%c Hello I am Minji',
  'color:teal; font-size:40px; background-color:gold; font-weight:bold; text-shadow:2px 2px 0 grey'
);
// warning!
console.warn('ohh nooooooo');

// Error :|
console.error('not found any datas');
// Info
console.info('cooooold info today');
// Testing
console.assert(1 === 2, 'that is wrong');
// clearing
// Viewing DOM Elements

// Grouping together

// counting
console.count('minji');
console.count('minji');
console.count('minji');
console.count('minji');
console.count('minji');
console.count('minji');
console.count('gan');
// timing
