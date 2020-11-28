import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _warrings = [];
let _filteredWarring = [];

class WarringStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getWarring(){
        return _warrings;
    }
    getFilteredWarring(){
        return _filteredWarring;
    }
}

const store = new WarringStore();

dispatcher.register(async (action) => {
    switch (action.actionTypes) {
        case actionTypes.GET_WARRINGS:
            _warrings = JSON.parse(action.data);
            _filteredWarring = _warrings;
            store.emitChange();
            break;
        default:
    }
});

export default store;