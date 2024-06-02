
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", function() {
    console.log("I am the PARENT.");
}, true);

child.addEventListener("click", function() {
    console.log("I am the CHILD.");
});



// bubbling means start of the bottom up to the top
// capturing means start form the top and then sort of like capture the bottom elements