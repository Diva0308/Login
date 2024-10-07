function storeCredentials() {
    localStorage.setItem('username', 'testUser'); 
    localStorage.setItem('password', 'testPass'); 
}

function checkLogin() {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (inputUsername === storedUsername && inputPassword === storedPassword) {
        window.location.href = 'home.html'; 
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
}

document.getElementById('submitBtn').addEventListener('click', function() {
    checkLogin();
});

