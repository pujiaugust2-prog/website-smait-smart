
// MENU MOBILE
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");

  const isOpen = !navMenu.classList.contains("hidden");
  menuButton.setAttribute("aria-expanded", isOpen);
});

// TUTUP MENU SETELAH NAVIGASI DIPILIH
navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// ANIMASI SCROLL
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});

// LIGHTBOX DOKUMENTASI DAN FLYER
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightbox = document.getElementById("closeLightbox");

function openLightbox(src, caption) {
  lightboxImage.src = src;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function hideLightbox() {
  lightbox.classList.remove("open");
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

// FOTO DOKUMENTASI
document.querySelectorAll("[data-lightbox]").forEach(item => {
  item.addEventListener("click", () => {
    openLightbox(
      item.dataset.lightbox,
      item.dataset.caption
    );
  });
});

// FLYER PPDB
document.getElementById("flyerButton").addEventListener("click", () => {
  openLightbox(
    "image/flyer-ppdb.jpg",
    "Flyer PPDB SMAIT SMART YBN 2027/2028"
  );
});

// TUTUP LIGHTBOX
closeLightbox.addEventListener("click", hideLightbox);

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    hideLightbox();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    hideLightbox();
  }
});
