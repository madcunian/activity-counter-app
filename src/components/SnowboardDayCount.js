import React from 'react';
import '../stylesheets/ui.scss'

export const SnowboardDayCount = React.createClass({
  render() {
    return (
      <div className="snowboard-day-count">
        <div className="total-days">
          <span>5 days</span>
        </div>
        <div className="powder-days">
          <span>2 days</span>
        </div>
        <div className="backcountry-days">
          <span>1 hiking day</span>
        </div>
      </div>
    )
  }
})