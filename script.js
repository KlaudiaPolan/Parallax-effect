const bg = document.querySelector('.bg-image');
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5 ;

bg.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;

  bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});

const macbook = document.querySelector('.macbook');
const windowWidth2 = window.innerWidth / 10;
const windowHeight2 = window.innerHeight / 10 ;

macbook.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / windowWidth2;
  const mouseY = e.clientY / windowHeight2;

  macbook.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});
