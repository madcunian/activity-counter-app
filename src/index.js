import React from 'react'
import { render } from 'react-dom'
import { SnowboardDayCount } from './components/SnowboardDayCount'

window.React = React

render(
	<SnowboardDayCount />,
	document.getElementById('react-container')
)

// render(
// 	<SnowboardDayList days={
// 		[
// 			{
// 				resort: "Cypress Mountain",
// 				date: new Date("1/2/2017"),
// 				powder: true,
// 				backcountry: false
// 			},
// 			{
// 				resort: "Grouse Mountain",
// 				date: new Date("3/28/2017"),
// 				powder: false,
// 				backcountry: false
// 			},
// 			{
// 				resort: "Mount Seymour",
// 				date: new Date("1/2/2017"),
// 				powder: false,
// 				backcountry: true
// 			}
// 		]
// 	}/>,
// 	document.getElementById('react-container')
// )