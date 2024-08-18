// Sample tax resources
const resources = [
    { title: "IRS Tax Guide", description: "Official IRS tax guide for individuals.", link: "https://www.irs.gov/pub/irs-pdf/p17.pdf" },
    { title: "TurboTax Blog", description: "Tax tips and articles from TurboTax experts.", link: "https://blog.turbotax.intuit.com/" },
    { title: "Tax Slab", description: "A checklist of Indian tax slabs.", link: "https://cleartax.in/s/income-tax-slabs/" }
];

// Function to display resources in the HTML
function displayResources() {
    const resourceList = document.getElementById("resource-list");

    resources.forEach((resource, index) => {
        const resourceDiv = document.createElement("div");
        resourceDiv.classList.add("resource");

        const titleElement = document.createElement("h2");
        titleElement.textContent = resource.title;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = resource.description;

        const linkElement = document.createElement("a");
        linkElement.href = resource.link;
        linkElement.textContent = "Learn More";

        resourceDiv.appendChild(titleElement);
        resourceDiv.appendChild(descriptionElement);
        resourceDiv.appendChild(linkElement);

        resourceList.appendChild(resourceDiv);
    });
}

// Call the function to display resources when the page loads
window.addEventListener("load", displayResources);