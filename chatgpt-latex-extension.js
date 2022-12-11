// Create a new extension
var chatGPTLatexExtension = {
  // This function will run when the extension is first installed
  initialize: function() {
    // Add a listener to the chat GPT page
    chrome.webNavigation.onCompleted.addListener(function(details) {
      if (details.url.includes("https://chatgpt.com/")) {
        // When the page is loaded, parse the Latex
        chatGPTLatexExtension.parseLatex();
      }
    });
  },

  // This function will parse the Latex on the page
  parseLatex: function() {
    // Find all elements with the "latex" class
    var latexElements = document.getElementsByClassName("latex");

    // Loop through each element and parse the Latex
    for (var i = 0; i < latexElements.length; i++) {
      var latexElement = latexElements[i];

      // Get the Latex code from the element's text
      var latexCode = latexElement.innerText;

      // Use the KaTeX library to render the Latex
      katex.render(latexCode, latexElement);
    }
  }
};

// Initialize the extension
chatGPTLatexExtension.initialize();
