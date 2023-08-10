import Button from './Button'
import PropTypes from 'prop-types'
const Header = ({ title, Add, showAdd }) => {
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'close' : 'Add'}
                add={Add} />
        </header>
    )
}
Header.defaultProps = {
    title: 'TaskTracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
