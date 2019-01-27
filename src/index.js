import React from 'react'
import PropTypes from 'prop-types'
import {render} from 'react-dom'
import App from '../components/app'
import '../star.css'
import storeFactory from '../store/storeFactory'

window.React = React
const target = document.getElementById('root')

const store = storeFactory()

class Provider extends React.Component{
	getChildContext(){
		return {
			store:this.props.store
		}
	}
	componentWillMount(){
		this.unsubscribe = store.subscribe(
			() => this.forceUpdate()
			)
	}
	componenWillUnmount(){
		this.unsubscribe()
	}
	render(){
		const {children} = this.props
		return children
	}
}
Provider.childContextTypes = {
	store:PropTypes.object.isRequired
}
Provider.propTypes = {
	store:PropTypes.object.isRequired
}

render(
	<Provider store={store}>
		<App />
	</Provider>,
	target
	)



