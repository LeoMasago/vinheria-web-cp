/*
  localStorage é um banco de dados chave-valor no browser,
  usando ele podemos gravar dados e dar refresh na página sem perder os dados
  https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
*/
const userAgeStr = window.localStorage.getItem("@USER_AGE");

/* quando está null significa que não existe esse dado */
if (userAgeStr === null) {
  window.location.replace("/age");
}

const userAge = parseInt(userAgeStr);

if (userAge >= 18) {
  if (userAge > 100) alert(`${userAge} anos?? terror do inss`);

  window.location.replace("/home");
} else {
  window.location.replace("/kid");
}
