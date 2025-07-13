
// === Dynamic Greeting ===
const hour = new Date().getHours();
const welcomeEl = document.getElementById('welcomeMessage');
if (welcomeEl) {
  const greet = hour < 12 ? 'Good Morning ☀️' :
                hour < 18 ? 'Good Afternoon 🌞' :
                            'Good Evening 🌙';
  welcomeEl.textContent = greet;
}

// === Theme Switcher ===
function changeTheme() {
  const hue = Math.floor(Math.random() * 360);
  document.body.style.backgroundColor = `hsl(${hue} 30% 15%)`;
}

// === Contact Form ===
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('contactMsg').classList.remove('hidden');
    contactForm.reset();
  });
}

// === Login Validation ===
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass  = document.getElementById('loginPass').value;
    const msgEl = document.getElementById('loginMsg');
    if (email === 'admin@efootballhub.com' && pass === 'play2025') {
      window.location.replace('index.html');
    } else {
      msgEl.textContent = 'Invalid credentials. Try admin@efootballhub.com / play2025 😉';
      msgEl.classList.remove('hidden');
    }
  });
}

// === Signup Validation & Strength Bar ===
const passInput   = document.getElementById('signPass');
const confirmPass = document.getElementById('signConfirm');
const strengthBar = document.getElementById('strengthBar');
const signForm    = document.getElementById('signupForm');
if (passInput && confirmPass && strengthBar && signForm) {
  passInput.addEventListener('input', () => {
    const val = passInput.value;
    let strength = 0;
    if (val.match(/[a-z]/)) strength += 1;
    if (val.match(/[A-Z]/)) strength += 1;
    if (val.match(/[0-9]/)) strength += 1;
    if (val.length >= 8)   strength += 1;

    strengthBar.style.width = strength * 25 + '%';
    const colors = ['#dc2626', '#f97316', '#eab308', '#16a34a'];
    strengthBar.style.background = colors[strength - 1] || 'transparent';
  });

  signForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msgEl = document.getElementById('signMsg');
    if (passInput.value !== confirmPass.value) {
      msgEl.textContent = 'Passwords do not match.';
      msgEl.classList.remove('hidden');
      return;
    }
    alert(`Welcome, ${document.getElementById('signEmail').value}! Your account was created.`);
    window.location.replace('login.html');
  });
}
