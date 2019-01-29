import * as action from './actions'
import PropTypes from 'prop-types'

const Color_form = function (props, {store}) {
	let _title,_color
	const submit = e =>{
		e.preventDefault()
		store.dispatch(action.add_color(_title.value,_color.value))
		_title.value = ''
		_color.value = '#000000'
		_title.focus()
	}
	return(
		<form onSubmit={submit}>
			<input type='text' ref={input => _title = input} placeholder='color title...' required/>
			<input type='text' ref={input => _color = input} placeholder='color code' required/>
			<button> add </button>
		</form>
		)
}

Color_form.contextTypes = {
	store:PropTypes.object
}

export default Color_form