import React from 'react'
import {render} from 'react-dom'
<<<<<<< HEAD
=======
import App from '../components/app'
>>>>>>> 56cd983176a891df133f90bb2270ad5e2fc1334e
import '../star.css'
import storeFactory from '../store/storeFactory'

window.React = React
const target = document.getElementById('root')

const store = storeFactory()
<<<<<<< HEAD

=======
store.subscribe(() => custom_render())

const custom_render = () =>
	render(
		<App store={store} />,
		target
		)

custom_render()
>>>>>>> 56cd983176a891df133f90bb2270ad5e2fc1334e
