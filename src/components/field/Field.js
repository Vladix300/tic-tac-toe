import styles from './Field.module.css'
import PropTypes from 'prop-types'

const FieldLayout = ({ field, isGameEnded, fieldStep }) => {
	return (
		<div className={styles.field}>
			{field.map((cell, id) => {
				return (
					<button
						key={id}
						className={!field[id] && !isGameEnded ? styles.empty : ''}
						disabled={isGameEnded || field[id]}
						onClick={() => {
							fieldStep(id)
						}}
					>
						{cell}
					</button>
				)
			})}
		</div>
	)
}

export const Field = ({ field, isGameEnded, fieldStep }) => {
	return <FieldLayout field={field} isGameEnded={isGameEnded} fieldStep={fieldStep} />
}

Field.propTypes = {
	field: PropTypes.array,
	isGameEnded: PropTypes.bool,
	fieldStep: PropTypes.func,
}
