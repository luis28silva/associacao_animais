  function copiarChavePix(){
      const chave = document.querySelector('.pix-chave').innerText;
      navigator.clipboard.writeText(chave).then(()=>{
        const btn = event.target;
        const textoOriginal = btn.innerText;
        btn.innerText = "Copiado!";
        setTimeout(()=> btn.innerText = textoOriginal, 1800);
      });
    }
