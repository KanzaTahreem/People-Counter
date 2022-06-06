// initialize the count to zero
// listen for clicks on the increment button
// increase the count when the button is clicked
// change the count-el(h2) in HTML to reflect new count

// create function save
// grab the save-el and store it in a variable called saveEl
// create a variable into the save element that contains both count and dash seperator "12 -"



let count = 0;
let countEl = document.getElementById("count-el")
console.log(countEl)
let saveEl = document.getElementById("save-el")

function increment() {
    count ++
    countEl.textContent = count
    console.log(count)
}

function save() {
    let newCount = count + ' - '
    saveEl.textContent = newCount
    console.log('clicked')
}

