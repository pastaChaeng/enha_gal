
    const toggleCheckbox = document.getElementById('dark-mode-toggle');
    toggleCheckbox.addEventListener('change', function() {
    const body = document.body;
    if (this.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
    });

 
  const likeButtons = document.querySelectorAll('.like-button');
  likeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('clicked');
    });
  });


  const saveButtons = document.querySelectorAll('.save-button');
  saveButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const container = button.parentElement.parentElement;
      const image = container.querySelector('img');
      const link = document.createElement('a');
      link.href = image.src;
      link.download = 'ENHYPEN_Photo.jpg';
      link.click();
    });
  });
