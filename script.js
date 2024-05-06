document.addEventListener("DOMContentLoaded", function() {
    const board = document.querySelector(".board");
    const words = [
        "Word 1", "Word 2", "Word 3", "Word 4", "Word 5",
        "Word 6", "Word 7", "Word 8", "Word 9", "Word 10",
        "Word 11", "Word 12", "Word 13", "Word 14", "Word 15",
        "Word 16", "Word 17", "Word 18", "Word 19", "Word 20",
        "Word 21", "Word 22", "Word 23", "Word 24", "Word 25"
    ];

    // Shuffle the array of words
    shuffle(words);

    // Assign agents and bystanders
    const agents = {
        red: 7,
        blue: 8,
        black: 1
    };
    const bystanders = 25 - Object.values(agents).reduce((total, value) => total + value, 0);

    // Fill the board with cells
    let agentKeys = Object.keys(agents);
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = words[i];

        // Assign agent or bystander color class to cells
        let agentIndex = Math.floor(Math.random() * agentKeys.length);
        let agent = agentKeys[agentIndex];
        if (agents[agent] > 0) {
            cell.classList.add(agent);
            agents[agent]--;
            if (agents[agent] === 0) {
                agentKeys.splice(agentIndex, 1);
            }
        } else {
            cell.classList.add("beige");
        }

        // Append cell to board
        board.appendChild(cell);
    }
});

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}