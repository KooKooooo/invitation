document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeBtn");

    closeBtn.addEventListener("click", function() {
        overlay.style.display = "none";
    });
});
