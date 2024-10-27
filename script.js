window.onload = () => {
  gsap.to(".hero-content", { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" });
};

// Mouse movement
const heroImages = document.querySelectorAll(".hero-image");

heroImages.forEach(image => {
  image.addEventListener("mousemove", (e) => {
      const rect = image.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(image, {
          x: (x - rect.width / 2) / 15,
          y: (y - rect.height / 2) / 15,
          duration: 0.3,
          ease: "power2.out",
      });
  });

  image.addEventListener("mouseleave", () => {
      gsap.to(image, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
  });
});
