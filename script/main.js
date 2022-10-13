// sticky nav
const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle(`isSticky`, e.intersectionRatio < 1),
  {
    threshold: [1],
  }
);

observer.observe(document.querySelector("nav"));

function changeNavStyling() {
  console.log("test");
}
