document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const flap = document.getElementById("flap");
    const letter = document.getElementById("letter");
    const openButton = document.getElementById("openButton");
    const closeButton = document.getElementById("closeButton");

    openButton.addEventListener("click", () => {
        flap.style.transform = "rotateX(-180deg)";
        letter.style.transform = "translateY(0)";
        openButton.style.display = "none";
        closeButton.style.display = "block";
    });

    closeButton.addEventListener("click", () => {
        flap.style.transform = "rotateX(0deg)";
        letter.style.transform = "translateY(-100%)";
        closeButton.style.display = "none";
        openButton.style.display = "block";
    });

    envelope.addEventListener("mouseover", () => {
        if (flap.style.transform === "rotateX(-180deg)") {
            closeButton.style.opacity = "1";
        }
    });

    envelope.addEventListener("mouseout", () => {
        closeButton.style.opacity = "0";
    });
});
