import React from 'react';

export default class Toolbar extends React.Component {
    render() {
        const style = {
            backgroundColor: 'rgb(232, 232, 232)',
            height: '60px',
            width: '100%'
        };
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}