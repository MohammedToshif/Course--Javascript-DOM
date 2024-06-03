
// insert a new HTMl element that is adjacent to another element..its works very simmiliar to the append child nad the insert before methods

/* 
    beforebegin - before element
    afterbegin - first child
    beforeend - last child
    afterend - after element
*/


const area = document.getElementById("area")
const box = document.createElement("div")   // create a div
box.id = "box"      // div ki id create "box"


// area.insertAdjacentElement("beforebegin", box)      // red box, black box ke top m aayega outside

// area.insertAdjacentElement("afterbegin", box)      // red box inside top the black box

// area.insertAdjacentElement("beforeend", box)      // red box inside bottom the black box

area.insertAdjacentElement("afterend", box)         // red box, black box ke bottom m aayega outside