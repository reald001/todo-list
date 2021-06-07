"use strict"

// vars
const input = document.getElementById("add-input")
const addBlock = document.getElementById("add-block")
const addBtn = document.getElementById("add-btn")
const todo = document.getElementById("todo")

const COLOR_COUNT = 6

// functions
function getRandomNumber() {
    return (Math.floor(Math.random() * COLOR_COUNT))
}

function getElementsCount() {
    return document.querySelectorAll(".todo__item")?.length || 0
}

function getColor() {
    let el = document.querySelector(".color-radio:checked + label")
    if(!el){
        el = document.querySelectorAll(".color-radio + label")[getRandomNumber()]
    }
    const color = window.getComputedStyle(el).backgroundColor

    return color
}

function addNewItem() {
    const text = input.value
    if(!text){
        return
    }
    const color = getColor()
    const elCount = getElementsCount()
    const newElem = document.createElement("li")
    newElem.classList.add("todo__item")
    newElem.innerHTML = `
        <p class="todo__item-inner">
            <label style="background-color: ${color}" class="todo__item-checkbox" for="todo-${elCount + 1}">
                <input id="todo-${elCount + 1}" class="checkbox" type="checkbox">
            </label>
            <span style="background-color: ${color}" class="todo__item-text">${text}</span>
        </p>
    `
    newElem.addEventListener('click', function(e) {
        e.preventDefault()
        newElem.classList.toggle("checked")
        newElem.querySelector(".checkbox").toggleAttribute("checked")
    })
    todo.append(newElem)
    input.value = ""
}

// events...
addBlock.onclick = function() {
    input.focus()
}

document.onkeydown = function(e) {
    if(e.which == "13"){
        addNewItem()
    }
}

addBtn.onclick = function() {
    addNewItem()
}
