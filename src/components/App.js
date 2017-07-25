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
          date: "2016-01-02",
          powder: true,
          backcountry: false
        }
      ]
    }
    this.addDay = this.addDay.bind(this)
  }

  addDay(newDay) {
    this.setState({
      allSnowboardDays: [
        ...this.state.allSnowboardDays,
        newDay
      ]
    })
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
            <AddDayForm onNewDay={this.addDay} /> :
            <SnowboardDayList days={this.state.allSnowboardDays} 
            filter={this.props.params.filter} />
        }
        
      </div>
    )
  }
}