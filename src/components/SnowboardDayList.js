import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/md/ac-unit'
import Calendar from 'react-icons/lib/fa/calendar'
import { SnowboardDayRow } from './SnowboardDayRow'
import { PropTypes } from 'react'

export const SnowboardDayList = ({days}) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Resort</th>
        <th>Powder</th>
        <th>Backcountry</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) =>
        <SnowboardDayRow key={i}
                         {...day} />
      )}
    </tbody>
  </table>
)

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