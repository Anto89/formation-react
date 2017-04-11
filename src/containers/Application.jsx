import React from 'react';
import Image from '../components/Image';
import Toolbar from '../components/Toolbar';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUrls } from '../actions/urls'

const mapStateToProps = ({ urls }) => ({
    urls,
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        fetchUrls: bindActionCreators(fetchUrls, dispatch),
    },
});

const connecter = connect(mapStateToProps, mapDispatchToProps);

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.showModalBound = this.showModal.bind(this);
    }

    showModal(event) {
        console.log(event);
    }

    render() {
        return (
            <div>
                <Toolbar>
                    <Button onClick={this.showModalBound}
                        label='Créer une image' />
                </Toolbar>
                <button
                    type='button'
                    onClick={this.props.actions.fetchUrls}>Random Pictures
                </button>
                {this.props.urls.map((url, index) => (
                    <Image key={index} source={url} title={url} width={200} />
                ))}
            </div>
        );
    }
}

export default connecter(Application);