let str = 'LaunchCode'
let arr = [1, 5, 'LC101', 'blue', 42]
let reversed = "";

for (let i = 0; i < str.length; i++) {
  reversed = str[i] + reversed;
}
console.log(reversed)