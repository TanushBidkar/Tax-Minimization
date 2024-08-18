document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-button");
    const investmentAmountInput = document.getElementById("investment-amount");
    const interestRateInput = document.getElementById("interest-rate");
    const investmentDurationInput = document.getElementById("investment-duration");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const investmentAmount = parseFloat(investmentAmountInput.value);
        const interestRate = parseFloat(interestRateInput.value) / 100;
        const investmentDuration = parseInt(investmentDurationInput.value);

        if (!isNaN(investmentAmount) && !isNaN(interestRate) && !isNaN(investmentDuration)) {
            const monthlyInterestRate = interestRate / 12;
            const totalMonths = investmentDuration * 12;

            const futureValue = investmentAmount * (((Math.pow(1 + monthlyInterestRate, totalMonths) - 1) / monthlyInterestRate) + 1);

            resultDiv.innerHTML = `Estimated Future Value: ₹${futureValue.toFixed(2)}`;
        } else {
            resultDiv.innerHTML = "Please enter valid values for all fields.";
        }
    });
});