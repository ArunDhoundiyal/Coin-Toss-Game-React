import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {condition: '', heads: 0, tails: 0, total: 0}

  onClickButton = () => {
    const result = ['heads', 'tails'][Math.ceil(Math.random() * 2) - 1]
    this.setState(prevState => ({
      condition: result,
      heads: result === 'heads' ? prevState.heads + 1 : prevState.heads,
      tails: result === 'tails' ? prevState.tails + 1 : prevState.tails,
      total: prevState.total + 1,
    }))
  }

  render() {
    const {condition, heads, tails, total} = this.state
    console.log(heads)
    console.log(tails)
    console.log(total)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="top-heading">Coin Toss Game</h1>
          <p className="head_or_tails">Heads (or) Tails</p>
          <div>
            {condition === 'tails' ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                alt="toss result"
                className="img-icon"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                alt="toss result"
                className="img-icon"
              />
            )}
          </div>

          <button
            className="style-button"
            type="button"
            onClick={this.onClickButton}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total:{total}</p>
            <p className="count">Heads:{heads}</p>
            <p className="count">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
