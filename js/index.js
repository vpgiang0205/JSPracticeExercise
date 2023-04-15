// format VND:
var vndFormat = new Intl.NumberFormat("vn-VN")

// Ex1:
var salaryBtn = document.getElementById('salaryBtn').onclick = function () {
    var salaryperday = document.getElementById('salaryPerDay').value * 1
    var salaryday = document.getElementById('salaryDay').value * 1

    var salaryTotal = salaryday * salaryperday
    document.getElementById('salaryShow').innerHTML = `<p> Total Salary: ` + vndFormat.format(salaryTotal) + `</p>`
}

// Ex2:
var averageBtn = document.getElementById('averageBtn').onclick = function () {
    var num1 = document.getElementById('number1').value * 1
    var num2 = document.getElementById('number2').value * 1
    var num3 = document.getElementById('number3').value * 1
    var num4 = document.getElementById('number4').value * 1
    var num5 = document.getElementById('number5').value * 1
    var avgTotal = (num1 + num2 + num3 + num4 + num5) / 5
    console.log(avgTotal)
}

// Ex3:
var convertBtn = document.getElementById('convertBtn').onclick = function () {
    var USD = document.getElementById('currentFormat').value
    document.getElementById('newFormat').innerHTML = `<p> Converted: ` + Intl.NumberFormat('vn-VN', USD).format(23500) + ` VND` + `</p>`
}

// Ex4:
var rectangleBtn = document.getElementById('rectangleBtn').onclick = function () {
    var length = document.getElementById('rectangleLength').value * 1
    var width = document.getElementById('rectangleWidth').value * 1

    var area = length * width;
    var Perimeter = (length + width) * 2
    document.getElementById('rectangleShow').innerHTML = `<p> Area: ` + area + `;` + ` Perimeter: ` + Perimeter + `</p>`
}

// Ex5: 
var totalBtn = document.getElementById('totalBtn').onclick = function () {
    var num = document.getElementById('number').value
    if (num.length != 2) {
        alert("error! Only accept 2 digits number!")
    } else {
        var number1 = Math.floor(document.getElementById('number').value[0] * 1)
        var number2 = document.getElementById('number').value[1] * 1
        var total = number1 + number2
        console.log(total)
    }
    document.getElementById('totalShow').innerHTML = `<p>` + `Total: ` + total +`</p>`
}