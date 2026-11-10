(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var copy = document.getElementById('copy');
  var status = document.getElementById('copy-status');
  var email = 'carlangatrex@gmail.com';
  if (copy && status) {
    copy.addEventListener('click', function () {
      function ok() { status.textContent = 'Correo copiado.'; }
      function fail() { status.textContent = 'No se pudo copiar. Escríbelo a ' + email + '.'; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(ok, fail);
      } else {
        fail();
      }
    });
  }
})();
