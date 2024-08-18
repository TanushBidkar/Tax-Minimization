document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedback-form");

    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Get form data
        const formData = new FormData(feedbackForm);
        const feedbackData = {};
        formData.forEach((value, key) => {
            feedbackData[key] = value;
        });

        // Display feedback data (you can send it to a server instead)
        console.log("Feedback Data:", feedbackData);
        
        // You can also add code here to send the feedback data to a server using AJAX or fetch.
        
        // Clear the form after submission (optional)
        feedbackForm.reset();
    });
});
