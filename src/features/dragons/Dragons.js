import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createDragon, getDragons } from "./dragonsSlice";
import uuid from "react-uuid";

export function Dragons() {
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState("");
  const [inputOld, setInputOld] = useState("");

  // const dragons = useSelector((state) => state.dragons);
  const dragons = useSelector((state) => state.dragons);
  //const dragons = dispatch(getDragons());

  const handleClick = () => {
    const id = uuid();
    dispatch(createDragon({ id: id, name: inputName, old: inputOld }));
  };

  return (
    <div>
      <div>
        <h1>Dragons</h1>
        <label>Name</label>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <label>Age</label>
        <input
          type="number"
          min={0}
          value={inputOld}
          onChange={(e) => setInputOld(e.target.value)}
        />
        <button onClick={handleClick}>Ajouter un dragon</button>
      </div>
      <ul>
        {dragons.dragons.map((dragon, index) => (
          <li key={index}>
            {dragon.name} - {dragon.old}
          </li>
        ))}
      </ul>
    </div>
  );
}
