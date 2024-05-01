function submit() {
  const user = document.getElementById('user').value;
  const password = document.getElementById('password').value;

  if (user === 'admin' && password === '1234') {
    alert('Boa!! tenho certeza que você é realmente o adm');
    window.location.href = 'home.html';
  } else {
    alert('Hmm, eu tentaria user:admin password:1234');
  }
}