// allows bootstrap drop down then domMethods to be used
require("bootstrap");
const createEl = require("./domMethods");
//pulls in text generator
const createLoremIpsum = require("./helpers");

//This previously checkted to see if current page for events.html and applied
// correct DOM manipulation
// if (window.location.href.indexOf("event") > -1) {
//This replaces that and links the DOM manipulation to each HTML page
$(document).ready(function() {
    const currentEvent = JSON.parse(localStorage.getItem("currentEvent")) || {
        title: "Title Placeholder",
        subtitle: "",
        description: ""
    };

    const pageEl = document.querySelector("#page");
    
    const containerEl = createEl("div", {class: "container"},
      createEl("div", {class: "card mb-3"}, 
        createEl("img", {class: "card-img-top", style: "width: 5px", src: currentEvent.image || "https://via.placeholder.com/350x150"}),
        createEl("div", {class: "card-body"}, 
          createEl("h1", {class: "card-title"}, currentEvent.title || ""),
          createEl("h2", {class: "text-muted"}, currentEvent.subtitle || ""),
          createEl("p", {class: "card-text mt-3"}, currentEvent.description || createLoremIpsum(100)),
          createEl("a", {class: "btn btn-primary", href: "tickets.html"}, "Buy Tickets")
        )
      ),
      
    )
    pageEl.appendChild(containerEl)
  }

)
