import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FormComponent from '../Components/FormComponent';
import ResultComponent from '../Components/ResultComponent';
import * as locationActions from "../Actions/hotel-actions";

class App extends Component {
    render() {
        return (
            <div className="container form-group">
                <FormComponent
                    hotel={this.props.hotel}
                    selectHotel ={this.props.selectHotel}
                    fetchData ={this.props.fetchData} />
                    <hr/>
                <ResultComponent 
                    hotel={this.props.hotel}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        hotel: state,
    };
}

function matchDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(
        Object.assign({}, locationActions), dispatch),
        dispatch
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
