function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'green';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '';
    });

    button.addEventListener('click', () => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });
    
    missionAbort.addEventListener("mouseover", () => {
        missionAbort.style.backgroundColor = 'red';
    });

    missionAbort.addEventListener("mouseout", () => {
        missionAbort.style.backgroundColor = '';
    });

    missionAbort.addEventListener('click', () => {
        if (confirm("Are you sure you want to abort the mission?") == true) {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
        } else {
            paragraph.innerHTML = 'Houston! We have liftoff!';
        }
    })
        
}

window.addEventListener("load", init);
