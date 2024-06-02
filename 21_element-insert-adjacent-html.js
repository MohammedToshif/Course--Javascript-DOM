
// this methods allows you to insert HTMl adjacently to a element.. its work very similiar to the (inner HTML) property but this one gives you greater control of where the HTML will sit and also it adds a bonus features of not actually destructing any of the child elements....


/* 
    beforebegin - before element
    afterbegin - first child
    beforeend - last child
    afterend - after element
*/

// const myPara = document.getElementById('myPara')

// myPara.insertAdjacentHTML('beforebegin', '<strong>dcode</strong>')   // top = dcode, bottom = write some text

// myPara.insertAdjacentHTML('afterbegin', '<strong>dcode</strong>')   // dcodei'll some text

// myPara.insertAdjacentHTML('beforeend', '<strong>dcode</strong>')   // i'll some text.dcode

// myPara.insertAdjacentHTML('afterend', '<strong>dcode</strong>')   // top = i'll some text.  bottom = dcode



    // (02)

const myPara = document.getElementById('myPara')

const em = myPara.querySelector('em')

em.addEventListener('click', console.log)

// myPara.innerHTML += '<strong>dcode</strong>'    // when you set the inner HTML property on the parent all these child event listener will be removed automatically..



