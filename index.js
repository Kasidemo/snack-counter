//document.getElementById("count-el").innerText = 5
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
 
    if (saveEl.textContent == "Previous entries: ") {

        saveEl.textContent += count

    }

    else {
        saveEl.textContent += "-"+ countEl.textContent
    }


    count = 0
    countEl.textContent = count

}