import styles from './StartAgainButton.module.css'
import PropTypes from 'prop-types'

export const StartAgainButton = ({ resetGame }) => {
	return (
		<button className={styles.startAgainBtn} onClick={resetGame}>
			Начать заново
		</button>
	)
}

StartAgainButton.propTypes = {
	resetGame: PropTypes.func,
}
