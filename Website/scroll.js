// SCROLL EFFECT WITH IMPROVED ANIMATIONS

// Easing function for smooth transitions
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Throttle function to limit scroll event frequency
function throttle(func, limit) {
  let inThrottle;
  return function () {
    if (!inThrottle) {
      func.apply(this, arguments);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const updateScrollEffects = () => {
  const scrollDivs = document.querySelectorAll(".scrollDiv");
  const viewportHeight = window.innerHeight;
  const viewportCenter = viewportHeight / 2;

  scrollDivs.forEach((div) => {
    const rect = div.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    
    const distanceFromCenter = (elementCenter - viewportCenter) / viewportCenter;
    const normalizedDistance = Math.max(-1, Math.min(1, distanceFromCenter));
    
    const opacity = 1 - Math.abs(normalizedDistance) * 0.2;
    
    const scale = 1 + (1 - Math.abs(normalizedDistance)) * 0.02 - Math.abs(normalizedDistance) * 0.02;
    
    const weight = Math.round(400 + (1 - Math.abs(normalizedDistance)) * 400);
    

    div.style.opacity = Math.max(0.9, opacity);
    div.style.transform = `scale(${scale})`;
    div.style.fontWeight = weight;
    div.style.transition = "all 0.3s ease-out";
  });
};

window.addEventListener("scroll", throttle(updateScrollEffects, 16));

window.dispatchEvent(new Event("scroll"));