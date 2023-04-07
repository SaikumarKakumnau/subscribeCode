// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getButtonText = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const btnText = this.getButtonText()
    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you Happy Learning</p>
        <div className="btn-container">
          <button type="button" className="button" onClick={this.onSubscribe}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
