let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let MarsdistanceKm = 225000000;
let MoondistanceKm = 384400;
const milesPerKm = 0.621;

console.log(typeof 'determination')
console.log(typeof 17500)
console.log(typeof 225000000)
console.log(typeof 384400)
console.log(typeof 0.621)

let MilestoMars = MarsdistanceKm * milesPerKm
let HourstoMars = MilestoMars / shuttleSpeedMph;
let DaystoMars = HourstoMars / 24;

console.log(shuttleName + " will take " + DaystoMars + " days to reach Mars. ");

let MilestoMoon = MoondistanceKm * milesPerKm;
let HourstoMoon = MilestoMoon / shuttleSpeedMph;
let DaystoMoon = HourstoMoon / 24;
console.log(shuttleName + " will take " + DaystoMoon + "days to reach Moon. ")

// Print the results of the trip to the moon below