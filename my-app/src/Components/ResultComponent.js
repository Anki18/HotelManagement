import React from 'react';
import _ from 'lodash';

const RenderHotel = props => {
    var hotel = _.find(props.hotel.data, (a) => { return a.title === props.hotel.selectedHotel });
    return (<div>
        <b>Rank</b> - {hotel.userId}<br/>
        <b>Hotel Name</b> - {hotel.title}<br/>
        <b>Description</b> - {hotel.body}<br/>
    </div>);
}

const ResultComponent = props => {
    return (props.hotel.selectedHotel ?
        <RenderHotel
            hotel={props.hotel} />
        : null);
}

export default ResultComponent;