// this step is new to me, remember its here because it needs to use the second arugment, since the first 2 are the command line 
const alarms = process.argv.slice(2);

// Convert arguments to numbers and filter based on conditions
const times = alarms
  .map(Number) // Convert to numbers
  .filter(time => !isNaN(time) && time >= 0) // ignores negative numbers and not a number  -edge cases
  .sort((a, b) => a - b); // Sort in ascending order, important cuse if there are not in order harder to code 

// Cwhat if time = 0 
if (times.length === 0) {
  console.log("No valid alarms provided.");
  process.exit();
}

// Function to beep
const beep = (seconds) => {
  setTimeout(() => {
    process.stdout.write('\x07'); // This triggers the beep sound
    console.log(`Beep! ${seconds} seconds`);
  }, seconds * 1000); 
};

// Set timers for each valid alarm
times.forEach(time => beep(time));