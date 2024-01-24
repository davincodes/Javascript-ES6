//Use Case 4: Lexical 'this' Binding

//Traditional

function Timer(){
    var self = this; //store a reference to the timer object.
    this.seconds = 0;

    setInterval(function(){
        //'this' does not refer to the Timer Object, so we use 'self'\
        self.seconds++;
        console.log(self.seconds);
    }, 1000);
}

const timer = new Timer();

//Arrow

function TimerArrow(){
    this.seconds = 0;

    setInterval(() => {
        //'this' refers to the Timer Arrow object.
        this.seconds++;
        console.log(this.seconds);
    }, 1000);
}