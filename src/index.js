import React from 'react'
import { render } from 'react-dom'
import { SnowboardDayCount } from './components/SnowboardDayCount'

window.React = React

render(
	<SnowboardDayCount 
				total={50}
				powder={20}
				backcountry={10}
				goal={100}/>,
	document.getElementById('react-container')
)