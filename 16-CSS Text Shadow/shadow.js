const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 500;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xwalk = Math.round((x / width) * walk - walk / 2);
  const ywalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
  ${xwalk}px ${ywalk}px 0 red,
  ${xwalk * -1}px ${ywalk}px 0 blue,
  ${ywalk}px ${xwalk * -1}px 0 green,
  ${ywalk * -1}px ${xwalk}px 0 yellow
  `;
}

hero.addEventListener("mousemove", shadow);
