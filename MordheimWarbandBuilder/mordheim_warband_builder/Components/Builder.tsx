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
                <div className="dropdown">
  <button>Warband Selector</button>
  <div id="myDropdown" className="warband_selector">
    <ol>Reikland Mercenaries</ol>
    <ol>Marienburg Mercenaries</ol>
    <ol>Middenheim Mercenaries</ol>
    <ol>Sisters of Sigmar</ol>
    <ol></ol>
  </div>
</div> 
            </div>
        </div>
    )
}