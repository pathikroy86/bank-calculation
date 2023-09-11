document.getElementById("withdraw-btn").addEventListener('click', function () {
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawAmount = withdrawField.value;

    const withdrawArea = document.getElementById("withdraw-amount");
    const prevWithdraw = withdrawArea.innerText;

    const totalAmountArea = document.getElementById("total-amount");
    const totalAmount = totalAmountArea.innerText;

    const withdrawAmountNumber = parseFloat(withdrawAmount);
    const prevWithdrawNumber = parseFloat(prevWithdraw);
    const totalAmountNumber = parseFloat(totalAmount);

    const totalWithdraw = prevWithdrawNumber + withdrawAmountNumber;
    withdrawArea.innerText = totalWithdraw;
    const totalBalance = totalAmountNumber - withdrawAmountNumber;
    totalAmountArea.innerText = totalBalance;

    withdrawField.value = '';
})