// DOM Elements
const registerForm = $('#register-form');
const loginForm = $('#login-form');
const toggleBtn = $('.toggle-form-btn');
const registerBtn = $('#register-btn');
const loginBtn = $('#login-btn');
const successMessage = $('#success-message');
const dashboard = $('.dashboard');

toggleBtn.on('click', function () {
    if (registerForm.is(':visible')) {
        registerForm.hide();
        loginForm.show();
    } else {
        loginForm.hide();
        registerForm.show();
    }

    successMessage.hide();
    dashboard.hide();
});


// Register form submission
registerForm.on('submit', function (e) {
    e.preventDefault();

    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val().trim();

    if (!email || !password) {
    showPopupMessage('Please fill all fields.', 'warning');
    return;
}


    // Store to localStorage for demo (you can integrate backend here)
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    registerForm.hide();
    successMessage.fadeIn(300);
});

// Login form submission
loginForm.on('submit', function (e) {
    e.preventDefault();

    const email = $('#login-email').val().trim();
    const password = $('#login-password').val().trim();
    const rememberMe = $('#remember-me').is(':checked');

    if (!email || !password) {
        alert('Please fill all fields');
        return;
    }

    // Validate against stored credentials
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        if (rememberMe) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
        }

        loginForm.hide();
        dashboard.fadeIn(300);
    } else {
        alert('Invalid credentials. Try again.');
    }
});

// Auto-fill if Remember Me is enabled
$(document).ready(function () {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail && savedPassword) {
        $('#login-email').val(savedEmail);
        $('#login-password').val(savedPassword);
        $('#remember-me').prop('checked', true);
    }
});


function showPopupMessage(message, type = 'danger') {
    const popup = $('#popup-message');
    popup.removeClass('alert-danger alert-success alert-info alert-warning');
    popup.addClass('alert-' + type);
    popup.text(message).fadeIn();

    setTimeout(() => {
        popup.fadeOut();
    }, 3000); // message stays for 3 seconds
}
