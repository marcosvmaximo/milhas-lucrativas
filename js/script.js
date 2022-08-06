function changeElement() {
  const logo = document.querySelector(".container-logo");
  const origem = logo.parentElement;
  const header = document.querySelector(".header");
  const alvo = document.querySelector(".period");

  const media = window.matchMedia("(max-width: 1025px)");

  document.body.onresize = () => {
    if (media.matches) {
      header.insertBefore(logo, alvo);
      logo.style.textAlign = "center";
    } else {
      origem.insertBefore(logo, origem.firstElementChild);
      logo.style.textAlign = "left";
    }
  };
}

function initScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  console.log(links);
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

changeElement();
initScroll();
