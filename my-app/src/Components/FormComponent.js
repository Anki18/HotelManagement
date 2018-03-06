import React from 'react';
import _ from 'lodash';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchData();
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect = (event) => {
        this.props.selectHotel(event.target.value)
    }
    render() {
        return (
            <div>
                <h3 className="progress-bar">{this.props.hotel.title}</h3><br />
                <b>Select Hotel : </b>
                <select className="selectpicker" onChange={this.handleSelect}>
                    <option value="" >--Select Hotel--</option>
                    {
                        _.map(this.props.hotel.data, (a) => {
                            return <option key={a.title}
                                value={a.title}>{a.title}</option>
                        })}
                </select>
            </div>);
    }
}

export default FormComponent;