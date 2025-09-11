window.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");
  const menuBtn = document.querySelector(".menu-btn");

  // Sidebar toggle
  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    sidebar.classList.toggle("active");
    content.classList.toggle("shift");
  });

  // Close sidebar on outside click
  document.addEventListener("click", function (e) {
    if (sidebar.classList.contains("active") &&
      !sidebar.contains(e.target) &&
      !menuBtn.contains(e.target)) {
      sidebar.classList.remove("active");
      content.classList.remove("shift");
    }
  });

  // Close sidebar on ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      sidebar.classList.remove("active");
      content.classList.remove("shift");
    }
  });

  // Dark Mode toggle
  const darkToggle = document.getElementById("darkToggle");
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Profile photo edit
  const uploadPhoto = document.getElementById("uploadPhoto");
  const userPhoto = document.getElementById("userPhoto");
  const removePhoto = document.getElementById("removePhoto");
  const editIcon = document.getElementById("editIcon");
  const editMenu = document.getElementById("editMenu");

  editIcon.addEventListener("click", () => {
    editMenu.style.display = editMenu.style.display === "flex" ? "none" : "flex";
  });

  uploadPhoto.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        userPhoto.src = e.target.result;
        editMenu.style.display = "none";
      };
      reader.readAsDataURL(file);
    }
  });

  removePhoto.addEventListener("click", () => {
    userPhoto.src = "default.png";
    editMenu.style.display = "none";
  });

  // Show logged-in email from sessionStorage (Login integration)
  const emailEl = document.getElementById("userEmail");
  if (sessionStorage.getItem("userEmail")) {
    emailEl.textContent = sessionStorage.getItem("userEmail");
  }
});