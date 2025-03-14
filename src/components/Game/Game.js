import styles from './Game.module.css'
import { Information } from '../Information/Information'
import { Field } from '../field/Field'
import { StartAgainButton } from '../StartAgainButton/StartAgainButton'
import { PLAYER_SIGN } from '../../assets/gameData'
import { useState } from 'react'

const GameLayout = ({
	field,
	setGameField,
	currentPlayer,
	setCurrentPlayer,
	isDraw,
	setDraw,
	isGameEnded,
	setGameEnded,
	resetGame,
}) => {
	return (
		<>
			<Information
				currentPlayer={currentPlayer}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
			/>
			<Field
				field={field}
				setGameField={setGameField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setDraw={setDraw}
				isGameEnded={isGameEnded}
				setGameEnded={setGameEnded}
			/>
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

	return (
		<div className={styles.Game}>
			<GameLayout
				field={field}
				setGameField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isDraw={isDraw}
				setDraw={setDraw}
				isGameEnded={isGameEnded}
				setGameEnded={setGameEnded}
				resetGame={resetGame}
			/>
		</div>
	)
}
