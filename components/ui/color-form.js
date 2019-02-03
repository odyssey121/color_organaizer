
const Color_form = ({addColor=f=>f}) =>{
	let _title,_color
	const submit = e =>{
		e.preventDefault()
		addColor(_title.value, _color.value)
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

export default Color_form