let previewContainer = document.querySelector('.players-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.players-container .players').forEach(player => {
  player.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = player.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      } else {
        preview.classList.remove('active'); // Remova a classe "active" de outros jogadores
      }
    });
  };
});

previewBox.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});
