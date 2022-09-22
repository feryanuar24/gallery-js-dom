const container = document.getElementsByClassName("container")[0];
const jumbo = document.getElementsByClassName("jumbo")[0];
const thumbs = document.querySelectorAll(".thumb");
container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    // Jumbo Image
    jumbo.src = e.target.src;

    // Animation Fade: Thumb Image
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);

    // Animation Opacity: Thumb Image
    thumbs.forEach(function (thumb) {
      thumb.className = "thumb";
      e.target.classList.add("active");
    });
  }
});
