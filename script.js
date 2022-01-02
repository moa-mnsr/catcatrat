let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let ratDoorPath = "img/rat.png";
let catHypnoDoorPath = "img/cat-hypno.png";
let catLaptopDoorPath = "img/cat-laptop.png";

let numClosedDoors = 3; 

let openDoor1;
let openDoor2;
let openDoor3;


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

doorImage1.onclick = () => {
        doorImage1.src = openDoor1;
}

doorImage2.onclick = () => {
        doorImage2.src = openDoor2;
}

doorImage3.onclick = () => {
        doorImage3.src = openDoor3;
}

randomRatDoorGenerator();