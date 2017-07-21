import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/md/ac-unit'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}

export const SnowboardDayCount = ({total=70, powder=20, 
                                   backcountry=10, goal=100}) => 
  <div className="snowboard-day-count">
    <div className="total-days">
      <Calendar />
      <span>{total}</span>
      <span>days</span>
    </div>
    <div className="powder-days">
      <SnowFlake />
      <span>{powder}</span>
      <span>days</span>
    </div>
    <div className="backcountry-days">
      <Terrain />
      <span>{backcountry}</span>
      <span>days</span>
    </div>
    <div>
      <span>
        {calcGoalProgress(total, goal)}
      </span>
    </div>
  </div>

SnowboardDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number
}