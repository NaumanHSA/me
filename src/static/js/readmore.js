document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".read-more-toggle");
  const contents = document.querySelectorAll(".read-more-content");

  toggles.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      const targetIndex = parseInt(btn.getAttribute("data-target"));
      const content = contents[targetIndex];

      if (content.classList.contains("max-h-28")) {
        content.classList.remove("max-h-28");
        btn.innerText = "Read less";
      } else {
        content.classList.add("max-h-28");
        btn.innerText = "Read more...";
      }
    });
  });
});