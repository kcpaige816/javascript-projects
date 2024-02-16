//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, massKg, scores) {
        this.name = name;
        this.massKg = massKg;
        this.scores = scores
        // Array.of(this.scores) = scores;
        // this.scores = Array.of(scores)
    }

    addScore(newScore) {
        this.scores.push(newScore)
    //  addScore(number) {
    //     this.scores.push(number)

        // let scores = Array.of(this.scores);
        // return scores.push();
        
        // let nums = Array.of(CrewCandidate.scores)
        // let nums = CrewCandidate.scores
        // nums.push()
        
        // CrewCandidate.scores.push(number); // returns cannot read prperties of 'push'
        // CrewCandidate.scores = CrewCandidate.scores.push();
        // this.scores = this.scores.push()
        // this.scores.push(number); //returns undefined w/ or w/o number
    }
    
}

let bear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let dog = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
let gator = new CrewCandidate('Glad Gator', 225, [75,78,62]);
// console.log(addScore(gator, 83));
// console.log(bear.addScore(83)); //returns undefined when combined w/ this.scores.push()
// console.log(bear.scores);
bear.addScore(83)
console.log(bear.scores)
// console.log(bear);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.