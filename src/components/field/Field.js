import styles from './Field.module.css'
import { PLAYER_SIGN } from '../../assets/gameData'
import { determineWinner } from '../../assets/gameData'
import PropTypes from 'prop-types'

const FieldLayout = ({
	field,
	setGameField,
	currentPlayer,
	setCurrentPlayer,
	setDraw,
	isGameEnded,
	setGameEnded,
}) => {
	return (
		<div className={styles.field}>
			{field.map((cell, id) => {
				return (
					<button
						key={id}
						className={!field[id] && !isGameEnded ? styles.empty : ''}
						disabled={isGameEnded || field[id]}
						onClick={() => {
							const newField = [...field]
							newField[id] = currentPlayer
							setGameField(newField)

							if (determineWinner(newField)) {
								setGameEnded(true)
							} else if (
								!determineWinner(newField) &&
								newField.every((f) => f !== '')
							) {
								setDraw(true)
							} else if (!determineWinner(newField)) {
								setCurrentPlayer(
									currentPlayer === PLAYER_SIGN[0]
										? PLAYER_SIGN[1]
										: PLAYER_SIGN[0],
								)
							}
						}}
					>
						{cell}
					</button>
				)
			})}
		</div>
	)
}

export const Field = ({
	field,
	setGameField,
	currentPlayer,
	setCurrentPlayer,
	setDraw,
	isGameEnded,
	setGameEnded,
}) => {
	return (
		<FieldLayout
			field={field}
			setGameField={setGameField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			setDraw={setDraw}
			isGameEnded={isGameEnded}
			setGameEnded={setGameEnded}
		/>
	)
}

Field.propTypes = {
	field: PropTypes.array,
	currentPlayer: PropTypes.oneOf(['X', 'O']),
	isGameEnded: PropTypes.bool,
	setGameField: PropTypes.func,
	setCurrentPlayer: PropTypes.func,
	setDraw: PropTypes.func,
	setGameEnded: PropTypes.func,
}
