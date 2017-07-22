import { Component } from 'react'
import { SnowboardDayList } from './SnowboardDayList'
import { SnowboardDayCount } from './SnowboardDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }

  countDays(filter) {
    const { allSnowboardDays } = this.state
    return allSnowboardDays.filter(
      (day) => (filter) ? day[filter] : day).length
  }

  render() {
    return (
      <div className="app">
        <Menu />
        {(this.props.location.pathname === "/") ? 
          <SnowboardDayCount total={this.countDays()}
                             powder={this.countDays(
                               "powder"
                             )}
                             backcountr={this.countDays(
                               "backcountry"
                             )} /> :
          (this.props.location.pathname === "/add-day") ?
            <AddDayForm /> :
            <SnowboardDayList days={this.state.allSnowboardDays} />
        }
        
      </div>
    )
  }
}