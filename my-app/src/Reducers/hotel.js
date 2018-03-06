export default function (state = {
    title: "Welcome To Hotel Management",
    data: [],
    selectedHotel: ''
}, action) {
    switch (action.type) {
        case 'SetTitle':
            return Object.assign({}, state, { title: "Title changed" });
        case 'SelectHotel':
            return Object.assign({}, state, { selectedHotel: action.payload });
        case 'ReceivedData':
            return Object.assign({}, state, { data: action.payload });
        default:
            break;
    }
    return state;
}