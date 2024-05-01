const ageInput = document.getElementById('input-age');

function checkAge() {
  window.localStorage.setItem('@USER_AGE', ageInput.value);

  if (ageInput.value > 100) {
    alert(`${ageInput} anos de idade?? Tio Paulo`)
  }

  window.location.href = "home.html";
}