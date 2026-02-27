function submitForm() {
    alert("Message Sent Successfully!");
    return false;
}
function login() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (user && pass) {
        localStorage.setItem("student", user);
        window.location = "dashboard.html";
    } else {
        alert("Enter Login Details");
    }
}

window.onload = function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
};