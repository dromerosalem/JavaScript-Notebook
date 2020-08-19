//John and his family went on holidays and went to 3 different restaurants. The bills were 124$, 48$, 268$. 
//To tip the waiter a fair ammount John created a simple tip calculator (as a function). He likes to ip 20% of the bill when the bill is less than 50$,
//15% when the bill is betwen 50$ and 200$ and 10% if the bill is more than 200$.

//In the end John would like to have 2 arrays: 
//1) Containing all the 3 tips (one for each bill)
//2) Containing all the 3 final paid ammounts (bill + tip)


let bill = [124, 48, 268]

let tipsTopay = []
let totaBill = []

function calculateTips(){
  bill.forEach(element => {
    if(element > 50 && element < 200){
      tipsTopay.push(element * 0.15)
      totaBill.push((element * 0.15) + element)
    }else if(element <= 50){
      tipsTopay.push(element * 0.20)
      totaBill.push((element * 0.20) + element)
    }else if(element >= 200){
      tipsTopay.push(element * 0.10)
      totaBill.push((element * 0.10) + element)
    }
  }); 
}
calculateTips()
console.log(tipsTopay)
console.log(totaBill)


