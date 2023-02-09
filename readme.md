# Mission 1 

## Marlborough Campaign
This project is a demonstration of understanding of HTML and CSS coding languages, as part of Mission 1 of Mission Ready HQ L4 Full Stack Developer Accelerator Programme. The website showcases the many benefits of living and working in the Marlborough region of New Zealand. It includes information about the local business community, lifestyle, and people who have chosen to call Marlborough home.

The website is built using HTML, CSS, and JavaScript. The layout is divided into a hero section, pitch section, and feature stories section. The hero section includes an image and text that highlights the main message of the website. The pitch section provides more detailed information about the benefits of living and working in Marlborough and includes links to relevant resources. The feature stories section includes three sections that highlight different aspects of life in Marlborough, including business, lifestyle, and people.

The following HTML elements are used in this project:
- `<head>` tag which includes the title and links to a stylesheet and script file
- `<body>` tag which contains the content of the website
- `<div>` tags which are used to create the layout and structure of the website
- `<h1>`, `<h3>`, and `<h6>` tags for headings
- `<p>` tags for paragraphs
- `<img>` tags for images
- `<a>` tags for links
- `'Class'` and `'ID'` attributes for styling specific elements
- Email contact form which is hidden by default, but can be activated by JavaScript

In terms of CSS, the following styles have been applied:
- Flexbox layout is used in the feature-stories section to display the content in a grid format
- Background colour of the `<body>` and `<div>` elements are stylised
- Font stylisation has been applied to various elements such as `h1`, `h3`, `h6`, and `p`
- Margins and padding have been applied to elements
- Width and height have been applied to specific elements such as `hero-image`, `feature-images`.
- The website is also designed to be responsive, with styles that adjust for different screen sizes.

This project uses JavaScript to add dynamic functionality to the website. The following JavaScript files have been used in this project:
- `popUp.js`: This file is responsible for the functionality of the popup functions on the website. It gets the elements of the open and close buttons and the popup itself, and adds click event listeners to the buttons to show and hide the popup.
- `people.js`: This file sets the initial opacity of the body element to 1 when the page loads.
- `costOfLiving.js`: This file calculates the cost of living in Marlborough in comparison to the selected city and displays the result. It gets the elements of the origin city, current cost, calculate button, and the result, and adds a click event listener to the calculate button. When the button is clicked, the cost of living is calculated and displayed in the result.
- `script.js`: This file contains the functionality for the contact form. It has functions for opening, closing, and submitting the form.

The JavaScript in this project demonstrates the following concepts:
- Declaring variables using const
- Use of functions (e.g. openForm() and closeForm())
- Use of document.getElementById() to change or display the values/styles/attributes of the original HTML elements (e.g. document.getElementById("myForm").style.display = "block";)
- Use of events (e.g. calculate.addEventListener("click", function() {...});)
- Use of arithmetic operators: The code uses the division operator (/) to calculate the cost of living in Marlborough.
- Use of comparative operators: The code uses the in operator to check if the selected city is present in the costOfLivingDifferences object.

## Viewing
To view the website, open the "index.html" file in a web browser.
Alternatively, you can visit https://mellow-frangipane-1bd414.netlify.app/index.html

The images used on the website are stored in the "img" folder. The CSS styles are located in the "style.css" file and "css" folder, and the JavaScript functionality is located in the "script.js" file and "js" folder.

Please note that all the links on the website are for demonstration purposes only and may not be active.

## Additional information
This website is for demonstration purposes only and is not intended to be used as an actual website. All the links on the website are for demonstration purposes only and may not be active.

Thank you for checking out this project.
