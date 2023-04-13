function f1() {
    let sum = $('#inpt1').val()
    if (sum < 200) {
        $('#out1').text('Результат: сорри скидки нет!')
        $('#inpt1').val('')
    }
    if (200 <= sum && sum <= 300) {
        $('#out1').text('Результат: сумма Вашей покупки с учетом скидки 3% составляет: '+ Math.floor(sum*0.97) +' какой-нибудь валюты!')
        $('#inpt1').val('')
    }
    if (300 < sum && sum <= 500) {
        $('#out1').text('Результат: сумма Вашей покупки с учетом скидки 5% составляет: '+ Math.floor(sum*0.95) +' какой-нибудь валюты!')
        $('#inpt1').val('')
    }
    if (sum > 500) {
        $('#out1').text('Результат: сумма Вашей покупки с учетом скидки 7% составляет: '+ Math.floor(sum*0.93) +' какой-нибудь валюты!')
        $('#inpt1').val('')
    }
}

$('#but1').click(f1)

function f2() {
    let diameter = ($('#inpt2-1').val()/6.28)*2
    let oneSite = $('#inpt2-2').val()/4
    console.log(diameter, oneSite)
    if (diameter < oneSite) {
        $('#out2').text('Круг помещается внутри квадрата')
        $('#circle').css("width", "90px")
        $('#circle').css("height", "90px") 
        $('#inpt2-1').val('')
        $('#inpt2-2').val('')
    }
    if (diameter > oneSite) {
        $('#out2').text('Круг НЕ помещается внутри квадрата')
        $('#circle').css("width", "110px")
        $('#circle').css("height", "110px")  
        $('#inpt2-1').val('')
        $('#inpt2-2').val('') 
    }
    if (diameter == oneSite) {
        $('#out2').text('Диамерт окружности равен стороне квадрата')
        $('#inpt2-1').val('')
        $('#inpt2-2').val('')
    }
}

$('#but2').click(f2)

let s = 0
function f3() { 
    let res = document.getElementsByName('group1')
    for (let i =0; i < res.length; i++) {
        if (res[i].checked && res[i].defaultValue == '3') {
            s = s + 2
            $('#bgc1').css("background-color", "rgba(15, 196, 72, 0.756)")
            $('#out3').text('Счетчик: '+s)
            console.log(s, res[i].defaultValue)
            $('#win').css("background-color", "rgba(15, 196, 72, 0.756)")
        }
        else {
            $('#win').css("background-color", "rgba(15, 196, 72, 0.756)")
        }
    }
}

$('#but3-1').click(f3)

function f4() { 
    let res = document.getElementsByName('group2')
    for (let i =0; i < res.length; i++) {
        if (res[i].checked && res[i].defaultValue == '2') {
            s = s + 2
            $('#out3').text('Счетчик: '+s)
            console.log(s, res[i].defaultValue)
            $('#win2').css("background-color", "rgba(15, 196, 72, 0.756)")
        }
        else {
            $('#win2').css("background-color", "rgba(15, 196, 72, 0.756)")
        }
    }
}

$('#but3-2').click(f4)

function f5() { 
    let res = document.getElementsByName('group3')
    for (let i =0; i < res.length; i++) {
        if (res[i].checked && res[i].defaultValue == '2') {
            s = s + 2
            $('#out3').text('Счетчик: '+s)
            console.log(s, res[i].defaultValue)
            $('#win3').css("background-color", "rgba(15, 196, 72, 0.756)")
        }
        else {
            $('#win3').css("background-color", "rgba(15, 196, 72, 0.756)")
        }
    }
}

$('#but3-3').click(f5)