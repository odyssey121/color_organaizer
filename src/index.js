import React from 'react'
import {render} from 'react-dom'
import '../star.css'
import storeFactory from '../store/storeFactory'

window.React = React
const target = document.getElementById('root')

const store = storeFactory()

