document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.kia-faq ul li').forEach(function (item) {
    item.style.cursor = "pointer";
    item.addEventListener('click', function () {
      alert("Voir la réponse à : " + item.textContent);
    });
  });
});