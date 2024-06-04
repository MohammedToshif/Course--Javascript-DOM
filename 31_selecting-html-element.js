
/*
    !selection Element

   (1.) single element by id:                   getElementById()
   (2.) single element by CSS selector:         querySelector() 
   (3.) multiple element by CSS selector:       querySelectorAll()
   (4.) multiple element by class (live):       getElementsByClassName()
   (5.) multiple element by tag (live):         getElementsByTagName()

*/

// (1.)
// const domsHeading = document.getElementById("myHeading");
// console.log(domsHeading);


// (2.)
// const domsHeading = document.querySelector("#myHeading");

// const domsHeading = document.querySelector("#list-item");   // apple
// console.log(domsHeading);   // only one element select


// (3.)
// const listItems = document.querySelectorAll("#list-item");
// console.log(listItems);   // all elemnt select


// (4.)
// const listItems = document.getElementsByClassName("list1");
// console.log(listItems);   //



// (5.)
// const listItems = document.getElementsByTagName("li");
// console.log(listItems);   // 