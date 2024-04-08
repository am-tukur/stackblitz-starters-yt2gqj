addEventListener('load', () => {
    console.log("attempt...")
    const kcHeader = document.getElementById("kc-header");
    kcHeader.remove();
    const kcPageTitle = document.getElementById("kc-page-title");
    kcPageTitle.remove();
    console.log("removed...")
});

addEventListener("submit", () => {
    const spinner = document.getElementById("login-spinner");
    spinner.removeAttribute("hidden");
});
