// Helper: load all users from localStorage
function getUsers() {
  let users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
}

// Helper: save all users to localStorage
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Show loader
function showLoader(show) {
  document.getElementById("loader").style.display = show ? "block" : "none";
  document.getElementById("signupBtn").disabled = show;
  document.getElementById("loginBtn").disabled = show;
}

// Handle signup
function handleSignup() {
  let email = document.getElementById("email").value.trim();
  let pass = document.getElementById("password").value.trim();
  let msg = document.getElementById("msg");

  if (!navigator.onLine) { msg.innerText = "❌ No Internet Connection"; return; }
  if (!email || pass.length !== 6) { msg.innerText = "⚠ Enter valid email & 6-digit password"; return; }

  let users = getUsers();
  if (users.find(u => u.email === email)) {
    msg.innerText = "❌ User already exists with this email";
    return;
  }

  // Agar naya user hai
  msg.innerText = "";
  showLoader(true);

  setTimeout(() => {
    showLoader(false);
    users.push({ email: email, pass: pass });
    saveUsers(users);
    window.location.href = "welcome.html";  // 🔥 yahan direct redirect
  }, 2000);

  msg.innerText = "";
  showLoader(true);

  setTimeout(() => {
    showLoader(false);
    users.push({ email: email, pass: pass });
    saveUsers(users);
    alert("✅ Signed up successfully! Data saved.");
    document.getElementById("mainForm").reset();
  }, 2000);
}

// Handle login
function handleLogin() {
  let email = document.getElementById("email").value.trim();
  let pass = document.getElementById("password").value.trim();
  let msg = document.getElementById("msg");

  if (!navigator.onLine) { msg.innerText = "❌ No Internet Connection"; return; }
  if (!email || pass.length !== 6) { msg.innerText = "⚠ Enter valid email & 6-digit password"; return; }

  let users = getUsers();
  showLoader(true);

  setTimeout(() => {
    showLoader(false);
    if (users.find(u => u.email === email && u.pass === pass)) {
      window.location.href = "welcome.html";
    } else {
      msg.innerText = "❌ No Data Found (Please Sign Up first)";
    }
  }, 2000);
}

// Attach buttons
document.getElementById("signupBtn").addEventListener("click", handleSignup);
document.getElementById("loginBtn").addEventListener("click", handleLogin);