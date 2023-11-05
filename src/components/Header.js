import PropTypes from 'prop-types'
import Button from './Button'

const header = ({ title, onAdd, showAdd}) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd? 'Red' : 'green'} text= {showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}


header.defaultProps = {
    title: 'Task Tracker',
}

header.prototype = {
  title: PropTypes.string.isRequired,
}

export default header
