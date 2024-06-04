
/* 
    summry :-
    1.) let's you easily multiple node for (or element)
    2.) supports combinatioon of text, text nodes and elements
    3.) works in modern browser (IE needs a polyfill) 
*/


const myDiv = document.getElementById('myDiv');     // target id


const strong = document.createElement('strong');    // create elem.
const em = document.createElement('em');        // create elem.
const myTextNode = document.createTextNode('simple text');  // create text

strong.textContent = 'strong';      // elem + text
em.textContent = 'emphasized';      // elem + text

myDiv.append(strong, em, myTextNode, 'some more text');  // append child with parent different ways (add element, textnode, direct text)