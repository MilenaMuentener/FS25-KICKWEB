document.addEventListener("DOMContentLoaded", function () {
    // Erstelle den Cursor
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    let rotation = 0; // Startwinkel für die Rotation

    // Cursor mit der Maus bewegen + Rotation
    document.addEventListener("mousemove", function (e) {
        rotation += 3; // Langsame Drehung (5 Grad pro Bewegung)
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursor.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    });

    // Klick-Animation
    document.addEventListener("mousedown", function () {
        cursor.classList.add("click");
    });

    document.addEventListener("mouseup", function () {
        cursor.classList.remove("click");
    });
});

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);
window.onload = updateTime;