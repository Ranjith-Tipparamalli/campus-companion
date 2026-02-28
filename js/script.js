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
// Smooth transitions ONLY for navigation links
document.querySelectorAll("a[href]").forEach(link => {
    link.addEventListener("click", e => {
        const href = link.getAttribute("href");

        // Ignore in-page anchors
        if (href.startsWith("#")) return;

        e.preventDefault();
        document.querySelector(".page").classList.add("page-exit");

        setTimeout(() => {
            window.location.href = href;
        }, 400);
    });
});
function goHome() {
    document.querySelector(".page").classList.add("page-exit");
    setTimeout(() => {
        window.location = "index.html#home";
    }, 400);
}