import sort_color from './actions'
import PropTypes from 'prop-types'

const Color_order = (props, {store}) =>{
	const {sort} = store.getState()
	const Change = (e) => {
		e.preventDefault()
		let target = e.target
		store.dispatch(sort_color(target.value))
	}
	return(
			<div className='option-sort'>
				<select onChange={Change} defaultValue='date'>
					<option value='title'>SORT BY TITLE</option>
					<option value='date'>SORT BY DATE</option>
					<option value='rating'>SORT BY RATING</option>
				</select>
			</div>
	)
}

Color_order.contextTypes = {
	store:PropTypes.object
}

export default Color_order