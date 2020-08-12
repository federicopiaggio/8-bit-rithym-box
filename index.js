function Playsound(audio, key) {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function keyDown(e) {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  Playsound(audio, key);
}
const keys = document.querySelectorAll(".key");
window.addEventListener("keydown", keyDown);

function click() {
  const keyNumb = this.getAttribute("data-key");
  const audio = document.querySelector(`audio[data-key = "${keyNumb}"]`);
  Playsound(audio, this);
}

keys.forEach((e) => {
  e.addEventListener("click", click);
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
