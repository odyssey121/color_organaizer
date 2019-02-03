import PropTypes from 'prop-types'

const Star = ({selected = true, onClick = f=>f}) =>
	<div className={(selected)? 'star selected': 'star'} 
	onClick = {onClick}>
	</div>


Star.propTypes = {
	'selected':PropTypes.bool,
	'onClick':PropTypes.func
}

const Star_rating = ({totalStars=5, starsSelected=0, onRate=f=>f}) =>
	<div className='star-rating'>
		{[...Array(totalStars)].map((elem,i) =>
			<Star key={i} selected={i<starsSelected}
			onClick={()=>onRate(i+1)} />
		)}
	</div>

export default Star_rating