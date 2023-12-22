import './index.css'

const TabItem = props => {
  const {button, activateCategory, isActive} = props
  const {tabId, displayText} = button

  const buttonStyle = isActive ? 'active-button' : ''

  const changeCategory = () => {
    activateCategory(tabId)
  }
  return (
    <li className="button-list">
      <button onClick={changeCategory} className={`button ${buttonStyle}`}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
