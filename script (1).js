document.addEventListener("DOMContentLoaded", function () {
    const bioText = [
        "Born in darkness on 20th November.",
        "Sixteen years have passed, yet the world still trembles.",
        "Shadows whisper my name, but none dare to speak it.",
        "The abyss does not stare back—I command it."
    ];
    
    let index = 0;
    let container = document.getElementById("bio-text");

    function typeWriter(text, callback) {
        let i = 0;
        let interval = setInterval(() => {
            container.innerHTML += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                setTimeout(callback, 1500); // Pause before scrolling up
            }
        }, 40); // Typing speed
    }

    function addNewLine() {
        if (index < bioText.length) {
            let newLine = document.createElement("div");
            newLine.textContent = "";
            container.appendChild(newLine);

            typeWriter(bioText[index], () => {
                index++;
                if (index >= bioText.length) {
                    setTimeout(resetText, 2000); // Restart after all lines appear
                } else {
                    addNewLine();
                }
            });
        }
    }

    function resetText() {
        container.innerHTML = ""; // Clear all text
        index = 0;
        addNewLine(); // Restart typing
    }

    addNewLine(); // Start the effect
});
