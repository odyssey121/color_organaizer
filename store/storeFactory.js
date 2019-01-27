import {createStore,
	combineReducers,
	applyMiddleware} from 'redux'
import {colors,sort} from '../components/reducers'

const initialData = {}

const logger = store => next => action => {
	let result
	console.groupCollapsed('dispatching', action.type)
	console.log('prev state => ', store.getState())
	console.log('action => ', action)
	result = next(action)
	console.log('next state => ', store.getState())
	console.groupEnd()

}

const saver = store => next => action => {
	let result = next(action)
	localStorage['redux-store'] = JSON.stringify(store.getState())
	console.log('let result = next(action) => ',result)
	return result
}

const storeFactory = (initialState = initialData) =>
	applyMiddleware(logger, saver)(createStore)(
		combineReducers({colors, sort}),
		(localStorage['redux-store'])?
			JSON.parse(localStorage['redux-store']):
			initialData)

export default storeFactory

	