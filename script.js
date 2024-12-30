
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const menuContent = document.getElementById("menu-content");


    menuBtn.addEventListener("click", function () {
        if (menuContent.style.display === "block") {
            menuContent.style.display = "none";
        } else {
            menuContent.style.display = "block";
            menuContent.style.animation = "slideIn 0.5s ease forwards";
        }
    });

 
    document.addEventListener("click", function (event) {
        const isClickInside = menuBtn.contains(event.target) || menuContent.contains(event.target);
        if (!isClickInside) {
            menuContent.style.display = "none";
        }
    });
});
