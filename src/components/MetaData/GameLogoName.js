import TicTacToeImg from '../../assets/TicTacToe.jpg'
import styles from './GameLogoName.module.css'

export const GameLogoName = () => {
	return (
		<div className={styles.gameLogoName}>
			<p>TIC TAC TOE</p>
			<img src={TicTacToeImg} alt="Game logo" />
		</div>
	)
}
