let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 19;

if (age > 18 && registeredEarly === true){
  console.log(raceNumber + 'race at 9:30 am')
}else if(age > 18 && registeredEarly === false){
  console.log(raceNumber + 'race at 11:00 am')
}else if (age < 18){
  console.log(raceNumber + 'Youth registrants run at 12:30 pm (regardless of registration)')
}