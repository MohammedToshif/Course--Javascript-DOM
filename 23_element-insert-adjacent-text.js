
/* 
    beforebegin - before element
    afterbegin - first child
    beforeend - last child
    afterend - after element
*/


const myPara = document.getElementById("myPara")

// myPara.insertAdjacentText("beforebegin", "TOSHIF")  // para. ke upr print

// myPara.insertAdjacentText("afterbegin", "TOSHIF")  // inside para. starting me print

// myPara.insertAdjacentText("beforeend", "TOSHIF")  // inside para. ending me print

myPara.insertAdjacentText("afterend", "TOSHIF")  // outside para. bottom m print
