

document.getElementById("deposit-btn").addEventListener("click",function(){
  /**
   * 1.Get the Element by id
   * 2.Get the value from the element 
   * 3.convert String value to a number
   */
  const newDepositAmount = getInputValueById("deposit-amount");
  if(isNaN(newDepositAmount)){
    alert("Please Enter Valid amount");
    return ;
  }
 /*
 1.get previous deposit
 */
      const previousDepositTotal = getElementValueById("deposit-total");
    // new deposit total
  
      const currentTotalDeposit = previousDepositTotal + newDepositAmount;
      // set deposit total value 
      const newDepositTotal = setTextElementValueById("deposit-total",currentTotalDeposit);

      const previousBalance = getElementValueById("balance-total");
      const currentTotalBalance = previousBalance + newDepositAmount;
      const newTotalBalance = setTextElementValueById("balance-total",currentTotalBalance);
});
