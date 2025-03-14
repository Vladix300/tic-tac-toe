import styles from './Information.module.css'
import PropTypes from 'prop-types'

const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
	return (
		<div className={styles.informationContainer}>
			<p>
				<span className={isGameEnded || isDraw ? styles.gameEnd : ''}>
					{isDraw
						? 'Ничья'
						: !isDraw && isGameEnded
							? `Победа : ${currentPlayer}`
							: !isDraw && !isGameEnded
								? `Ходит : ${currentPlayer}`
								: ''}
				</span>
			</p>
		</div>
	)
}

export const Information = ({ currentPlayer, isDraw, isGameEnded }) => {
	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
		/>
	)
}

Information.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
}
