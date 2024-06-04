
/*
 Q.) What is the event delegation 

ans.) A way you can event listener once for multiple elements with support for adding extra children.
*/


const myList = document.getElementById("myList");
console.log(myList);

myList.addEventListener("click", function(e) {
    console.log(e.target);

    const target = e.target;

    if (target.matches("li")) {
        // target.style.backgroundColor = "red";
        target.classList.toggle('red')
    }
});


// adding extra children    <li>Toshif</li>

const newLi = document.createElement("li");
newLi.textContent = "Toshif";
myList.appendChild(newLi);

