import React, { useState } from "react";

export default function WarbandBuilder() {

    return (
        <div>
            <h2>Warband Builder</h2>
            <div>
                <label htmlFor="warband_name">Warband Name</label>
                <input
                // defaultValue={formValues.warband_name}
                placeholder="Enter Warband Name"
                type="text"
                />
            </div>
        </div>
    )
}