
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart() {
        console.log('timer started');
    },
    onTick() {
        circle.setAttribute('stroke-dashoffset', currentOffset);
        currentOffset = currentOffset - 50;
    },
    onComplete() {
        console.log('timer is completed');
    }
});


//event listener for start button

//draw full border around the timer
//start countdown timer
//each time the timer counts down, update the border to show the time remaining
//when timer reaches 0, stop timer and display message
//reset the border
//reset the timer
//display a timer with animated border around it
//show animated border around the timer