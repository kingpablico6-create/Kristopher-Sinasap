const noBtn = document.getElementById("noBtn");

function moveButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Tatakbo ang NO kapag nilapitan ng mouse
noBtn.addEventListener("mouseover", moveButton);

// Tatakbo rin kapag susubukang i-click
noBtn.addEventListener("click", function(e) {
    e.preventDefault();
    moveButton();
});

function yesAnswer() {
    document.getElementById("message").innerHTML =
        "❤️ HALAAA SABI qna ee hihi YEs pipindutin mo I LOVE YOU! ❤️";
}