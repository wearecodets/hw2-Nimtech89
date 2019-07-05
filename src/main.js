const form = document.forms[0];
const monthly = form.elements.plan[1];
monthly.addEventListener('mousedown', function() {
  document.querySelector('.form__total').textContent = '30$';
  document.querySelector('.form__pay span').textContent = '30$';
});
const annually = form.elements.plan[0];
annually.addEventListener('mousedown', function() {
  document.querySelector('.form__total').textContent = '300$';
  document.querySelector('.form__pay span').textContent = '300$';
});
