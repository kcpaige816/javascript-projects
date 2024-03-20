
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered:["Web Development", 
    "Data Analysis", "Liftoff"],
    launchOutput(num) {

    let onlyTwo = "Launch!"
    let onlyThree = "Code!"
    let onlyFive = "Rocks!"
    let twoThree = "LaunchCode!"
    let threeFive = "Code Rocks!"
    let twoFive = "Launch Rocks!"
    let twoThreeFive = "LaunchCode Rocks!"
    let notDivisible = "Rutabagas! That doesn't work."

        if (num % 2 === 0) {
            return onlyTwo;
        } else if (num % 3 === 0) {
            return onlyThree;
        } else if (num % 5 === 0) {
            return onlyFive;
        } else if (num % 2 === 0 && num % 3 === 0) {
            return twoThree
        } else if (num % 3 === 0 && num % 5 === 0) {
            return threeFive;
        } else if (num % 2 === 0 && num % 5 === 0) {
            return twoFive;
        } else if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
            return twoThreeFive
        } else {
            return notDivisible
        }
    }

};

module.exports = launchcode;

