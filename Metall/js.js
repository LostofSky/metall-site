function updatePlaceholders() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("tel");

  if (window.innerWidth <= 768) {
      nameInput.placeholder = "Имя";
      emailInput.placeholder = "Email";
      phoneInput.placeholder = "Телефон";
      } 
  else {
      nameInput.placeholder = "Введите ваше имя";
      emailInput.placeholder = "Введите ваш email";
      phoneInput.placeholder = "Введите ваш телефон";
      }
  }

  window.addEventListener("resize", updatePlaceholders);
  window.addEventListener("DOMContentLoaded", updatePlaceholders);

  if (window.innerWidth <= 768) {
    AOS.init();
  } else {
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.removeAttribute('data-aos');
    });
  }