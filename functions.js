// FUNCTIONS

function calculateAge(birthYear){
  return 2020 - birthYear
}

ageDavid = calculateAge(1989)
ageAgee = calculateAge(1964)
ageEstefani = calculateAge(1994)

console.log(ageAgee, ageDavid, ageEstefani)

function yearsUntilRetairment(year, firstname){
  let age = calculateAge(year)
  let retirement = 65 - age
  if(retirement <= 0){
    console.log(firstname + ' is already retaired')
  }else{
    console.log(firstname + ' retires in ' + retirement + ' years')
  }
  
}

davidRetirement = yearsUntilRetairment(1948, 'David')
angeeRetirement = yearsUntilRetairment(1964, 'Angee')
estefaniRetirement = yearsUntilRetairment(1994, 'Estefani')

