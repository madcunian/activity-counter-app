import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/md/ac-unit'
import Calendar from 'react-icons/lib/fa/calendar'
import { SnowboardDayRow } from './SnowboardDayRow'

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