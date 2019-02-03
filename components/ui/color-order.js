const Color_order = ({selected=f=>f}) =>{
	const Change = (e) => {
		e.preventDefault()
		let target = e.target
		selected(target.value)
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

export default Color_order