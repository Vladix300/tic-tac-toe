import styles from './Game.module.css'
import { Information } from '../Information/Information'
import { Field } from '../Field/Field'
import { StartAgainButton } from '../StartAgainButton/StartAgainButton'
import { determineWinner } from '../../assets/gameData'
import { useState } from 'react'

const GameLayout = ({
	currentPlayer,
	isDraw,
	isGameEnded,
	field,
	fieldStep,
	resetGame,
}) => {
	return (
		<>
			<Information
				currentPlayer={currentPlayer}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
			/>
			<Field field={field} isGameEnded={isGameEnded} fieldStep={fieldStep} />
			<StartAgainButton resetGame={resetGame} />
		</>
	)
}

export function Game() {
	const PLAYER_FIELD = ['', '', '', '', '', '', '', '', '']

	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setGameEnded] = useState(false)
	const [isDraw, setDraw] = useState(false)
	const [field, setField] = useState(PLAYER_FIELD)

	function resetGame() {
		setCurrentPlayer('X')
		setGameEnded(false)
		setDraw(false)
		setField(PLAYER_FIELD)
	}

	function fieldStep(id) {
		const newField = [...field]
		newField[id] = currentPlayer
		setField(newField)

		if (determineWinner(newField)) {
			setGameEnded(true)
		} else if (!determineWinner(newField) && newField.every((f) => f !== '')) {
			setDraw(true)
		} else if (!determineWinner(newField)) {
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
		}
	}

	return (
		<div className={styles.Game}>
			<GameLayout
				currentPlayer={currentPlayer}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				field={field}
				fieldStep={fieldStep}
				resetGame={resetGame}
			/>
		</div>
	)
}
