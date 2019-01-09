/*
  JAVASCRIPT OUTPUT

  Javascript has many ways to "display" data :
  - Writing into an HTML element using 'innerHTML'
  - Writing into the HTML output using 'document.write'
  - Writing into a alert box, using 'window.alert'
  - Writing into the browser console using 'console.log'

  One thing to note is that the document.write method will delete all existing HTML if it is used after the document is loaded.
  For example, if we bind it to an on click event of a button (do it, you'll see)
*/
// example, if this function is called when the document is loading, it will just simply append 'abc', but if it's bind to a button click event, the whole content of the HTML will be  :
document.write('abc');

