function generateStars(n = 50) {
  const container = document.getElementById('star-layer');
  const size = container.offsetWidth;

  for (let i = 0; i < n; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random position inside a circle
    const r = Math.sqrt(Math.random()) * (size / 2); // Uniform distribution in circle
    const theta = Math.random() * 2 * Math.PI;

    const x = Math.cos(theta) * r + size / 2;
    const y = Math.sin(theta) * r + size / 2;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animationDelay = `${(Math.random() * 3).toFixed(2)}s`;

    container.appendChild(star);
  }
}

window.addEventListener('DOMContentLoaded', () => generateStars(50));