function prank(){

    document.body.style.background = "black";
    document.getElementById("screen").style.display = "block";

    const lines = [
        "Connecting...",
        "Searching account...",
        "Loading files...",
        "Decrypting password...",
        "Uploading memes...",
        "Installing 999 viruses...",
        "Access Granted...",
        "Downloading homework...",
        "ERROR...",
        "😂 Just kidding! Walang na-hack."
    ];

    let i = 0;

    const timer = setInterval(() => {

        document.getElementById("text").innerHTML += lines[i] + "<br>";

        i++;

        if(i >= lines.length){
            clearInterval(timer);
        }

    },700);

}