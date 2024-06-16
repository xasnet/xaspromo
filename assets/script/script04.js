// Работа с клавиатурой
let lessoninfo = document.querySelector(".lessoninfo");
document.body.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "Enter":
            if (!lessoninfo.classList.contains("active")) {
                lessoninfo.classList.add("active");
            }
            break;
        case "Escape":
            lessoninfo.classList.remove("active");
            break;
    }
})
