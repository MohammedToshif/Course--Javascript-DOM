
// this method allows you to check wheather or not an element matches a specified selector


const myPara = document.getElementById("myPara")
// const result = myPara.matches("#myPara")    // return = boolean value = true, bcoz myPara id match kar rahi he paragraph id se


// const result = myPara.matches(".myPara")    // false, selector does not match


// const result = myPara.matches("[data-name]")    // return true

// const result = myPara.matches("[data-names]")    // return false


// const result = myPara.matches("p")    // return true

console.log(result)