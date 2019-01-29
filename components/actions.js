import v4 from 'uuid'
import C from './constants'

export const add_color = (title,color) => (
	{
		type:C.ADD_COLOR,
		id:v4(),
		title:title,
		color:color,
		rating:0,
		date:new Date().getTime()
	}
	)

export const rate_color = (id,rating) =>(
	{
		type:C.RATE_COLOR,
		id:id,
		rating:rating
	}
	)

export const remove_color = (id) =>(
	{
		type:C.REMOVE_COLOR,
		id:id
	}
	)

const sort_color = (sort) => (
	{
		type:C.SORT_COLORS,
		sortBy:sort
	}
	)

export default sort_color


