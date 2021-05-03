const userName = ''

userName === 'Jane' ? console.log('true') : console.log('false');

const userQuestion = 'Will I become a werewolf tonight?';

console.log(`The user asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = randomNumber;

switch (eightBall) {
  case 0:
    eightBall = 'prediction here';
    break;
  case 1:
    eightBall = 'case1-another prediction here';
    break;  
  case 2:
    eightBall = 'case2-another prediction here';
    break;
    case 3:
    eightBall = 'case3-another prediction here';
    break;
    case 4:
    eightBall = 'case4-another prediction here';
    break;
    case 5:
    eightBall = 'case5-another prediction here';
    break;
    case 6:
    eightBall = 'case6-another prediction here';
    break;
    case 7:
    eightBall = 'case7-another prediction here';
    break;
}

console.log(`The eight ball answered: ${eightBall}`); 