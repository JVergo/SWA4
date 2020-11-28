import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

const socket = new WebSocket('ws://localhost:8090/warnings');
var data;

async function subscribeToWarrings() {
    socket.addEventListener('open', function (event) {
        socket.send('subscribe');
    });
}
    // Listen for messages
socket.addEventListener('message', function (event) {
    data = event.data;
    console.log(data);
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_WARRINGS,
        data: data,
    })
});

export {subscribeToWarrings}