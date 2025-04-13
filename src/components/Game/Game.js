import styles from './Game.module.css'
import { Information } from '../Information/Information'
import { Field } from '../Field/Field'
import { StartAgainButton } from '../StartAgainButton/StartAgainButton'
import { PLAYER_SIGN } from '../../assets/gameData'
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

	const [currentPlayer, setCurrentPlayer] = useState(PLAYER_SIGN[0])
	const [isGameEnded, setGameEnded] = useState(false)
	const [isDraw, setDraw] = useState(false)
	const [field, setField] = useState(PLAYER_FIELD)

	function resetGame() {
		setCurrentPlayer(PLAYER_SIGN[0])
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
			setCurrentPlayer(
				currentPlayer === PLAYER_SIGN[0] ? PLAYER_SIGN[1] : PLAYER_SIGN[0],
			)
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
