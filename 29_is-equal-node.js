
/*
    1.) tests it two nodes (elements) are equal
    2.) includes child nodes in test
*/


const div1 = document.querySelectorAll("div")[0];   // target first div

const div2 = document.querySelectorAll("div")[1];   // target second div


const isEqual = div1.isEqualNode(div2);
console.log(isEqual);   // return = true




/*
document me new id same name ki add karne par "true" hoga
alg id dene par false..
ex :- myNode = myNode :- true
      myNode = myNode1 :- false

 =>    1) <div> , 2) <span> :- false    // tag name diffrent hone par false..
 

 =>  inside div me text content bhi same hone chahiye = true
 => strong #test2 = strong #test2 :- true
 => strong #test1 = strong #test2 :- false


 => 2 div m new line spacing agr kisi ek div m he toh return "false" dega


 => 2 div m kisi ek div m backspace dene par "false" return karega
 inspect :-
 div1.childNode[0].nodeValue    = "
                                        "

div2.childNode[1].nodeValue     = "
                                    "                       
return = false                                    

*/