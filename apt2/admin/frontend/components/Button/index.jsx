import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    const { content, onClick } = props

    return (
        <button
            type="button"
            onClick={onClick}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
            {content}
        </button>
    )
}

Button.defaultProps = {
    content: <p>Button</p>,
    onClick: () => null,
}

Button.propTypes = {
    content: PropTypes.element,
    onClick: PropTypes.func,
}

export default Button
