import PropTypes from 'prop-types'

const Color_list = (props, {store}) =>{
	const {colors,sort} = store.getState()
	return (
			<section id='color-list'>
			{(colors.lenght == 0)?
				<p> Not colors yet </p> :
				<div className='color-list'>
					{colors.map((color, i) =>
							<Color key={color.id} {...color}/>
							)}
				</div>}
			</section>
	)
}

Color_list.contextTypes = {
	store:PropTypes.object
}

export default Color_list