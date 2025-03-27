document.addEventListener("DOMContentLoaded", function () {
    const bioText = "Born in darkness on 20th November. Sixteen years have passed, yet the world still trembles.";
    let i = 0;
    function typeWriter() {
        if (i < bioText.length) {
            document.getElementById("bio-text").innerHTML += bioText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
});
