import {connect} from 'react-redux'
import Color_list from './ui/color-list'
import Color_form from './ui/color-form'
import Color_order from './ui/color-order'
import {add_color,remove_color,
		rate_color,sort_color} from './actions'
import customSort from './func-helpers'


export const Colors = connect(state =>
	({
		sortedColors:[...state.colors].sort(customSort(state.sort))
	}),
	dispatch =>
	({
		onRate(id, rating){
			dispatch(rate_color(id, rating))
		},
		onRemove(id){
			dispatch(remove_color(id))
		}

	}))(Color_list)

export const NewColor = connect(
	null,
	dispatch =>
	({
		addColor(title, color){
			dispatch(add_color(title, color))
		}
	}))(Color_form)

export const MenuSort = connect(
	state =>
	({
		sort:state.sort
	}),
	dispatch =>
	({
		selected(sortBy){
			dispatch(sort_color(sortBy))
		}
	}))(Color_order)