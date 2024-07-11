import React from "react";

function Filters() {
  return (
    <div>
      <h1>FIlters</h1>
      <hr />
      <h1>Price Range</h1>
      <span className="lable">
        <p className="input-label">Low to High</p>
        <input type="checkbox" name="" id="L-H" />
      </span>
      <span className="lable">
        <p className="input-label">High to Low</p>
        <input type="checkbox" name="" id="H-L" />
      </span>
      <h1>Gem type</h1>
      <span className="lable">
        <p className="input-label">Moissanite</p>
        <input type="checkbox" name="" id="Moissanite" />
      </span>
      <span className="lable">
        <p className="input-label">Ruby</p>
        <input type="checkbox" name="" id="Ruby" />
      </span>
      <span className="lable">
        <p className="input-label">Emerald</p>
        <input type="checkbox" name="" id="Emerald" />
      </span>
      <span className="lable">
        <p className="input-label">Diamond</p>
        <input type="checkbox" name="" id="Diamond" />
      </span>
      <span className="lable">
        <p className="input-label">Coloured diamonds</p>
        <input type="checkbox" name="" id="Coloured diamonds" />
      </span>
      <h1>Ring style</h1>
      <span className="lable">
        <p className="input-label">Single band</p>
        <input type="checkbox" name="" id="Single band" />
      </span>
      <span className="lable">
        <p className="input-label">Douuble band</p>
        <input type="checkbox" name="" id="Doule band" />
      </span>
    </div>
  );
}

export default Filters;
