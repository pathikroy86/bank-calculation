var secondBackground = document.getElementById('bg-image');
secondBackground.style.backgroundImage = 'url("background.jpg")';
secondBackground.style.backgroundSize = 'cover';
secondBackground.style.backgroundRepeat = 'no-repeat';

document.getElementById("deposit-btn").addEventListener('click', function () {
    const depositAmount = document.getElementById("deposit-amount");
    const depositField = document.getElementById("deposit-field");
    const totalAmountField = document.getElementById("total-amount");

    const prevDeposit = depositAmount.innerText;
    const prevDepositNumber = parseFloat(prevDeposit);
    const depositInput = depositField.value;
    const depositInputNumber = parseFloat(depositInput);

    const totalDeposit = prevDepositNumber + depositInputNumber;
    depositAmount.innerText = totalDeposit;

    const totalAmount = totalAmountField.innerText;
    const totalAmountNumber = parseFloat(totalAmount);
    const totalBalance = totalAmountNumber + depositInputNumber;
    totalAmountField.innerText = totalBalance;

    depositField.value = '';

})
