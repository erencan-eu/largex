function login() {
    const password = document.getElementById('password').value;
    if (password === 'eren123') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('main-container').style.display = 'flex';
    } else {
        alert('Şifre yanlış!');
    }
}
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}
function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}