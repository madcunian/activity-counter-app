import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/md/ac-unit'
import Calendar from 'react-icons/lib/fa/calendar'

export const SnowboardDayRow = ({resort, date, powder, backcountry}) => (
  <tr>
    <td>
      {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
    </td>
    <td>
      {resort}
    </td>
    <td>
      {(powder) ? <SnowFlake /> : null}
    </td>
    <td>
      {(backcountry) ? <Terrain /> : null}
    </td>
  </tr>
)