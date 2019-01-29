import {Component} from 'react'
import PropTypes from 'prop-types'
import Star_rating from './star-rating'
import {remove_color, rate_color} from './actions'

class Color extends Component{
	render(){
		const {store} = this.context
		const {id, title, color, rating, timestamp} = this.props
		return(
				<div className='color-section' style={this.style}>
					<h1 ref='title'>{title}</h1>
					<button onClick={() => store.dispatch(
						remove_color(id))}>X</button>
					<div className='color' style={{ backgroundColor:color }}>
					</div>
					<Star_rating starsSelected={rating}
					onRate={rating=>store.dispatch(rate_color(id,rating))}/>
				</div>
			)
	}

}

Color.propTypes = {
	id:PropTypes.string.isRequired,
	title:PropTypes.string.isRequired,
	color:PropTypes.string.isRequired,
	rating:PropTypes.number.isRequired
}

Color.contextTypes ={
	store:PropTypes.object
}

export default Color
