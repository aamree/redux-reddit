import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Picker extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render() {
    const { value, onChange, options } = this.props

    return (
      <span>
        <h1>{ value }</h1>
        <select onChange={e => onChange(e.target.value)} value={value}>
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </span>
    )
  }
}

export default Picker