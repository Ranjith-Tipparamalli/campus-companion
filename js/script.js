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
// Smooth page exit animation
document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("click", e => {
        const link = el.getAttribute("href") || el.getAttribute("onclick");

        if (link && !link.includes("#")) {
            e.preventDefault();
            document.querySelector(".page").classList.add("page-exit");

            setTimeout(() => {
                if (el.tagName === "A") {
                    window.location = el.href;
                } else {
                    el.click();
                }
            }, 400);
        }
    });
});

function goHome() {
    document.querySelector(".page").classList.add("page-exit");
    setTimeout(() => {
        window.location = "index.html#home";
    }, 400);
}