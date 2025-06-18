(function () {
  var cssId = 'offres-electriques-css';
  if (!document.getElementById(cssId)) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'offres-electriques.css';
    link.media = 'all';
    head.appendChild(link);
  }

  fetch('offres-electriques.html')
    .then(response => response.text())
    .then(html => {
      var container = document.createElement('div');
      container.innerHTML = html;
      document.body.appendChild(container);

      var script = document.createElement('script');
      script.src = 'offres-electriques.js';
      document.body.appendChild(script);
    });
})();