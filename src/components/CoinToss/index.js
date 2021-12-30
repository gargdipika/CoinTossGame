// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    head: 0,
    tail: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  changeTossResult = () => {
    const randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        head: prevState.head + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else if (randomNumber === 1) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tail: prevState.tail + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {total, head, tail, imgUrl} = this.state
    return (
      <div className="background-container">
        <div className="main-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img className="image" src={imgUrl} alt="toss result" />
          <button
            className="button"
            type="button"
            onClick={this.changeTossResult}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {head}</p>
            <p className="result">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
