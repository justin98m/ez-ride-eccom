import bikesUp from  '../public/bikesUpHero.jpg';
import nyBikeRace from '../public/nyBikeRaceHero.jpeg';
import trailBike from '../public/hero1.jpeg'
let images  = [bikesUp,nyBikeRace,trailBike];

let directionLeft = document.querySelector('.left');
let directionRight = document.querySelector('.right');
let currentImg = document.querySelector('.currentImg');

let curPos = 0;
//defualt image
currentImg.src = images[curPos];


directionLeft.addEventListener('click',() => changePhoto('left'));
directionRight.addEventListener('click',() => changePhoto('right'));


function changePhoto(direction){
  console.log(direction);
  if(direction === 'left'){
    curPos--
  } else {
    curPos++
  }
  if(curPos > 2){
    curPos = 0;
  } else if (curPos < 0){
    curPos = 2
  }
  currentImg.src = images[curPos];

}
