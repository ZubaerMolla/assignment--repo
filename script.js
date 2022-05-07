document.getElementById('calc-button').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-input');
    const balanceTotal = document.getElementById('total-balance');
    
    if(incomeInput.value > 0){
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) + parseFloat(incomeInput.value);
    incomeInput.value = '';
    }

    const foodInput = document.getElementById('food-input');
    /* const rentInput = document.getElementById('rent-input');
    const clothInput = document.getElementById('cloth-input');
    const expenseOutput = document.getElementById('expense-output'); */

    /* const expenseOutputNumber = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothInput.value); */
    const expenseOutput = document.getElementById('expense-output')

    expenseOutput.innerText = parseFloat(expenseOutput.innerText) + parseFloat(foodInput.value);
    foodInput.value = '';
    rentInput.value = '';
    clothInput.value = '';
    /* 
    const expenseTotal =  parseFloat(foodIn+-put.value) + parseFloat(rentInput.value) + parseFloat(clothInn+-ut.value) */
    const leftBalance = document.getElementById('total-balance');
    leftBalance.innerText = parseFloat(leftBalance.innerText) - parseFloat(expenseOutput.innerText);

    
});

document.getElementById('saving-button').addEventListener('click', function(){
    const leftBalance = document.getElementById('total-balance');
    const savingInput = document.getElementById('saving-input');
    const savingOutput = document.getElementById('saving-output');
    const savingOutputTotal = parseFloat(savingInput.value) + parseFloat(savingOutput.innerText);
    savingOutputTotal = savingOutputTotal.value - leftBalance.innerText
})
