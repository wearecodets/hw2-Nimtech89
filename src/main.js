const form = document.querySelector('.form');
form.plan.forEach(function(plan) {
  plan.addEventListener('change', function() {
    console.log(form.plan.value);
  });
});

document.querySelector('form__total').textContent = '$0';
