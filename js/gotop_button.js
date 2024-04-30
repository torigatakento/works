const scrollTopBtn = document.getElementById("js-gotop");

scrollTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        scrollTopBtn.classList.remove("is-show");
      } else {
        scrollTopBtn.classList.add("is-show");
      }
    });
  },
  {
    root: null,
    rootMargin: "50% 0%",
    threshold: [0],
  }
).observe(document.getElementById("js-gotop-trigger"));
