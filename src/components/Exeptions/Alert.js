import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }


    render() {
        return (
            <React.Fragment>
                <Alert variant="danger">
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                </Alert>
            </React.Fragment>
        );
    }
}

Alert.propTypes = {};

export default Alert;
