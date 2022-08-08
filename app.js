var parentDiv = document.getElementById("div1");
var newParagraph = document.createElement("p");
var t = document.createTextNode("Hello world!");
newParagraph.appendChild(t);
paragraph1 = parentDiv.firstChild;
parentDiv.insertBefore(newParagraph, paragraph1);