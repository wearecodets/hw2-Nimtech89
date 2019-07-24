const accordions = document.querySelectorAll('.accordion');
const activeClass = 'accordion--active';

accordions.forEach(function(item) {
  item.addEventListener('click', function() {
    if (item.classList.contains(activeClass)) {
      item.classList.remove(activeClass);
    } else {
      accordions.forEach(function(others) {
        others.classList.remove(activeClass);
      });
      item.classList.add(activeClass);
    }
  });
});
