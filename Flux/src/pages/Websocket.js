import React, { useState, useLayoutEffect } from "react";
import WarringList from "../components/WarringList";
import WarringStore from "../stores/WarringStore";
import {subscribeToWarrings} from "../actions/warringActions";

function Websocket() {
    const [warrings, setWarrings] = useState(WarringStore.getFilteredWarring());

    useLayoutEffect(() => {
        WarringStore.addChangeListener(onChange);
        if (WarringStore.getFilteredWarring().length === 0) {
            subscribeToWarrings();
        }
        return () => WarringStore.removeChangeListener(onChange); //doesn't unsub immediately, the possibility to on page change
    }, []);

    function onChange() {
        setWarrings(WarringStore.getFilteredWarring());
    }

    return (
        <div>
            <WarringList warring={warrings}/>
        </div>
    );
}

export default Websocket;