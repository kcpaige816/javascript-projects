function init () {
    const abortButton = document.getElementById("missionAbort");
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const statusParagraph = document.getElementById("flightStatus");
    const moveUp = document.getElementById("up");
    const moveDown = document.getElementById("down");
    const moveRight = document.getElementById("right");
    const moveLeft = document.getElementById("left");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocketImage = document.getElementById("rocket");

    takeoffButton.addEventListener('click', () => {
        if (confirm("Confirm that the shuttle is ready for takeoff.") == true) {
            statusParagraph.innerHTML = "Shuttle in flight!";
            document.getElementById("shuttleBackground").style.backgroundColor = 'blue'
            shuttleHeight.innerHTML = "10,000"
        } else {
            statusParagraph.innerHTML = "Space shuttle ready for takeoff.";
        }
    });

    landingButton.addEventListener('click', () => {
        window.alert("The shuttle is landing. Landing gear engaged.")
        statusParagraph.innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = 'green'
        shuttleHeight.innerHTML = "0"
    })

    abortButton.addEventListener('click', () => {
        if (confirm("Confirm that you want to abort mission.") == true) {
            statusParagraph.innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = 'green'
            shuttleHeight.innerHTML = "0"
        } else {
            statusParagraph.innerHTML = "Shuttle in flight!";
        }
    })

    moveUp.addEventListener('click', () => {
        rocketImage.style.marginTop = '10px';
        // shuttleHeight.innerHTML = "";
    })

    // moveDown.addEventListener('click', () => {
    //     rocketImage.style.marginDown = '-10px';
    //     shuttleHeight.innerHTML = "";
    // })

    // moveRight.addEventListener('click', () => {
    //     rocketImage.style.right = "10px";
    // })
    // moveLeft.addEventListener('click', () => {
    //     rocketImage.style.left = "10px";
    // })

}  

window.addEventListener("load", init);