"use strict";

const STORAGE_KEYS = {
  user: "qaDemoUser",
  authenticated: "qaDemoAuthenticated",
  flashMessage: "qaDemoFlashMessage"
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const PHONE_PATTERN = /^[0-9+()\-\s]{7,20}$/;

function getUser() {
  const storedUser = localStorage.getItem(STORAGE_KEYS.user);

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch {
    localStorage.removeItem(STORAGE_KEYS.user);
    return null;
  }
}

function saveUser(user) {
  localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
}

function isAuthenticated() {
  return localStorage.getItem(STORAGE_KEYS.authenticated) === "true";
}

function setAuthenticated(value) {
  localStorage.setItem(STORAGE_KEYS.authenticated, String(value));
}

function showMessage(type, text) {
  const message = document.querySelector("#form-message");

  if (!message) {
    return;
  }

  message.textContent = text;
  message.className = `message ${type}`;
  message.hidden = false;
}

function clearMessage() {
  const message = document.querySelector("#form-message");

  if (message) {
    message.textContent = "";
    message.className = "message";
    message.hidden = true;
  }
}

function showFieldError(inputId, text) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(`${inputId}-error`);

  if (input) {
    input.setAttribute("aria-invalid", "true");
  }

  if (error) {
    error.textContent = text;
  }
}

function clearFieldError(inputId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(`${inputId}-error`);

  if (input) {
    input.removeAttribute("aria-invalid");
  }

  if (error) {
    error.textContent = "";
  }
}

function resetFormErrors(fieldIds) {
  clearMessage();
  fieldIds.forEach(clearFieldError);
}

function requireValue(inputId, label) {
  const value = document.getElementById(inputId).value.trim();

  if (!value) {
    showFieldError(inputId, `${label} is required.`);
    return null;
  }

  return value;
}

function validateEmail(inputId) {
  const email = requireValue(inputId, "Email");

  if (!email) {
    return null;
  }

  if (!EMAIL_PATTERN.test(email)) {
    showFieldError(inputId, "Enter a valid email address.");
    return null;
  }

  return email.toLowerCase();
}

function redirectToLogin() {
  window.location.replace("login.html");
}

function protectPage() {
  if (document.body.hasAttribute("data-protected-page") && (!isAuthenticated() || !getUser())) {
    redirectToLogin();
    return false;
  }

  return true;
}

function handleRegistration() {
  const form = document.getElementById("register-form");

  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    resetFormErrors(["full-name", "email", "password", "confirm-password"]);

    const fullName = requireValue("full-name", "Full Name");
    const email = validateEmail("email");
    const password = requireValue("password", "Password");
    const confirmPassword = requireValue("confirm-password", "Confirm Password");

    if (password && !PASSWORD_PATTERN.test(password)) {
      showFieldError("password", "Password must be at least 8 characters and include uppercase, lowercase, and a number.");
    }

    if (password && confirmPassword && password !== confirmPassword) {
      showFieldError("confirm-password", "Passwords do not match.");
    }

    if (!fullName || !email || !password || !confirmPassword || !PASSWORD_PATTERN.test(password) || password !== confirmPassword) {
      showMessage("error", "Please correct the highlighted fields before registering.");
      return;
    }

    const existingUser = getUser();

    if (existingUser && existingUser.email === email) {
      showFieldError("email", "An account with this email already exists.");
      showMessage("error", "Use a different email address or log in to your existing account.");
      return;
    }

    saveUser({
      name: fullName,
      email,
      password,
      phone: "",
      address: ""
    });
    setAuthenticated(false);
    form.reset();
    showMessage("success", "Registration successful. You can now log in.");
  });
}

function handleLogin() {
  const form = document.getElementById("login-form");

  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    resetFormErrors(["email", "password"]);

    const email = validateEmail("email");
    const password = requireValue("password", "Password");

    if (!email || !password) {
      showMessage("error", "Please correct the highlighted fields before logging in.");
      return;
    }

    const user = getUser();

    if (!user || user.email !== email || user.password !== password) {
      showMessage("error", "Email or password is incorrect. Register an account if you do not have one yet.");
      return;
    }

    setAuthenticated(true);
    localStorage.setItem(STORAGE_KEYS.flashMessage, "Login successful. Welcome to your dashboard.");
    window.location.assign("dashboard.html");
  });
}

function populateDashboard() {
  if (!document.getElementById("welcome-name")) {
    return;
  }

  const user = getUser();

  if (!user) {
    return;
  }

  document.getElementById("welcome-name").textContent = user.name;
  document.getElementById("summary-name").textContent = user.name;
  document.getElementById("summary-email").textContent = user.email;

  const dashboardMessage = document.getElementById("dashboard-message");
  const flashMessage = localStorage.getItem(STORAGE_KEYS.flashMessage);

  if (dashboardMessage && flashMessage) {
    dashboardMessage.textContent = flashMessage;
    dashboardMessage.className = "message success";
    dashboardMessage.hidden = false;
    localStorage.removeItem(STORAGE_KEYS.flashMessage);
  }
}

function handleProfile() {
  const form = document.getElementById("profile-form");

  if (!form) {
    return;
  }

  const user = getUser();

  if (user) {
    document.getElementById("profile-name").value = user.name || "";
    document.getElementById("profile-email").value = user.email || "";
    document.getElementById("phone").value = user.phone || "";
    document.getElementById("address").value = user.address || "";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    resetFormErrors(["profile-name", "profile-email", "phone", "address"]);

    const name = requireValue("profile-name", "Name");
    const email = validateEmail("profile-email");
    const phone = requireValue("phone", "Phone");
    const address = requireValue("address", "Address");

    if (phone && !PHONE_PATTERN.test(phone)) {
      showFieldError("phone", "Enter a valid phone number.");
    }

    if (!name || !email || !phone || !address || !PHONE_PATTERN.test(phone)) {
      showMessage("error", "Please correct the highlighted fields before saving your profile.");
      return;
    }

    const currentUser = getUser();

    if (!currentUser) {
      redirectToLogin();
      return;
    }

    saveUser({
      ...currentUser,
      name,
      email,
      phone,
      address
    });
    showMessage("success", "Profile saved successfully.");
  });
}

function handleLogout() {
  const logoutButton = document.getElementById("logout-button");

  if (!logoutButton) {
    return;
  }

  logoutButton.addEventListener("click", () => {
    setAuthenticated(false);
    window.location.assign("login.html");
  });
}

function initializeApp() {
  if (!protectPage()) {
    return;
  }

  handleRegistration();
  handleLogin();
  populateDashboard();
  handleProfile();
  handleLogout();
}

document.addEventListener("DOMContentLoaded", initializeApp);
