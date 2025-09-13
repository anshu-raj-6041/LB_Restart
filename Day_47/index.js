// document.addEventListener('click', function () {
//     console.log("I have clicked on document");

// })

// function eventFn() {
//     console.log("I have clicked on document2");

// }
// document.addEventListener('click', eventFn);

// const content = document.querySelector('#wrapper');
// content.addEventListener('click', function (event) {
//     console.log(event);

// })

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// fn me event isliye pass kiye hai kyuki .preventDefault event pe pass hoga
// thirdLink.addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log("Ho gya");

// });


// let myDiv = document.createElement('div');

// function an() {
//     // console.log("I have clicked in Para");
//     console.log("Para " + event.target.textContent);


// }
// myDiv.addEventListener('click', an);


// for (let i = 1; i <= 100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = "This is Para " + i;

//     // newElement.addEventListener('click', an);
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


let element = document.querySelector('#wrapper');
element.addEventListener('click', function (event) {
    if (event.target.nodeName === 'SPAN') {
        console.log("span pr click kiya hai " + event.target.textContent);
    }

})