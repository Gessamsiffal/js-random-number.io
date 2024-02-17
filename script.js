'use strict'

const secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20 // состояние наших очков
let highScore = 0

const displayGuessMessage = function (message) {
	document.querySelector('.guess-message').textContent = message
}

//Проверка ввода числа
const eventHandler = function () {
	const guessingNumber = Number(document.querySelector('.number-input').value)
	console.log(guessingNumber)

	if (!guessingNumber) {
		displayGuessMessage('Введите число!')
	} else if (guessingNumber === secretNumber) {
		displayGuessMessage('Угадали!')
		document.querySelector('.question').textContent = secretNumber
		document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)'
		document.querySelector('.question').style.width = '50rem'

		if (score > highScore) {
			highScore = score
			document.querySelector('.highscore').textContent = highScore
		}
	} else if (guessingNumber !== secretNumber) {
		if (score > 1) {
			displayGuessMessage(
				guessingNumber > secretNumber ? 'Слишком много' : 'Слишком мало'
			)
			score--
			document.querySelector('.score').textContent = score
		} else {
			displayGuessMessage('Проиграли!')
			document.querySelector('.score').textContent = 0
		}
	}
}

document.querySelector('.again').addEventListener('click', function () {
	score = 20
	document.querySelector('.question').style.width = '25rem'
	document.querySelector('.question').textContent = '???'
	displayGuessMessage('Начни угадывать')
	document.querySelector('.score').textContent = Number(score)
	document.querySelector('.number-input').value = ''
	document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)'
})

document.querySelector('.check').addEventListener('click', eventHandler)
document.querySelector('.again').addEventListener('click', reset)
