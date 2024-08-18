// Add your JavaScript code here
function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    // Get the user's question
    const userQuestion = userInput.value;

    // Create a user message element
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = userQuestion;

    // Append the user message to the chat box
    chatBox.appendChild(userMessage);

    // Provide a bot response
    const botResponse = getBotResponse(userQuestion);

    // Append the bot response HTML elements to the chat box
    chatBox.appendChild(botResponse);

    // Clear the user input
    userInput.value = "";

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

function createBotLink(text, url) {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank"; // Open the link in a new tab
    link.textContent = text;
    return link;
}

function getBotResponse(userQuestion) {
    // Implement logic to generate bot responses based on user input
    // Here, you can check user input and provide appropriate links or responses
    // For example, based on keywords in the user's question, you can provide links to calculators or resources.
    // You can also include conditional logic to handle various user queries.

    // Sample bot responses for demonstration purposes:
    if (userQuestion.includes("income tax calculator")) {
        return createBotLink("You can use our Income Tax Calculator", "income_tax_calculator.html");
    } else if (userQuestion.includes("GST calculator")) {
        return createBotLink("You can use our GST Calculator", "gst_calculator.html");
    } else if (userQuestion.includes("gratuity calculator")) {
        return createBotLink("You can use our Gratuity Calculator", "gratuity_calculator.html");
    } else if (userQuestion.includes("tax insights")) {
        return createBotLink("Visit our Tax Insights page for the latest tax insights and updates", "tax_insights.html");
    } else if (userQuestion.includes("legal compliance")) {
        return createBotLink("Learn about legal compliance on our Legal Compliance page", "legal_compliance.html");
    } else if (userQuestion.includes("income eligibility checker")) {
        return createBotLink("Check your income eligibility with our Income Eligibility Checker", "income_eligibility_checker.html");
    } else if (userQuestion.includes("interactive tools")) {
        return createBotLink("Explore our Interactive Tools for various financial calculations", "interactive_tools.html");
    } else if (userQuestion.includes("resource library")) {
        return createBotLink("Access our Resource Library for informative articles and guides", "resource_library.html");
    } else {
        return "I'm sorry, I couldn't understand your question. Please ask again or click on the links above.";
    }
}
