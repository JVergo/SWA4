import React from "react";

function WarringLists(props) {
    let key = 0;
    if (props.predection !== undefined) {
        return (
            <div>
                <table key={key++}>
                    <thead>
                        <tr>
                            <th>from</th>
                            <th>to</th>
                            <th>type</th>
                            <th>precipitation_types</th>
                            <th>unit</th>
                            <th>place</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{props.predection?.from}</td>
                            <td>{props.predection?.to}</td>
                            <td>{props.predection?.type}</td>
                            <td>{props.predection?.precipitation_types}</td>
                            <td>{props.predection?.unit}</td>
                            <td>{props.predection?.place}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    else {
        return (<div>Loading...</div>)
    }
}

export default WarringLists;