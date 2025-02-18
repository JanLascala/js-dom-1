console.log("work")

const whiteBulb = document.getElementById('white_bulb')

const yelloBulb = document.getElementById('yellow_bulb')

const powerButton = document.querySelector('.Switch')
console.log(powerButton)









powerButton.addEventListener('click', function () {
    console.log('click');

    whiteBulb.classList.toggle('block')
    yelloBulb.classList.toggle('lightup')
    if (powerButton.innerText === "turn ON") {
        powerButton.innerText = "turn OFF"
    } else {
        powerButton.innerText = "turn ON"
    }



})

