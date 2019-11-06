const panels = document.querySelectorAll(".panel");

function toggle() {
  this.classList.toggle("open");
}
function toggleActive(e) {
  //normally we can just use this.classList.toggle("open-active"), but because there will be multiple transitionend events to get around that we will do the following
  //   console.log(e.propertyName);
  //once we listen for the click event the propertyname will show flex-grow, and font-size, but what we are interested in is the flex grow
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
panels.forEach(panel => {
  panel.addEventListener("click", toggle);
  panel.addEventListener("transitionend", toggleActive);
});
