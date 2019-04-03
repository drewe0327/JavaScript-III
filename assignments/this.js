/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - This is kida like a default to the "this" keyword to the window or console object.
* 2. Implicit Binding - This is when the "this" keyword is use with dot notation to access properties on an object.
* 3. New Binding - This refers to using the "this" keyword for a specific instance of an object that is created and returned by the constructor function
* 4. Explicit Binding - This is used when using the call or apply method.
*
* write out a code example of each explanation above
*/

// Principle 1
function starTrek(name){
    console.log(this);
    return name;
}

starTrek("Captain kirk");

// code example for Window Binding

// Principle 2
 
const ussEnterprise = {
    "greeting": "Welcome Captain Kirk",
     "warpSpeed": function (string) {
         console.log(`${this.greeting}. It is time! ${string}`);
         console.log(this);
     }
}

ussEnterprise.warpSpeed("For warp speed zulu!")
// code example for Implicit Binding

// Principle 3

// code example for New Binding
function firePhaser(attack){
    this.command = "Fire"
    this.attack = attack;
    this.outcome = function () {
        console.log(this.command + this.attack);
        console.log(this);
    };
}

const torpedo = new firePhaser("torpedo");
const phaser = new firePhaser("phaser");

// Principle 4

// code example for Explicit Binding

function firePhaser(attack) {
    this.command = "Fire"
    this.attack = attack;
    this.outcome = function () {
        return `prepare to ${this.command}`;
       
    }
    console.log(this.command + this.attack);
    console.log(this);
}
    const Kirk = new firePhaser("Status");
    const Scotty = new firePhaser("Im not a doctor Jim");
    
   