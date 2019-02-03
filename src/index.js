import {Provider} from 'react-redux'
import {render} from 'react-dom'
import storeFactory from '../store/storeFactory'
import App from '../components/app'
import '../star.css'
import React from 'react'

window.React = React

const target = document.getElementById('root')
const store = storeFactory()

render(
	<Provider store={store}>
		<App />
	</Provider>,
	target
	)
