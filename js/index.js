$('document').ready(function(){

let number = ''
let operator = ''
let prevnumber = ''
let answer = 0

//this strains the buttons for numbers and allows them to show up on the screen when clicked
   $('span').click(function(){
      var $target = $(event.target);
      var symbol = Number($target.text());
      if ( !isNaN(symbol) ) {
         $('#screen').append(symbol)
         number += symbol
      }
   })
   $('.operator').click(function(){
      var $target = $(event.target);
      //This allows the clear button to clear the screen when clicked
      if (($target).text() == 'C') {
         $('#clear').click(function(){
            $('#screen').text('')
            number = ''
         })
      } //this provides functionality to the = sign
       //it uses the current operator to operate on number/prevnumber
       //then it sets the screen to the answer
      else if (($target).text() == '='){
         // console.log($('#screen').text());
         console.log('= number', number);
         console.log('= pre', prevnumber);
         console.log(('= operator'), operator);
         if (operator == '+') {
            ans = (Number(prevnumber) + Number(number))
            $('#screen').text(ans)
         } else if (operator == '-') {
            ans = (Number(prevnumber) - Number(number))
            $('#screen').text(ans)
         } else if (operator == 'x') {
            ans = (Number(prevnumber) * Number(number))
            $('#screen').text(ans)
         } else if (operator == '÷') {
            ans = (Number(prevnumber)/Number(number))
            $('#screen').text(ans)
         }
         if (operator === '+-+-+-+-+-'){
            $('#screen').text('hey tom')
         }
         number = ans
         operator = ''
         // console.log('= pint number', Number(number));
         // console.log('ans', ans);

      } //this sets number to prevnumber (giving space for subsequent number to
       //become number. the operator variable is then set to the operator pressed
      else {
         $('#screen').text($('#screen').text() + ' ' + $target.text() + ' ')
         prevnumber = Number(number)
         opnumber = number
         number = ''
         operator += ($target).text()
      }
   })
})


// string = '9 * 5'
// function mathymath() {
//
// //    oparray = []
// //    for (thing in string){
// //       if (!isNaN(Number(string[thing]))){
// //          oparray.push(Number(string[thing]))
// //       } else if (thing == '+' || thing == '-' || thing == '*' || thing == '÷'){
// //          oparray.push(string[thing])
// //       }
// //
// //    } console.log(oparray);
// // }
// }
// mathymath('9 * 5')





// if (($target).text() == '+'){
//    // answer = Number(prevnumber) + Number(opnumber)
//    console.log('+ answer!', answer);
//    console.log('+ number', number);
//    console.log('+ prevnumber', prevnumber);
//    console.log('op number', opnumber);
//    console.log('pint opnumber',Number(opnumber));
//    // prevnumber += (Number(prevnumber) + Number(number))
//
// }
