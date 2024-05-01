const ageInput = document.getElementById('input-age');

function checkAge() {
  window.localStorage.setItem('@USER_AGE', ageInput.value);

  if (ageInput.value < 18) {
    window.location.href = "kid.html";
  }
  else{
  window.location.href = "home.html";
  }
}