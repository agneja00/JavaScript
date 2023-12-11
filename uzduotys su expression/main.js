/*
 #Ternary pratimai

 1. Let's say we have a variable `const age = 17;`
    Create a variable `votingText`, that is determined by a ternary expression:
    - if age is below 18, voting text is a string "You are welcome to vote!"
    - if age is equal or greater than 18, "You are unable to vote yet!"
*/

const age = 17;

let voitingText;
if (age < 18) {
    voitingText = "You are unable to vote yet!"
} else {
    voitingText = "You are welcome to vote!";
}

const t_votingText = 
age < 18 ? "You are unable to vote yet!" : "You are welcome to vote!";

// salyga ? true : else


// 2. Write a chained ternary expression from this:

//let message;
//if (login == 'Employee') {
//message = 'Hello';
//} else if (login == 'Director') {
//message = 'Greetings';
//} else if (login == '') {
//message = 'No login';
//} else {
//message = '';
//} 
// 2 TASK

const login = "Employee";
let message;
if (login == "Employee") {
    message = "Hello";
} else if (login == "Director") {
    message = "Greetings";
} else if (login == "") {
    message = "No login";
} else {
    message = "";
}

const t_message = 
login == "Employee" // salyga 1
? "Hello" // 1 salygos atsakymas
: login == "Director" // s. 2
? "Greetings" // 2. s. atsk.
: login == "" // s. 3
? "No login" // 3 s. ats.
: ""; //else

// console.log(t_message)



