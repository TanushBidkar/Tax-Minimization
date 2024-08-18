document.getElementById('taxForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get user input values
    const income = parseFloat(document.getElementById('income').value);
    const age = parseInt(document.getElementById('age').value);
    const dependents = parseInt(document.getElementById('dependents').value);
    const citizenship = document.getElementById('citizenship').value;
    const employed = document.getElementById('employed').value;

    // Perform eligibility checks and calculations
    let eligibilityMessage = "";

    // Example eligibility checks (you can customize these)
    if (income > 50000 && age >= 18 && dependents > 0 && citizenship === "citizen") {
        eligibilityMessage = "You are eligible to file an income tax return.";
    } else {
        eligibilityMessage = "You are not eligible to file an income tax return.";
    }

    // Display the result
    document.getElementById('result').style.display = 'block';
    document.getElementById('eligibilityMessage').textContent = eligibilityMessage;
});
