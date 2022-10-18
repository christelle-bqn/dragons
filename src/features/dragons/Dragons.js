import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createDragon, deleteDragon, incrementAsync, selectDragons, selectNbDragons} from "./dragonsSlice";
import uuid from "react-uuid";

export function Dragons() {
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState("");
  const [inputOld, setInputOld] = useState("");

  const dragons = useSelector(selectDragons);
  const nbDragons = useSelector(selectNbDragons);
  
  const handleCreateDragon = () => {
    const id = uuid();
    dispatch(createDragon({ id: id, name: inputName, old: inputOld }));
    dispatch(incrementAsync(1));
  };

  const handleDeleteDragon = (id) => {
    dispatch(deleteDragon(id));
    dispatch(incrementAsync(-1));
  };

  return (
    <div>
      <div>
        <h2>Nb dragon : {nbDragons}</h2>
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
        <button onClick={handleCreateDragon}>Ajouter un dragon</button>
      </div>
      <ul>
        {dragons.map((dragon) => (
          <li key={dragon.id}> 
            {dragon.name} - {dragon.old}
            <button onClick={() => handleDeleteDragon(dragon.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
