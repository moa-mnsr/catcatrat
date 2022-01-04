// I'm pretty sure this works the way you want it to now, let me know if it doesnt! 
// Normally, it is rude behavior to leave all these logs in but I left them so that you could inspect in the console and see what I saw and how I debugged this. I feel like one of the things MOST left out of JS education is that console.log is for you to figure out what things are exactly returning, and when if statements are passing or failing, and just generally to get a clear image of the flow of your application so you can pinpoint where the problem is. 

let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');

let startButton = document.getElementById('start');

let ratDoorPath = "rat.svg";
let catHypnoDoorPath = "cat-hypno.svg";
let catLaptopDoorPath = "cat-laptop.svg";
let closedDoorPath = "door.svg"

let numClosedDoors = 3; 

let openDoor1;
let openDoor2;
let openDoor3;

let currentlyPlaying = true;
let score = 0;
let highScore = 0;
let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');
currentStreak.innerHTML = score;
bestStreak.innerHTML = highScore;

const isClicked = (door) => {
    // changed this to use .includes instead of === because it wasn't entering the if statement ever, explanation below
    if (door?.src.includes(closedDoorPath)) {
      return false;
    } else {
      return true;
    }
  }
  
  const isRat = (door) => {
    //changed == on the following line to use .includes -- you can see from the console.log I put in below that door.src was returning the entire hyperlink -- for me, using live server on VS code, it was returning http://127.0.0.1:5500/rat.svg, but not just rat.svg, so it was never entering this if statement which would allow you to lose the game // same change was made above.
    // there is maybe a simpler way to do this which codecademy wanted you to do if it didn't teach you .includes, but I'm not sure what it is and my 2 minutes of googling didn't give me an answer  
    console.log('is Rat', door.src)
    if (door?.src.includes(ratDoorPath)) {
      console.log('rat door')
      console.log(door, 'door')
      return true;
    } else {
      return false;
    }
  }
  
  const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
      gameOver('win');
    } else if (isRat(door)) {
      gameOver('lose');
}
  }

const randomRatDoorGenerator = () => {
    ratDoor = Math.floor(Math.random() * numClosedDoors);
    if (ratDoor === 0) {
       openDoor1 = ratDoorPath;
       openDoor2 = catHypnoDoorPath;
       openDoor3 = catLaptopDoorPath;
      } else if (ratDoor === 1) { 
        openDoor2 = ratDoorPath;
        openDoor1 = catHypnoDoorPath;
        openDoor3 = catLaptopDoorPath;
    } else { (ratDoor === 2) 
        openDoor3 = ratDoorPath;
        openDoor1 = catHypnoDoorPath;
        openDoor2 = catLaptopDoorPath;
      }
} 

door1.onclick = () => {
  console.log('door 1 click')
  console.log('is clicked', isClicked(door1))
  // the reason doors weren't opening here is because we weren't passing a parameter into isClicked
    if(currentlyPlaying && !isClicked(door1)) {
      console.log('currently opening door 1')
        door1.src = openDoor1;
        playDoor(door1);
    }
}

door2.onclick = () => {
    if(currentlyPlaying && !isClicked(door2)) {
        door2.src = openDoor2;
        playDoor(door2);
    }
}

door3.onclick = () => {
    if(currentlyPlaying && !isClicked(door3)) {
        door3.src = openDoor3;
        playDoor(door3);
    }
}

const startRound = () => {
  // Reset all the doors to be closed
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
  randomRatDoorGenerator();
}

startButton.onclick = () => {
    console.log('start button clicked')
    startRound();
}


const gameOver = (str) => {
  if(str === 'win') {
    startButton.innerHTML = 'You win! Play again?';
    getYourScore();
  } else {
    startButton.innerHTML = "Game over! Play again?"
    score = 0;
    currentStreak.innerHTML = score;
  }
  currentlyPlaying = false;
}

const getYourScore = () => {
  score++;
  currentStreak.innerHTML = score;
  if (score > highScore) {
    highScore = score;
    bestStreak.innerHTML = highScore;
  }
}

startRound();