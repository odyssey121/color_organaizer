import PropTypes from 'prop-types'
import Star_rating from './star-rating'

const Color_list = ({sortedColors, onRate=f=>f, onRemove=f=>f}) =>
	<section id='color-list'>
	{(sortedColors.lenght == 0)?
		<p> Not colors yet </p> :
		<div className='color-list'>
			{sortedColors.map((color, i) =>
					<Color key={color.id} {...color}
					onRate={(id,rating)=>onRate(id,rating)}
					onRemove={id=>onRemove(id)} />
					)}
		</div>}
	</section>

// Color_list.propTypes ={
// 	'sortedColors':PropTypes.object.isRequired,
// 	'onRate':PropTypes.object.isRequired,
// 	'onRemove':PropTypes.object.isRequired
// }
	
export default Color_list

const Color = ({id,title, rating=0, color, onRate=f=>f, onRemove=f=>f}) =>
	<section>
		<h1>{title}</h1>
		<div className='color-div' style={{background: color}}>
		<button onClick={()=>onRemove(id)}>X</button>
		<Star_rating starsSelected={rating} onRate={rating=>onRate(id,rating)}/>
		</div>
	</section>
