import React from 'react';
import PropTypes from 'prop-types'

class Image extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.source} title={this.props.title} width={this.props.width} />
                <p>{this.props.title}</p>
            </div>
        );
    }
}

Image.propTypes = {
    source: PropTypes.string.isRequired,
    title: PropTypes.string,
}

export default Image;