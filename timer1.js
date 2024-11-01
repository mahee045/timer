// this step is new to me, remember its here because it needs to use the second arugment, since the first 2 are the command line 
const alarms = process.argv.slice(2);

// Convert arguments to numbers and filter based on conditions
const times = alarms
  .map(Number) // reads input as number 
  .filter(time => !isNaN(time) && time >= 0) // ignores negative numbers and not a number  -edge cases
  .sort((a, b) => a - b); // Sort in ascending order, important cuse they need to play off in order  

// what if no argument is entered on node 
if (times.length === 0) {
  console.log("You didn't enter an alarm");
  process.exit();
}

// beeping function
const beep = (seconds) => {
  setTimeout(() => {
    process.stdout.write('\x07'); // This triggers the beep sound provided on compas
    console.log(`Beep! ${seconds} seconds`);
  }, seconds * 1000); 
};

// for every alarm.. for each argument
times.forEach(time => beep(time));