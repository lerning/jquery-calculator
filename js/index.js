$('document').ready(function(){

let number = ''
// let oparray = []
let operator = ''
let prevnumber = ''
let answer = 0

// string = '9 * 5'
// function mathymath() {
//
// //    oparray = []
// //    for (thing in string){
// //       if (!isNaN(parseInt(string[thing]))){
// //          oparray.push(parseInt(string[thing]))
// //       } else if (thing == '+' || thing == '-' || thing == '*' || thing == '÷'){
// //          oparray.push(string[thing])
// //       }
// //
// //    } console.log(oparray);
// // }
// }
// mathymath('9 * 5')

//this strains the buttons for numbers and allows them to show up on the screen when clicked
   $('span').click(function(){
      var $target = $(event.target);
      var symbol = parseInt($target.text());
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
            // oparray = []
         })
      } //this provides functionality = sign
      else if (($target).text() == '='){
         // console.log($('#screen').text());
         console.log('= number', number);
         console.log('= pre', prevnumber);
         console.log(('= operator'), operator);
         if (operator == '+') {
            ans = (parseInt(prevnumber) + parseInt(number))
            $('#screen').text(ans)
         } else if (operator == '-') {
            ans = (parseInt(prevnumber) - parseInt(number))
            $('#screen').text(ans)
         } else if (operator == 'x') {
            ans = (parseInt(prevnumber) * parseInt(number))
            $('#screen').text(ans)
         } else if (operator == '÷') {
            ans = (parseInt(prevnumber)/parseInt(number))
            $('#screen').text(ans)
         }

         console.log('= pint number', parseInt(number));
         number = ans
         console.log('ans', ans);
         operator = ''
         // console.log(eval($('#screen').text()));
         // $('#screen').text(eval($('#screen').text()))

      } //this provides functionality to the + - * / operands
      else {
         // console.log(($target).text());
         $('#screen').text($('#screen').text() + ' ' + $target.text() + ' ')
         // console.log(number);
         prevnumber = parseInt(number)
         opnumber = number
         number = ''
         operator += ($target).text()
         if (($target).text() == '+'){
            // answer = parseInt(prevnumber) + parseInt(opnumber)
            console.log('+ answer!', answer);
            console.log('+ number', number);
            console.log('+ prevnumber', prevnumber);
            console.log('op number', opnumber);
            console.log('pint opnumber',parseInt(opnumber));
            // prevnumber += (parseInt(prevnumber) + parseInt(number))

         }
      }
   })





})
