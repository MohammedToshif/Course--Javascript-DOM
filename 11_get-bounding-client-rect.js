// this method of element returns objects of this kind to describe the on-screen bounding box of an element.


const box = document.querySelector("div.box");

// const rect = box.getBoundingClientRect();

// console.log(rect);

window.addEventListener("scroll", function () {
    // console.log(window.innerHeight);
    console.log(box.getBoundingClientRect());

    if (box.getBoundingClientRect().top < window.innerHeight) {
        box.style.background = 'red';
    }
});

