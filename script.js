document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll to Contact Section
    document.getElementById("contact-link").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });

    // Login Popup
    let loginPopup = document.getElementById("login-popup");
    let loginBtn = document.getElementById("login-btn");
    let closeBtn = document.getElementById("close-popup");

    loginBtn.addEventListener("click", function () {
        loginPopup.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
        loginPopup.style.display = "none";
    });

    // Close popup when clicking outside of it
    window.addEventListener("click", function (e) {
        if (e.target === loginPopup) {
            loginPopup.style.display = "none";
        }
    });
});
function openLoginPopup() {
    document.getElementById("loginPopup").style.display = "block";
}

function closeLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
}