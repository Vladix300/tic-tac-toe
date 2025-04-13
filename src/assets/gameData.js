export const PLAYER_SIGN = ['X', 'O']

export const WIN_PATTERNS = [
	[0, 1, 2], // Варианты побед по горизонтали
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6], // Варианты побед по вертикали
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8], // Варианты побед по диагонали
	[2, 4, 6],
]

// Функция определяющая победителя : X или O (можно было сделать просто возврат true или false, без определения двух переменных, но мне показалось что так точнее)
// Даже если это и не требуется для функционала. Так как компонент Information выводит значение последнего зафиксированного currentPlayer в случае победы

export function determineWinner(field) {
	let winnerX = false
	let winnerO = false

	winnerX = WIN_PATTERNS.some((p) => {
		return p.every((id) => {
			return field[id] === 'X'
		})
	})
	winnerO = WIN_PATTERNS.some((p) => {
		return p.every((id) => {
			return field[id] === 'O'
		})
	})
	if (winnerX || winnerO) {
		console.log(`X : ${winnerX}, O : ${winnerO}`)
		return true
	} else {
		console.log('no winner')
		return false
	}
}
