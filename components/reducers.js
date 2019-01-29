import C from './constants'

export const colors = (state = [], action) =>{
	switch (action.type){
		case C.ADD_COLOR:
			return [
			...state,
			color({}, action)
			]
		case C.RATE_COLOR:
			return state.map(c => 
				color(c,action))

		case C.REMOVE_COLOR:
			return state.filter(c =>
				c.id != action.id)

		default:
			return state
	}
}

export const color = (state = {}, action) =>{
	switch (action.type){
		case C.ADD_COLOR:
			return {
				id:action.id,
				title:action.title,
				color:action.color,
				rating:action.rating,
				date:action.date
			}

		case C.RATE_COLOR:
			return (state.id !== action.id)?
				state:
				{
					...state,
					rating:action.rating
				}

		default:
			return state
	}	
}

export const sort = (state = 'date', action) =>{
	switch (action.type){
		case C.SORT_COLORS:
			return action.sortBy
		default:
			return state
	}
}