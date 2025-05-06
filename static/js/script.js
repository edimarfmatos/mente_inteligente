// Função para mostrar alertas quando o formulário de contato for enviado
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        alert('Mensagem enviada com sucesso! Obrigado por entrar em contato.');
      });
    }
  
    // Galeria de imagens com legenda
    const imagens = document.querySelectorAll('.galeria-item img');
    imagens.forEach((img) => {
      img.addEventListener('click', () => {
        const legenda = img.getAttribute('alt') || 'Sem descrição';
        alert(`Imagem: ${legenda}`);
      });
    });
  });
  