function isEven(num) {
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    if (num % 2 === 0) {
        console.log("even")
    }

    //AND THIS LINE ↑↑↑↑↑
}
function getColor(phrase) {
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    if (phrase === 'stop') {
        console.log('red')
    } else if (phrase === 'slow') {
        console.log('yellow')
    } else if (phrase === 'go') {
        console.log('green')
    } else {
        console.log('purple')
    }

    //AND THIS LINE ↑↑↑↑↑
}
// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
if (num <= 100) {
    if (num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if (num % 2 === 0) {
            console.log("YOU GOT ME!");
        }
    }
}
const mystery = 'Paaaa7'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
}


const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift('The Moon');
planets.push('Saturn');
planets.unshift('Mercury')


// Nested Arrays Exercise
// DO NOT TOUCH!!! (please)
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

// YOUR CODE GOES BELOW THIS LINE:

airplaneSeats[3][1] = 'Hugo';


// Object Access Exercise
//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
let fullAddress = restaurant['address'] + restaurant['city'] + restaurant['state'] + restaurant['zipcode'];

// for loops
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i <= people.length; i++) {
    console.log(people[i].toUpperCase());
}

// Nested Loops

const seatingChart = [
    ['kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

// function:
function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}

// multiple arguments exercise
// define isSnakeEyes below:

function isSnakeEyes(a, b) {
    if ((a == '1') && (b == '1')) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}

// Capitalize the first letter Exercise

// DEFINE YOUR FUNCTION BELOW:
function capitalize(str) {
    let newStr = str.slice(0, 1).toUpperCase();
    let remainStr = str.slice(1);
    return newStr + remainStr;
}

// Sum Array Exercise
// DEFINE YOUR FUNCTION BELOW:
function sumArray(num) {
    let total = 0;

    for (let i = 0; i < num.length; i++) {
        total = total + parseInt(num[i]);
    }
    return total;
}

// Method Exercise
const square = {
    area: function (x) {
        return x * x;
    },
    perimeter: function (x) {
        return 4 * x;
    }
};

// Egg Laying Exercise
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return "EGG";
    }
};

// Map Practice
function cleanNames(names) {
    const newArray = names.map(function (e) {
        return e.trim();
    });
    return newArray;
}

// Arrow Function Practice
const greet = (str) => {
    return `Hey ${str}!`;
};

// Filter exercise
function validUserNames(str) {
    return str.filter(strings => strings.length < 10);
}

// Some / Every Exercise
function allEvens(str) {
    return str.every(num => num % 2 === 0);
}

// getElementById Practice

// HTML:
// <!DOCTYPE html>
// <html>

// <head>
//     <title>Unicorn</title>
// </head>

// <body>
//     <!--DON'T TOUCH THIS FILE PLEASE!-->
//     <h1 id="mainheading">I &hearts; Unicorns</h1>
//     <img id="unicorn" src="https://www.flaticon.com/svg/static/icons/svg/3468/3468081.svg" alt="" width="200px">
//     <!-- Icon made by https://www.flaticon.com/authors/freepik  -->

// </body>

// </html>

const image = document.getElementById("unicorn");
const heading = document.getElementById("mainheading");

// querySelector Practice

// HTML code

// <!DOCTYPE html>
// <html>

// <head>
//     <title>Todos</title>
// </head>

// <body>
//     <h1>Garden Todos</h1>
//     <input type="text" placeholder="New Todo">
//     <ul>
//         <li>Start Seedlings</li>
//         <li class="done">Deadhead Zinnias</li>
//         <li class="done">Water Tomatoes</li>
//         <li class="done">Harvest Potatoes</li>
//         <li>Prune Roses</li>
//     </ul>
//     <label>Delete All</label>
//     <input type="checkbox" id="scales" name="scales" checked>

// </body>

// </html>

// JavaScript code
const doneTodos = document.querySelectorAll('.done');
const checkbox = document.querySelector("input[type='checkbox']");


// Manipulating Attributes Practice

{/* <body>
    <!--DONT CHANGE ANYTHING IN THIS FILE, PLEASE!-->
    <h1>Which Came First?</h1>
    <img id="egg" src="https://www.flaticon.com/svg/static/icons/svg/528/528166.svg" width="200px" alt="egg">
    <!--Icons made by http://www.freepik.com-->
</body> */}

// The url you need: 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg'

document.querySelector('img').src = 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg';
document.querySelector('img').alt = 'chicken';

