window.addEventListener("DOMContentLoaded", main);

function createNote(text) {
    const plan = document.getElementById("planner");
    let noteElement = document.createElement("div");
    noteElement.classList.add("notes");

    const words = text.trim().split(/\s+/);
    const previewWords = words.slice(0, 3);

    const previewText = previewWords.join(" ");

    noteElement.innerHTML = previewText;


    noteElement.dataset.fullText = text;


    noteElement.addEventListener("click", function() {
        openModal(noteElement.dataset.fullText);
    });

    plan.appendChild(noteElement);
}

function openModal(text) {
    const modal = document.getElementById("modal");
    const noteDetail = document.getElementById("note-detail");
    noteDetail.innerText = text;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function clicked() {
    const input = document.getElementById("in").querySelector("input");
    const text = input.value.trim();
    if (text !== "") {
        createNote(text);
    }
    input.value = "";
}

function keyPress(event) {
    if (event.key === "Enter") {
        clicked();
    }
}

function main() {
    document.getElementById("sent").addEventListener("click", clicked);
    document.getElementById("in").querySelector("input").addEventListener("keypress", keyPress);


    document.getElementById("modal").querySelector(".close").addEventListener("click", closeModal);


    window.addEventListener("click", function(event) {
        const modal = document.getElementById("modal");
        if (event.target === modal) {
            closeModal();
        }
    });
}

