//write first method
// function sleepIn(x,y) {
//     return x;
//
// }
/*//write second method
function sleep_in(weekend, weekday) {
      if(!weekend && weekday){
          return true;
      }
    return false;
}*/

// function tester() {
//
//     document.getElementById("output").innerHTML = sleepIn(true, false);
//     document.getElementById("output").innerHTML = nextOne(true, false);
//     //test third method, etc
// }
//
// function monkey_trouble (a_smile, b_smile){
//     if((a_smile && b_smile) || !a_smile && !b_smile){
//         return true;
//     }
//   return false;
// }
// function string_times(string,n) {
//     var solution = "";
//     for (var i = 0; i < n; i++){
//         solution = solution += string;
//     }
//     return solution;
// }

// function front_times(string,x){
//     var word = "";
//     var frontThree = string.substring(0,3);
//     for(var i = 0; i < x; i++){
//         word = frontThree + word;
//     }
//     return word;
// }
// function string_bits(s) {
//     var solution = "";
//     for (var i = 0; i < s.length/2; i ++){
//         solution = solution + s[i * 2];
//
//     }
//     return solution;
// }
// function caughtSpeeding (speed,birthday) {
//     var severity = 0;
//     if (speed <= 60){
//         severity = 0;
//     }
//     if ((birthday === true){
//         if (speed <= 60){
//             severity === 0
//         }
//     }
//     if (speed >= 61 && speed <= 80) {
//         severity = 1;
//     }
//     if (birthday === true){
//         if (speed >= 61 && speed <= 85) {
//             severity === 1;
//         }
//     }
//     if (speed >= 81) {
//         severity = 2;
//     }
//     if (birthday === true){
//         if (speed >= 81) {
//
//         }
//
//     }return severity;
// }
// function fizz_buzz (x){
//     if (x % 3 === 0 && x % 5 === 0){
//         return "FizzBuzz";
//     }
//     if (x % 3 > 0) {
//         return x + "!";
//     }
//     if (x % 3 === 0){
//         return "Fizz";
//     }
//     if (x % 5 === 0){
//         return "Buzz";
//     }
//
// }

// function teaParty (tea,candy) {
//     var badness = 0;
//     if ( tea <= 5 && candy <= 5 ){
//         badness = 0;
//     }
//     if ( tea >=5 && candy >= 5 ){
//         badness = 1;
//
//     }
//     if (tea >= 5 && candy >= 5){
//        if (tea >= 2 * candy || candy >= 2 * tea){
//            badness = 2;
//        }
//     }
//     return badness
// }
//
// function blackjack (x,y){
//     var max = 21;
//     if( y > max && x > max ){
//         return 0;
//     }if (x > y){
//         if ( x > max){
//             return y;
//         }else{
//             if (x <= max){
//                 return x;
//             }
//         }
//     }
//     if (y > x){
//         if (y > max){
//             return x;
//         }else{
//             if (y <= max){
//                 return y;
//             }
//         }
//     }
// }


// // function loneSum (x,y,z){
//     if (x === y && x === z){
//     return 0;
//     }
//     if (x === y){
//         return z;
//     }
//     if (x === z){
//         return y;
//     }
//     if (y === z){
//         return x;
//     }
//     return x + z + y;
// }