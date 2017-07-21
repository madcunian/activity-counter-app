import { createClass } from 'react'

export const App = createClass({
  getInitialState() {
    return {
      allSnowboardDays: [
			{
				resort: "Cypress Mountain",
				date: new Date("1/2/2017"),
				powder: true,
				backcountry: false
			},
			{
				resort: "Grouse Mountain",
				date: new Date("3/28/2017"),
				powder: false,
				backcountry: false
			},
			{
				resort: "Mount Seymour",
				date: new Date("1/2/2017"),
				powder: false,
				backcountry: true
			}
		]
    }
  },

  render() {
    return (
      <div className="app">
        {this.state.allSnowboardDays[0]["resort"]}
      </div>
    )
  }
 })