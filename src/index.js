import React from 'react'
import { render } from 'react-dom'
import { SnowboardDayCount } from './components/SnowboardDayCount'

window.React = React

render(
	<SnowboardDayCount />,
	document.getElementById('react-container')
)