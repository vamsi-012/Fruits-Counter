// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  eatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="app-container">
        <div className="fruits-count-container">
          <h1 className="count-heading">
            Bob ate <span className="count">{mangoesCount}</span> mangoes{' '}
            <span className="count">{bananasCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-img"
              />
              <button onClick={this.eatMango} type="button" className="eat-btn">
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-img"
              />
              <button
                onClick={this.eatBanana}
                type="button"
                className="eat-btn"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
