
/*
    1.) allows you to find the top-most element given an (x,y position)
    2.) can probably come in handy when trying to work with an existing library or writing a new one
*/



// let pos;    

// document.addEventListener("mousemove", ({pageX, pageY}) => {
//     pos = `(${pageX}, ${pageY})`;
// });
// terminal me create live expression (eyes symbol) par click karke varible name (pos) dege toh X&Y ki position batayega

/* in inspect ;- document.elementFromPoint(53, 141);    return = inner

document.elementFromPoint(147, 225);    // return = outer


=> CSS me inner div me pointer event none karne par output outer ka dega
document.elementFromPoint(82, 131);    // return = outer

**> pointer event property allows you to cancel any points or events on an element


=>
document.elementsFromPoint(82, 131);
(3) [div.outer, body#body, html]

0 : div.outer

1 : body#body

2 : html

length : 3

[[Prototype]] : Array(0)

*/


      