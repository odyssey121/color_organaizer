import React from 'react'
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
	render(){
		const {children} = this.props
		return children
	}

}