// Magical Forest Circle Exercise
// <!DOCTYPE html>

// <head>
//     <title>Forest</title>
//     <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
//     <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

// </head>

// <body>
//    <div id="container">
//         <h1>I &hearts; Trees</h1>
//         <img src="https://images.unsplash.com/photo-1596328546171-77e37b5e8b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="">
//     </div>
// </body>

const container = document.querySelector('#container');
container.style.textAlign = 'center';

const image = document.querySelector('img');
image.style.width = '150px';
image.style.borderRadius = '50%';


// Rainbow Text Exercise

// <!DOCTYPE html>

// <head>
//     <title>Rainbow</title>
//     <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
//     <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

// </head>

// <body>
//     <!--DON'T TOUCH THIS FILE PLEASE!-->
//     <h1>
//         <span>R</span>
//         <span>A</span>
//         <span>I</span>
//         <span>N</span>
//         <span>B</span>
//         <span>O</span>
//         <span>W</span>
//     </h1>
// </body>

// </html>

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const spans = document.querySelectorAll("span");

for (let color in colors) {
    spans[0].style.color = colors[0];
    spans[1].style.color = colors[1];
    spans[2].style.color = colors[2];
    spans[3].style.color = colors[3];
    spans[4].style.color = colors[4];
    spans[5].style.color = colors[5];
    spans[6].style.color = colors[6];
}


//ClassList Practice
// <!DOCTYPE html>

// <head>
//     <title>ClasList</title>
//     <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
//     <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

// </head>

// <body>
//     <!--LEAVE THIS FILE ALONE!-->
//     <ul>
//         <li>Hello</li>
//         <li class="highlight">Hello</li>
//         <li>Hello</li>
//         <li>Hello</li>
//         <li class="highlight">Hello</li>
//         <li>Hello</li>
//     </ul>
// </body>

// </html>

// CSS
/*No need to touch anything in this file:*/
// li {
//     background-color: #B10DC9;
//   }

//   .highlight {
//     background-color: #7FDBFF;
//   }
// WRITE YOUR CODE IN HERE:
const lists = document.querySelectorAll('li');

for (let list of lists) {
    list.classList.toggle('highlight');
}

// 100 Button Insanity Exercise
// <!DOCTYPE html>

// <head>
//     <title>100 Buttons!</title>
// </head>

// <body>
//     <!--DO NOT TOUCH THIS FILE PLEASE!-->
//     <h1>Look At All My Buttons!</h1>
//     <div id="container">

//     </div>
// </body>

// </html>

// WRITE YOUR CODE IN HERE:

for (let i = 0; i < 100; i++) {
    const button = document.createElement("BUTTON");
    button.innerText = "Hey!";
    const container = document.querySelector("#container");
    container.appendChild(button);
}

//click events exercise
const btnH = document.querySelector("#hello");
const btnG = document.querySelector("#goodbye");

btnH.addEventListener("click", function () {
    console.log("hello");
});

btnG.addEventListener("click", function () {
    console.log("goodbye");
});

// Form Events Exercise
// <!DOCTYPE html>

// <head>
//     <title>Grocery List</title>
//     <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
//     <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

// </head>

// <body>
//     <h1>Grocery List</h1>
//     <form action="/nowhere">
//         <label for="item">Enter A Product</label>
//         <input type="text" id="product" name="product">
//         <label for="item">Enter A Quantity</label>
//         <input type="number" id="qty" name="qty">
//         <button>Submit</button>
//     </form>

//     <ul id="list"></ul>
// </body>

// </html>

const form = document.querySelector('form');
const list = document.getElementById('list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const prdct = document.querySelector('#product');
    const qty = document.getElementById('qty');
    addItem(prdct, qty);
    prdct.value = '';
    qty.value = '';
});

const addItem = (product, quantity) => {
    const newProduct = document.createElement('li');
    newProduct.innerText = `${quantity.value} ${product.value}`;
    list.appendChild(newProduct);
};

// Input Event Practice
// <!DOCTYPE html>

// <head>
//     <title>Input Event</title>
//     <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
//     <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

// </head>

// <body>
//     <h1>Enter Your Username</h1>
//     <input type="text" id="username">
// </body>

// </html>

const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function (e) {
    if (this.value === "") {
        h1.innerText = "Enter Your Username";
    } else {
        h1.innerText = `Welcome, ${this.value}`;
    }
});





