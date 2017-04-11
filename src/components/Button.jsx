import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
    render() {
        const {label, onClick, type} = this.props;
        return (
            <button onClick={onClick} type='button'>{label}</button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    type: PropTypes.oneOf(['primary']).isRequired,
};

Button.defaultProps = {
    type: 'primary',
}

export default Button;