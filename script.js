function openMenu() {
    document.querySelector(".dropdown").style.transform = "translateY(0)";
}

function closeMenu() {
    document.querySelector(".dropdown").style.transform = "translateY(-500px)";
}
function openLink(url) {
    window.open(url, "_blank");
}