import React from "react";
import Predection from "./Prediction";

function WarringLists(props) {
    let key = 0;

    if (props.warring.warnings !== undefined) {
        return (
            <div style={{ margin: 20 }}>
                <h2 className="card-header">{props.warring.time}</h2>
                {props.warring.warnings.map((warnings) => (
                    <div key={key++}>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>severity</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>{warnings.id}</td>
                                            <td>{warnings.severity}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Predection predection={warnings.prediction} />
                            </blockquote>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    else {
        return (<div>Loading...</div>)
    }
}

export default WarringLists;
