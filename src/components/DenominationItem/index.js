// Write your code here
import './index.css'

const DenominationItem = props => {
  const {Item, withdraw} = props
  const {id, value} = Item

  const onPress = () => {
    console.log(`Hi its  ${value}`)
    withdraw(value)
  }

  return (
    <li className="List">
      <button type="button" onClick={onPress}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
