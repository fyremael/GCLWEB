const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const revealNodes = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -48px 0px"
    }
  );

  revealNodes.forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index * 45, 260)}ms`;
    revealObserver.observe(node);
  });
} else {
  revealNodes.forEach((node) => {
    node.classList.add("is-visible");
  });
}
