//Use Case 2: Callback Functions:

    //traditional function
    const numbers = [1,2,3,4,5];

    //usingg a regular function as a callback with Array.prototype.map
    const doubled = numbers.map(function(number){
        return number * 2;
    });

    //arrow function
    const numbersArrow = [1,2,3,4,5];

    //using an arrow function with Array.prototype.map 
    const doubledArrow = numbers.map((number) => number * 2);