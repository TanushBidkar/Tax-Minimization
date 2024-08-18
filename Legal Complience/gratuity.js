document.getElementById("calculate-btn").addEventListener("click", function() {
    var basicSalary = parseFloat(document.getElementById("basic-salary").value);
    var yearsWorked = parseFloat(document.getElementById("years-worked").value);
    
    // Calculate gratuity amount in INR
    var gratuityAmountINR = (basicSalary / 26) * (15 * yearsWorked);

    document.getElementById("result").innerHTML = "Gratuity Amount: ₹" + gratuityAmountINR.toFixed(2);
});

