const pages = document.querySelectorAll('[data-page]');

function changePage(index) {
   pages.forEach(page => {
      page.style.display = 'none';
   });
   document.querySelector(`[data-page="${index}"]`).style.display='block';
}
