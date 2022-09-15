// Write your code here
import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  onWithdraw = value => {
    console.log(`${value}`)
    this.setState(prevState => {
      if (prevState.amount >= value) {
        return {amount: prevState.amount - value}
      }
      return {amount: prevState.amount}
    })
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="container">
        <div className="Box">
          <div className="Profile">
            <div className="B1">
              <div className="Pic">
                <p>S</p>
              </div>
              <h1 className="heading">Sarah Williams</h1>{' '}
            </div>
            <div className="B1">
              <p className="balance">Your Balance</p>
              <div className="Rup">
                <p className="Amount">{amount}</p>
                <p>In Rupees</p>
              </div>
            </div>
          </div>
          <div className="withd">
            <p className="With">Withdraw</p>
            <p className="balance">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul>
            {denominationsList.map(each => (
              <DenominationItem
                Item={each}
                key={each.id}
                withdraw={this.onWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
