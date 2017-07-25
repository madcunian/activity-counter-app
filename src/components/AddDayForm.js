import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {
  render () {

    const { resort, date, powder, backcountry } = this.props

    return (
      <form className="add-day-form">
        <label htmlFor="resort">Resort Name</label>
        <input id ="resort"
               type="text"
               required
               defaultValue={resort} />

        <label htmlFor="date">Date</label>
        <input id ="date"
               type="date"
               required
               defaultValue={date} />

        <div>
          <label htmlFor="powder">Powder</label>
          <input id ="powder"
                type="checkbox"
                defaultChecked={powder} />
        </div>

        <div>
          <label htmlFor="backcountry">Backcountry</label>
          <input id ="backcountry"
                 type="checkbox"
                 defaultChecked={backcountry} />
        </div>
      </form>
    )
  }
}

AddDayForm.defaultProps = {
  resort: "Cypress Mountain",
  date: "2017-02-12",
  powder: true,
  backcountry: false
}

AddDayForm.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool.isRequired,
  backcountry: PropTypes.bool.isRequired
}