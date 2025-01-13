class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        console.log('start timer');
        this.tick();//start timer immediately
        this.interval = setInterval(this.tick, 1000);

    }

    pause = () => {
        console.log('pause timer')
        clearInterval(this.interval);
    }

    onDurationchange(){

    }

    tick= () => {
        console.log('tick')
    }
}
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);


//event listener for start button

//draw full border around the timer
//start countdown timer
//each time the timer counts down, update the border to show the time remaining
//when timer reaches 0, stop timer and display message
//reset the border
//reset the timer
//display a timer with animated border around it
//show animated border around the timer