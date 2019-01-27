import React from 'react'
import {render} from 'react-dom'
import App from '../components/app'
import '../star.css'
import storeFactory from '../store/storeFactory'

window.React = React
const target = document.getElementById('root')

const store = storeFactory()
store.subscribe(() => custom_render())

const custom_render = () =>
	render(
		<App store={store} />,
		target
		)

custom_render()
