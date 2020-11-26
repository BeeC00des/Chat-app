// // application one
// console.log("Start program.");
// alert("you're back for more");
// document.write("give this a bigshot");
// console.log("End program.");

// // application two
// var secondPerMin = 60;
// var minPerHour = 60;
// var hourPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerMonth = 4;
// var weeksPerYear = 52;
// var monthsPerYear = 12;
// var yearsAlive = 22;

// var secondsPerDay = secondPerMin * minPerHour * hourPerDay;
// document.write('<h1>there are ' + secondsPerDay +' seconds in a day</h1>');

// var secondsPerWeek = secondsPerDay * daysPerWeek;
// document.write('<h2>there are ' + secondsPerWeek+' seconds in a Week</h2>');

// var secondsPerYear = secondsPerWeek *  weeksPerYear;
// document.write('<h3>there are ' + secondsPerYear +' seconds in a year</h3>');

// var secondsPerYearsAlive = secondsPerYear * yearsAlive ;
// document.write('<h4>there are ' + secondsPerYearsAlive +'  seconds in years Alive</h4>');


// // application three

// /* 
// Quiz application with conditional statement only
// set result of answer intialy to zero,
// make increment when correct in an if statement
// show total result
// test and show reward
// */
// var trackAnswer = 0;
// var question1 = prompt("what course are you studying");
// var Answer1 = "computer science"
// if (question1 === Answer1){
//     document.write("<h1>Your answer is </h1>" + question1+ " <h2>correct answer is: </h2>" + Answer1 );
//     trackAnswer += 1;
//       }else {
//     document.write("<h1>Your answer is</h1>" + question1+ "<h2>it's wrong,Retry! </h2>");
//       }
// var question2 = prompt("what school do you attend");
// var Answer2 = "FUTA"
// if (question2 === Answer2){
//     document.write("<h1>Your answer is </h1>" + question2+ " <h2>correct answer is: </h2>" + Answer2 );
//     trackAnswer += 1;
//       }else {
//     document.write("<h1>Your answer is</h1>" + question2+ "<h2>it's wrong,Retry! </h2>");
//       }
// var question3 = prompt("who is your lecturer");
// var Answer3 = "Dr dave"
// if (question3 === Answer3){
//     document.write("<h1>Your answer is </h1>" + question3 + " <h2>correct answer is: </h2>" + Answer3 );
//     trackAnswer += 1;
//       }else {
//     document.write("<h1>Your answer is</h1>" + question3 + "<h2>it's wrong,Retry! </h2>");
//       }
// var question4 = prompt("what platform do you use");
// var Answer4 = "Tree house"
// if (question4 === Answer4){
//     document.write("<h1>Your answer is </h1>" + question4 + " <h2>correct answer is: </h2>" + Answer4 );
//     trackAnswer += 1;
//       }else {
//     document.write("<h1>Your answer is</h1>" + question4 + "<h2>it's wrong,Retry! </h2>");
//       }
// var question5 = prompt("what programming language is this");
// var Answer5 = "javascript"
// if (question5 === Answer5){
//     document.write("<h1>Your answer is </h1>" + question5 + " <h2>correct answer is: </h2>" + Answer5 );
//     trackAnswer += 1;
//       }else {
//     document.write("<h1>Your answer is</h1>" + question5 + "<h2>it's wrong,Retry! </h2>");
//       }
// document.write("<h1>Your score is</h1> " + trackAnswer + " / 5");
// alert( " Your score is " + trackAnswer + " / 5");
// if (trackAnswer==5){
//     alert("you won a gold medal");
// }else if (trackAnswer == 3 || trackAnswer == 4){
//      alert("you won a silver medal");
// }else if (trackAnswer ==2 || trackAnswer == 1){
//     alert("you won a brozen medal");
// }else if (trackAnswer == 0){
//     alert("you won nothing");
// }


// //application four 

// /*
// this function checks if the form field is empty

// */

// /*function isEmailEmpty (){
//     var field = document.getElementById('email')
//     if(field.value == ''){
//       alert("this input field is required!")
//     }else {
//       return "input detail entered"
//     }
// }

// isEmailEmpty();

// */
// function isEmailEmpty (){
//   var field = document.getElementById('email')
//   if(field.value == ''){
//     return true
//   }else {
//     return false
//   }
// }
// var value = isEmailEmpty();

// if (value == true){
//   alert("please enter yout email")
// }else{
//   alert("it's nice that you entered your email")
// }



// for loop
var html ='';
var red;
var green;
var blue;
var rgbcolor;

for (var i = 1; i <= 10; i += 1 ){
    red = Math.floor(Math.random()* 256);
    green = Math.floor(Math.random()* 256);
    blue = Math.floor(Math.random()* 256);
    rgbcolor = 'rgb[' + red + ','+ green +','+ blue + ']';
    // html += '<div style=" background-color:'+ rgbcolor +'; width:100px; height:100px; display:inline-block; border-radius:100%; text-align:center;">' + i + '</div>';
}
document.write(html);