const pressed = [];
const secretCode = "musica";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.lenght - 1, pressed.length - secretCode.length);
  console.log(pressed);
  if (pressed.join("").includes("musica")) {
    cornify_add();
  }
});
