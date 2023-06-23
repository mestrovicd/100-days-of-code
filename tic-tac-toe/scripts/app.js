const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");

const editPlayerOneBtn = document.getElementById("edit-p1");
const editPlayerTwoBtn = document.getElementById("edit-p2");
const cancelConfigBtn = document.getElementById("cancel-config-btn");

editPlayerOneBtn.addEventListener("click", openPlayerConfig);
editPlayerTwoBtn.addEventListener("click", openPlayerConfig);

cancelConfigBtn.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);
