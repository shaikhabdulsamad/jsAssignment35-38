//********************** Chapter : 35-38 ********************** */


//********************** Task : 01 ********************** */

// function abc(){
//     var date = new Date();
//     document.write(date)
// }

// abc();


//********************** Task : 02 ********************** */

// function name(){
//     var firstName = prompt("Enter your first name")
//     var lastName = prompt("Enter your last name")

//     document.write(firstName + " " + lastName)
// }

// name()


//********************** Task : 03 ********************** */

// function sum(){
//     var firstNum = +prompt("Enter your first name")
//     var secondNum = +prompt("Enter your last name")

//     document.write(firstNum + secondNum)
// }

// sum()


//********************** Task : 04 ********************** */

// function abc(num1, opr, num2) {
//     if (opr === "+") {
//         return num1 + num2
//     }
//     else if (opr === '-') {
//         return num1 - num2
//     } else {
//         return 0
//     }
// }
// var n1 = +prompt("Enter first num1")
// var n2 = +prompt("Enter first num2")
// var oprt = prompt("Enter operator")
// var a = abc(n1, oprt, n2);


// alert(a)


//********************** Task : 05 ********************** */

// function sumOfSquares(num) {

//     for(var i=0; i <= num; i++){
//         var sum = i*i;
// }
//      document.write("The sum of squares for numbers " +num+ " is " +sum ) ;
// }

// var num = +prompt("Enter a number:");
// sumOfSquares(num);


//********************** Task : 06 ********************** */



//********************** Task : 07 ********************** */

// function count(num1,num2){
  
//     for(var i = num1; i <= num2; i++){
//         document.write(i + "<br>")
//     }
// }

// var startNum = +prompt("Enter start number")
// var endNum = +prompt("Enter end number")

// count(startNum,endNum);



//********************** Task : 08 ********************** */


// function calcHypo(num1,num2){

//     var hypo = num1 + num2

//     function calcSquare(){
//        var square = hypo* hypo
//         document.write("Hypotenuse <sup>2</sup> = " + square )
//     }

//     document.write("Base = " + num1 + "<br>" +"Perpendicular = "+ num2 + "<br>" )
//     document.write("Hypotenuse = " + hypo + "<br>" )
//     calcSquare();
// }
// var base = +prompt("Enter value of base")
// var perpendicular = +prompt("Enter value of perpendicular")
// calcHypo(base,perpendicular)


//********************** Task : 09 ********************** */

// function area(num1,num2){
// var a = num1*num2;
// document.write("Area of triangle is : "+a +"cm");
// }
// var width = +prompt("Enter width")
// var height = +prompt("Enter height")
// area(width,height);

// area(10,20);


//********************** Task : 10 ********************** */

// function abc(word){
//     var check = word.split("").reverse().join("")
//     if(check === word){
//         document.write("Its a palindrome word")
//     }else{document.write("Its not a palindrome word")}
// }


// var a = prompt("Enter your word")
// abc(a)


//********************** Task : 11 ********************** */


// function capitalizeWord(words) {
//     var separateWord = words.toLowerCase().split(' ');
//     for (var i = 0; i < separateWord.length; i++) {
//        separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
//        separateWord[i].substring(1);
//     }
//     return separateWord.join(' ');
//  }
//  var userInput = prompt("Enter any sentence","the quick brown fox")
// document.write(capitalizeWord(userInput));


//********************** Task : 12 ********************** */

// function longestWord(word){
//     var long = "";
//     var separateWord = word.split(" ");
//     for(var i = 0; i < separateWord.length; i++){
//         if(separateWord[i].length > long.length){
//             long = separateWord[i]
//         }
//     }
//     return long
// }
// var result = longestWord("Web Development Tutorial")
// console.log(result)

