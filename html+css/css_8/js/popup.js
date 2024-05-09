const body = document.body;
const click = document.querySelector("#popup-click");

click.addEventListener("click", isChecked);

function isChecked() {
  if (click.checked) {
    body.classList.add("lockscreen");
  } else {
    body.classList.remove("lockscreen");
  }
}