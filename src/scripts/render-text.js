// llm-renderer.js

class LLMRenderer {
  constructor({
    containerSelector = ".llm-section",
    textSelector = ".render-llm-text",
    typingSpeed = 30, // chars/sec
    lineDelay = 300,
    rootMargin = "0px 0px -15% 0px",
    once = true,
  } = {}) {
    this.containerSelector = containerSelector;
    this.textSelector = textSelector;
    this.typingSpeed = typingSpeed;
    this.lineDelay = lineDelay;
    this.rootMargin = rootMargin;
    this.once = once;
    this.sections = new Map(); // Track state per section
    this.init();
  }

  init() {
    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
      rootMargin: this.rootMargin,
    });

    document.querySelectorAll(this.containerSelector).forEach(section => {
      const elements = Array.from(section.querySelectorAll(this.textSelector))
        .sort((a, b) => a.offsetTop - b.offsetTop);

      this.sections.set(section, {
        elements,
        currentIndex: 0,
        animating: false,
        finished: false,
        stop: false,
      });

      elements.forEach(el => {
        const isTextOnly = this.isTextOnlyElement(el);
        el.dataset.isTextOnly = isTextOnly;

        if (isTextOnly) {
          el.dataset.fullText = el.textContent.trim();
          const originalHeight = el.offsetHeight;
          el.dataset.originalHeight = originalHeight + "px";
          el.style.minHeight = el.dataset.originalHeight;
          el.textContent = "";
        } else {
          // Save full HTML to restore later
          el.dataset.fullHTML = el.innerHTML;
          el.innerHTML = ""; // Clear for later restore
        }

        el.style.visibility = "hidden";
      });

      this.observer.observe(section);
    });
  }

  handleIntersect(entries) {
    entries.forEach(entry => {
      const section = entry.target;
      const state = this.sections.get(section);
      if (!state || state.finished) return;

      if (entry.isIntersecting) {
        state.stop = false;
        if (!state.animating) {
          this.animateSection(section, state);
        }
      } else {
        state.stop = true; // pause rendering
      }
    });
  }

  isTextOnlyElement(el) {
    const blockTags = ["IMG", "BUTTON", "VIDEO", "CANVAS", "SVG", "TABLE", "IFRAME"];
    return ![...el.querySelectorAll("*")].some(child => blockTags.includes(child.tagName));
  }

  async animateSection(section, state) {
    state.animating = true;
    const elements = state.elements;

    while (state.currentIndex < elements.length) {
      if (state.stop) {
        state.animating = false;
        return;
      }

      const el = elements[state.currentIndex];
      const isTextOnly = el.dataset.isTextOnly === "true";
      el.style.visibility = "visible";

      if (isTextOnly) {
        const text = el.dataset.fullText || "";
        let currentLength = el.textContent.length;
        for (let i = currentLength; i < text.length; i++) {
          if (state.stop) {
            // Save progress and exit
            el.textContent = text.slice(0, i);
            state.animating = false;
            return;
          }
          el.textContent += text[i];
          await this.sleep(1000 / this.typingSpeed);
        }
      } else {
        // Restore full HTML instantly
        el.innerHTML = el.dataset.fullHTML;
      }

      await this.sleep(this.lineDelay);
      state.currentIndex++;
    }

    state.finished = true;
    state.animating = false;
    if (this.once) this.observer.unobserve(section);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new LLMRenderer({
    containerSelector: ".llm-section",
    textSelector: ".render-llm-text",
    typingSpeed: 600,
    lineDelay: 0,
    rootMargin: "0px 0px -10% 0px",
    once: false,
  });
});
