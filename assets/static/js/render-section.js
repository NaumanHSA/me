class CurtainScrollAnimator {
  constructor({
    selector = ".section-animate",
    delay = 100, // Delay between revealing multiple in viewport
    threshold = 0.15, // Trigger when 15% of the section is visible
  } = {}) {
    this.selector = selector;
    this.delay = delay;
    this.threshold = threshold;

    window.addEventListener("load", () => this.init());
  }

  init() {
    const sections = document.querySelectorAll(this.selector);

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target;

          // Delay based on index for curtain effect
          setTimeout(() => {
            el.classList.add("visible");
          }, i * this.delay);

          observer.unobserve(el); // Animate only once
        }
      });
    }, {
      threshold: this.threshold,
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  }
}

new CurtainScrollAnimator({
  selector: ".section-animate",
  delay: 150, // delay between stacked animations
  threshold: 0.2, // start when ~20% of section is in view
});
