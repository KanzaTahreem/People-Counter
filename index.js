// initialize the count to zero
// listen for clicks on the increment button
// increase the count when the button is clicked
// change the count-el(h2) in HTML to reflect new count

// create function save
// grab the save-el and store it in a variable called saveEl
// create a variable into the save element that contains both count and dash seperator "12 -"

// after hitting sava button, set the counter(h2) to zero.
// next counter should start from 0.



let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count ++
    countEl.textContent = count
}

function save() {
    let newCount = count + ' - '
    saveEl.textContent += newCount
    countEl.textContent = 0
    count = 0
}

