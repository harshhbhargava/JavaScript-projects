var bulb = document.querySelector('.bulb')
var btn = document.querySelector('button')


var flag = 0
btn.addEventListener('click', function () {
    if (flag == 0) {
        bulb.style.backgroundColor = 'yellow'
        flag = 1
        btn.innerHTML = 'OFF'
    }
    else {
        bulb.style.backgroundColor = 'transparent'
        btn.innerHTML = 'ON'
        flag = 0
    }
})