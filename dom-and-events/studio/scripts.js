function init () {
    const abortMission = document.getElementById("missionAbort");
    const button = document.getElementById("takeoff");
    const landShuttle = document.getElementById("landing");
    const paragraph = document.getElementById("flightStatus");
    const moveUp = document.getElementById("up");
    const moveDown = document.getElementById("down");
    const moveRight = document.getElementById("right");
    const moveLeft = document.getElementById("left");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocketImage = document.getElementById("rocket");

    button.addEventListener('click', () => {
        if (confirm("Confirm that the shuttle is ready for takeoff.") == true) {
            paragraph.innerHTML = "Shuttle in flight!";
            document.getElementById("shuttleBackground").style.backgroundColor = 'blue'
            shuttleHeight.innerHTML = "10,000"
        } else {
            paragraph.innerHTML = "Space shuttle ready for takeoff.";
        }
    });

    landShuttle.addEventListener('click', () => {
        window.alert("The shuttle is landing. Landing gear engaged.")
        paragraph.innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = 'green'
        shuttleHeight.innerHTML = "0"
    })

    abortMission.addEventListener('click', () => {
        if (confirm("Confirm that you want to abort mission.") == true) {
            paragraph.innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = 'green'
            shuttleHeight.innerHTML = "0"
        } else {
            paragraph.innerHTML = "Shuttle in flight!";
        }
    })

    moveUp.addEventListener('click', () => {
        // parseInt("rocket", "10px")
        rocketImage.style.top = "10px";
        // shuttleHeight.innerHTML = "";
    })

    moveDown.addEventListener('click', () => {
        rocketImage.style.down = "10px";
        shuttleHeight.innerHTML = "";
    })

    moveRight.addEventListener('click', () => {
        rocketImage.style.right = "10px";
    })
    moveLeft.addEventListener('click', () => {
        rocketImage.style.left = "10px";
    })

}  

window.addEventListener("load", init);