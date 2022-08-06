function redirect() {
  const numberContage = document.querySelector(".time");
  let contage = 11;

  for (let i = 0; i <= 10; i++) {
    setTimeout(() => {
      contage--;
      numberContage.innerText = contage;
      if (contage === 0) {
        window.location.href =
          "https://chat.whatsapp.com/Fmb3FXVOuwc4mzVyKuXxaS";
      }
    }, 1000 * i);
  }
}

redirect();
