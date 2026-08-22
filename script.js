// =====================
// BOTÃO COPIAR CHAVE PIX
// =====================
function copiarChavePix(){
      const chave = document.querySelector('.pix-chave').innerText;
      navigator.clipboard.writeText(chave).then(()=>{
        const btn = event.target;
        const textoOriginal = btn.innerText;
        btn.innerText = "Copiado!";
        setTimeout(()=> btn.innerText = textoOriginal, 1800);
      });
    }

// =====================
// MENU MOBILE (abrir/fechar)
// =====================
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


// =====================
// PRELOADER (tela de carregamento)
// =====================
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  setTimeout(function () {
    preloader.classList.add("preloader-oculto");
  }, 300);
});



// =====================
// LIGHTBOX FOTOS ANIMAIS
// =====================
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("lightboxOverlay");
  const imgEl = document.getElementById("lightboxImg");
  const nomeEl = document.getElementById("lightboxNome");
  const btnFechar = document.getElementById("lightboxFechar");

  // clique em qualquer foto dentro de .card-foto (funciona pros 100 cards)
  document.querySelectorAll(".card-foto img").forEach(function (img) {
    img.addEventListener("click", function () {
      const card = img.closest(".card-animal");
      const nome = card ? card.querySelector(".tag-nome").textContent : "";

      imgEl.src = img.src;
      imgEl.alt = img.alt;
      nomeEl.textContent = nome;
      overlay.classList.add("ativo");
    });
  });

  function fecharLightbox() {
    overlay.classList.remove("ativo");
  }

  btnFechar.addEventListener("click", fecharLightbox);

  // fecha clicando fora da foto
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) fecharLightbox();
  });

  // fecha com tecla ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") fecharLightbox();
  });
});