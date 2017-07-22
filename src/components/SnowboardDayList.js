import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/md/ac-unit'
import Calendar from 'react-icons/lib/fa/calendar'
import { SnowboardDayRow } from './SnowboardDayRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const SnowboardDayList = ({days, filter}) => {
  const filteredDays = (!filter || !filter.match(/powder|backcountry/)) ?
    days:
    days.filter(day => day[filter])
      
  return(
    <div className="snowboard-day-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Resort</th>
            <th>Powder</th>
            <th>Backcountry</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <Link to="/list-days">
                All days
              </Link>
              <Link to="/list-days/powder">
                Powder days
              </Link>
              <Link to="/list-days/backcountry">
                Backcountry days
              </Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredDays.map((day, i) =>
            <SnowboardDayRow key={i}
                            {...day} />
          )}
        </tbody>
      </table>
    </div>
  )
}

SnowboardDayList.propTypes = {
  days: function(props) {
    if(!Array.isArray(props.days)) {
      return new Error(
        "SnowboardDayList should be an array"
      )
    } else if(!props.days.length) {
      return new Error(
        "SnowboardDayList must have at least one record"
      )
    } else {
      return null
    }
  }
}