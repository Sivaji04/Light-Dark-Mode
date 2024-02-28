// Write your code here
import {Component} from 'react'
import './index.css'

class App extends Component {
  state = {
    isChangeColor: true,
  }
  changingMode = () => {
    this.setState(prevVal => ({
      isChangeColor: !prevVal.isChangeColor,
    }))
  }

  render() {
    const {isChangeColor} = this.state
    const changeClass = isChangeColor ? 'light' : 'dark'
    const text = isChangeColor ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`card-container ${changeClass}`}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.changingMode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default App
