import { createClass } from 'react'
import { SnowboardDayList } from './SnowboardDayList'
import { SnowboardDayCount } from './SnowboardDayCount'

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

  countDays(filter) {
    const allSnowboardDays = this.state
    return allSnowboardDays.filter((day) => (filter) ? day[filter] : day).length
  },

  render() {
    return (
      <div className="app">
        <SnowboardDayList days={this.state.allSnowboardDays} />
        <SnowboardDayCount total={this.countDays()}
                           powder={this.countDays(
                             "powder"
                           )}
                           backcountr={this.countDays(
                             "backcountry"
                           )} />
      </div>
    )
  }
 })