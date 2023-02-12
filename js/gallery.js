// photo-gallery.js
const images = document.querySelectorAll('#gallery .thumbnail');
images.forEach(img => {
  img.addEventListener('click', function() {
    const src = this.src;
    const modal = document.createElement('div');
    modal.innerHTML = `
      <img src="${src}" alt="Image">
      <button>Close</button>
    `;
    modal.style.display = 'block';
    document.body.appendChild(modal);
  });
});
document.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    const modal = event.target.parentNode;
    modal.style.display = 'none';
    document.body.removeChild(modal);
  }
});