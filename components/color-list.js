import PropTypes from 'prop-types'
import Color from './color'
import customSort from './func-helpers'

const Color_list = (props, {store}) =>{
	const {colors,sort} = store.getState()
	const sortColors = [...colors].sort(customSort(sort))
	return (
			<section id='color-list'>
			{(sortColors.lenght == 0)?
				<p> Not colors yet </p> :
				<div className='color-list'>
					{sortColors.map((color, i) =>
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