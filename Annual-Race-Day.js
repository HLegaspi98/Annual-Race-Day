/* Annual Race Day Project */
console.log('Welcome to your RaceDay personal page! Your race number and time will be determined here in this platform. Have fun and happy racing!');

let raceNumber = Math.floor(Math.random() * 1000); // Random race number generator.

let registerEarly = true; // Boolean value for indicating early registrants, will be used for executing flow control statements.

let runnerAge = 26; // Number indicating runner's age, will be used for executing flow control statements. 

/* Flow control statement that checks for conditions of the runner's age and registration. */
if(runnerAge > 18 && registerEarly == true) {
  raceNumber += 1000; // Indicates early registrants
  console.log(`${raceNumber} will race at 9:30am.`);
}
else if (runnerAge > 18 && registerEarly == false) {
  console.log(`${raceNumber} will race at 11:00am.`);
}
else if (runnerAge < 18) {
  console.log(`${raceNumber} will race at 12:30pm.`);
}
/* else block contains statement for runners who are exactly 18 years old. */
else { 
  console.log(`${raceNumber}, please see the registration desk.`);
}

