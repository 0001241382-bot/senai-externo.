   // Sistema inteligente que identifica qual botão do index.html foi clicado
    const urlParams = new URLSearchParams(window.location.search);
    const cenaAtiva = urlParams.get('cena'); // Pega o '?cena=nome' da URL

    const fundo = document.getElementById('fundo-360');
    const pontoClique = document.getElementById('ponto-clique');

    // Configuração das imagens de fundo e posições do botão laranja para cada sala
    if (cenaAtiva === 'intervalo') {
      fundo.setAttribute('src', 'tempo-individual.jpg'); 
      pontoClique.setAttribute('position', '2 1.6 -3'); // Ajuste onde o ponto fica na Área de Intervalo
    } else if (cenaAtiva === 'patio') {
      fundo.setAttribute('src', 'patio.jpg'); 
      pontoClique.setAttribute('position', '-1.5 1.8 -4'); 
    } else if (cenaAtiva === 'sanitario') {
      fundo.setAttribute('src', 'estacionamento.jpg'); 
      pontoClique.setAttribute('position', '0 1.2 -3.5'); 
    } else {

      fundo.setAttribute('src', 'patio.jpg');
    }

    function iniciarTour() {
      document.getElementById('btn-iniciar').style.display = 'none';
      document.getElementById('cena-vr').style.display = 'block';
      
      const video = document.getElementById('video-grupo');
      video.play().then(() => {
        video.pause();
      }).catch(e => console.log("Aguardando ativação por olhar fixo."));
    }
    AFRAME.registerComponent('abre-video', {
      init: function () {
        const video = document.querySelector('#vid');
        const tela = document.querySelector('#tela-video');
        this.el.addEventListener('click', () => {
          tela.setAttribute('visible', true);
          video.play();
        });
      }
    });