  function copiarChavePix(){
      const chave = document.querySelector('.pix-chave').innerText;
      navigator.clipboard.writeText(chave).then(()=>{
        const btn = event.target;
        const textoOriginal = btn.innerText;
        btn.innerText = "Copiado!";
        setTimeout(()=> btn.innerText = textoOriginal, 1800);
      });
    }


    const btnMobile = document.getElementById('btn-mobile');
const navLinks = document.getElementById('nav-links');

btnMobile.addEventListener('click', function () {
  navLinks.classList.toggle('active');

  const icon = btnMobile.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');

  const isOpen = navLinks.classList.contains('active');
  btnMobile.setAttribute('aria-expanded', isOpen);
});

// fecha o menu ao clicar em qualquer link
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('active');
    btnMobile.querySelector('i').classList.add('fa-bars');
    btnMobile.querySelector('i').classList.remove('fa-xmark');
    btnMobile.setAttribute('aria-expanded', false);
  });
});

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  setTimeout(function () {
    preloader.classList.add("preloader-oculto");
  }, 300);
});