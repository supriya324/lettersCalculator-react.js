import {Component} from 'react'

import './index.css'

class LettersCaluclator extends Component {
  state = {searchInput: ''}

  onchangeValue = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="app-container">
        <div className="caluclator-container">
          <div className="letters-caluclator">
            <h1 className="heading"> Calculate the Letters you enter </h1>
            <label className="label-text" htmlFor="searchInput">
              Enter the phrase
            </label>
            <input
              type="text"
              id="searchInput"
              value={searchInput}
              onChange={this.onchangeValue}
              className="searchInput"
              placeholder="Enter the phrase"
            />
            <p className="text"> No.of letters: {searchInput.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="caluclator-count"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCaluclator
