const routes = {
  home: 'views/home.html',
  about: 'views/about.html',
  details: 'views/unit-details.html'
};

function loadView(view) {
  const path = routes[view] || routes['home'];
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById('app').innerHTML = html;
    });
}

window.addEventListener('hashchange', () => {
  const view = location.hash.replace('#', '');
  loadView(view);
});

// Cargar vista inicial
loadView(location.hash.replace('#', '') || 'home');