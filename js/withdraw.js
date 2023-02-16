//withdraw amount calculation and previous balance update 
/* 
1.Add withdraw button event handler 
2.Get withdraw amount by using getInputValueById function 
3. get previous withdraw amount by using getTextElementValueById function
4.Calculate new withdraw total suing setTextElementValueById function
5.get previous balance total by suing getTextElementValueById function.
6.Calculate new balance total
7.set new balance total to previous total balance using setTextElementValueById function 
*/

const withdrawButton = document.getElementById("withdraw-btn");
withdrawButton.addEventListener("click",function(){

    const newWithdrawAmount = getInputValueById("withdraw-amount");
    if(isNaN(newWithdrawAmount)){
        alert("Please Provide Amount");
        return ;
    }
    const previousBalanceTotal = getElementValueById("balance-total");
    if(newWithdrawAmount > previousBalanceTotal) {
        alert("No Sufficient Amount to Withdraw");
        return;
    }

    const previousWithdrawAmount = getElementValueById("withdraw-total");
    const currentTotalWithdraw = previousWithdrawAmount + newWithdrawAmount;
    const newTotalWithdraw = setTextElementValueById("withdraw-total",currentTotalWithdraw);    
    const currentBalance = previousBalanceTotal - newWithdrawAmount;

    const newTotalBalance = setTextElementValueById("balance-total",currentBalance);

   
})