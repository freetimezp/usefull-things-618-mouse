document.addEventListener("mousemove", function (e) {
    let body = document.querySelector("body");
    let circle = document.createElement("span");
    circle.style.left = -50 + e.offsetX + "px";
    circle.style.top = -50 + e.offsetY + "px";
    body.append(circle);
    setTimeout(function () {
        circle.remove();
    }, 3000);
});
