// JavaScript to toggle the display of form-nav-small
document.querySelector('.nav-search-icon').addEventListener('click', function () {
    const searchForm = document.querySelector('.form-nav-small');
    searchForm.classList.toggle('d-none');
  });