/*
  JAVASCRIPT INTRODUCTION
  In this lesson, we will learn how to use the method getElementById()

  This method can be used to :
  - Change the text (inner html) of an element.
  - Change the attribute values (i.e src of img tags)
  - Change HTML styles (css)
  - Show/Hide HTML elements
*/

var element = document.getElementById("element");
// Change text (inner html) :
element.innerHTML = "New text";
// Change attribute values, note that the element must contain that attribute, here we assume element is an img.
element.src = "new source";
// Change HTML styles
element.style.fontSize = "35px";
// Show/Hide HTML elements
element.style.display = "none";
element.style.display = "block";