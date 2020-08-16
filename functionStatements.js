// function Statements and Expressions

//Function declaration

// function whatDoYouDo(job, firstName) {

// }

//Function Expression
let whatDoYouDo = function(job, firstName){
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kinds how to code'
    case 'driver':
      return firstName + ' drive a cab in Lisbon'
    case 'designer':
      return firstName + ' desing beatiful websites'
    default:
      return firstName + ' does something else'
  }
 }

 console.log( whatDoYouDo('designer', 'Estefani'))