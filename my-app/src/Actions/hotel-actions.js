import axios from 'axios';

export const selectHotel = (value) => {
    return {
        type: "SelectHotel",
        payload: value
    };
};

export const fetchData = () => {
    return dispatch =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            dispatch({
                type: "ReceivedData",
                payload: res.data
            });
        }).catch();
    };
};