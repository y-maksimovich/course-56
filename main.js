let username = "Юрий"
username = "Юрий Максимович"
console.log(username)

let a = 10
let b = 20

let c = a + username

let message = "Привет, " + username + "!"
message = `Привет, ${username}!`

console.log(message)

console.log(c)





function divide() {
    let a = document.getElementsByName("x")[0].value
    let b = document.getElementsByName("y")[0].value
    let c

    if(b == 0) {
        c = "Вселенная ещё не научилась такое считать"
    } else {
        c = Number(a) / Number(b)
    }

    let result = document.getElementById("result")
    result.innerHTML = "Результат: " + c
}

function calc() {
    let a = +document.getElementsByName("x")[0].value
    let b = +document.getElementsByName("y")[0].value

    let btn = event.target
    let operator = btn.innerHTML

    let c 

    if(operator == "+") {
        c = a + b
    } else if(operator == "-") {
        c = a - b
    } else if(operator == "*") {
        c = a * b
    } else if(operator == "/") {
        if(b == 0) {
            c = "Вселенная ещё не научилась такое считать"
        } else {
            c = a / b
        }
    } else {
        c = "Я не знаю что ты от меня хочешь"
    }

    let result = document.getElementById("result")
    result.innerHTML = "Результат: " + c
}