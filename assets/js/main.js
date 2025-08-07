/* ========== NAVIGATION BAR FUNCTION ========== */
function myMenuFunction() {
  const menuBtnIcon = document.querySelector(".nav-menu-btn i");
  const menu = document.getElementById("myNavMenu");
  const overlay = document.querySelector(".active-nav");

  // Přepínání ikony
  if (menuBtnIcon.classList.contains("uil-bars")) {
    menuBtnIcon.classList.remove("uil-bars");
    menuBtnIcon.classList.add("uil-times");
  } else {
    menuBtnIcon.classList.remove("uil-times");
    menuBtnIcon.classList.add("uil-bars");
  }

  // Přepnutí menu a překrytí
  menu.classList.toggle("responsive");
  overlay.classList.toggle("show");
}

// Zavře menu a resetuje ikonu
function closeMenu() {
  const menuBtnIcon = document.querySelector(".nav-menu-btn i");
  const menu = document.getElementById("myNavMenu");
  const overlay = document.querySelector(".active-nav");

  menu.classList.remove("responsive");
  overlay.classList.remove("show");

  menuBtnIcon.classList.remove("uil-times");
  menuBtnIcon.classList.add("uil-bars");
}

// Zavřít menu při kliknutí na odkaz
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});


/* ========== NAVBAR SHADOW ON SCROLL ========== */
function toggleHeaderShadow() {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", toggleHeaderShadow);


/* ========== TYPING EFFECT ========== */
const typingEffect = new Typed(".typedText", {
  strings: ["Programátor", "Honza"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
  showCursor: true
});


/* ========== ACTIVE NAV ITEM ON SCROLL ========== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});


/* ========== SCROLL REVEAL ANIMATIONS ========== */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/* -- HOME -- */
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });

sr.reveal('.input-field, .textarea-field', {interval: 300});


/* -- PROJECT & ABOUT -- */
sr.reveal('.about-img', { interval: 200 });
sr.reveal('.about-container', { delay: 300 });

/* -- HEADINGS -- */


/* -- ABOUT INFO LEFT -- */
ScrollReveal({
  origin: 'left',
  distance: '100px',
  duration: 2000,
  reset: true
});

sr.reveal('.content, .skills-column-L, .projects', { delay: 100 });
sr.reveal('.contact-info', { delay: 100 });

/* -- ABOUT INFO RIGHT -- */
ScrollReveal({
  origin: 'right',
  distance: '100px',
  duration: 2000,
  reset: true
});

sr.reveal('.content-X, .skills-column-R', { delay: 100 });
sr.reveal('form', { delay: 100 });

/* -- ABOUT INFO BOTTOM -- */
ScrollReveal({
  origin: 'bottom',
  distance: '100px',
  duration: 2000,
  reset: true
});

sr.reveal('.skills-column-D', { delay: 100 })
sr.reveal('.btn-box', { delay: 200 })

/*------------------ SEND ---------------------------*/ 

const form = document.querySelector(".contact form");
const button = form.querySelector(".btn");
const icon = button.querySelector("i");
const toast = document.getElementById("alertToast");

function showToast(message, isError = false) {
  toast.textContent = message;

  toast.classList.add("show");
  toast.classList.toggle("error", isError);

  setTimeout(() => {
    toast.classList.remove("show", "error");

    // POČKEJ až přechod skončí (cca 400ms) než smažeš text
    setTimeout(() => {
      toast.textContent = "";
    }, 400);
  }, 3000);
}


form.addEventListener("submit", (e) => {
  e.preventDefault();

  button.classList.add("fly");

  const formData = new FormData(form);

  fetch("https://formspree.io/f/mldlpzoo", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      button.classList.remove("fly");

      if (response.ok) {
        showToast("✅ Zpráva odeslána!");
        form.reset();
      } else {
        return response.json().then((data) => {
          const errorMessage = data.errors?.[0]?.message || "❌ Odeslání selhalo.";
          showToast(errorMessage, true);
        });
      }
    })
});

// ---------------------- Options GALLERY-------------------------- //

const select = document.getElementById('certificateSelect');
const display = document.getElementById('selectedCertificate');

select.addEventListener('change', function () {
  const value = this.value;
  if (value) {
    display.innerHTML = `
      <a data-fancybox="gallery" href="${value}">
        <img src="${value}" alt="Vybraný certifikát"/>
      </a>
    `;
  } else {
    display.innerHTML = '';
  }
});

// ---------------------- Projects GALLERY-------------------------- //
Fancybox.bind("[data-fancybox]", {
  infinite: true,
  Thumbs: { autoStart: true },
  Toolbar: {
    display: ["close", "counter", "fullscreen", "thumbs", "zoom", "download"],
  },
});






