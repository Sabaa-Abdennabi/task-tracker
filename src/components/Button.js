import proptypes from 'prop-types'
const Button = ({ color, text, add }) => {

    return (
        <button style={{ backgroundColor: color }}
            className='btn'
            onClick={add}>{text}</button>
    )
}
Button.defaultProps = {
    color: 'steelblue',
    text: 'Add',
}
Button.propTypes = {
    text: proptypes.string,
}

export default Button
