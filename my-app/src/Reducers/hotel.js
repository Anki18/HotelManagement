export default function (state = {
    title : "Welcome To Hotel Management"
}, action) {
    switch (action.type) {
        case 'SetTitle':
        return Object.assign({}, state, {title: "Title changed"});
        default:
            break;
    }
    return state;
}