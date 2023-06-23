function openPlayerConfig(e) {
    const clickedButton = e.target;
    playerConfigOverlay.style.display = "block";
    backdrop.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlay.style.display = "none";
    backdrop.style.display = "none";
    form.firstElementChild.classList.remove("error");
    errorsOutput.textContent = "";
}

function savePlayerConfig(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const enteredPlayerName = formData.get("playername").trim();

    if (!enteredPlayerName) {
        e.target.firstElementChild.classList.add("error");
        errorsOutput.textContent = "Please enter a valid name";
        return;
    }
}
