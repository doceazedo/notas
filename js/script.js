const content = document.getElementById('content');
content.innerHTML = localStorage.getItem('content');
content.onkeyup = () => {
  localStorage.setItem('content', content.innerHTML);
}