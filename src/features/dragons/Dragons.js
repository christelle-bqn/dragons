import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createDragon,
  deleteDragon,
  incrementAsync,
  selectDragons,
  selectNbDragons,
  updateDragon,
} from "./dragonsSlice";
import uuid from "react-uuid";

import "./Dragons.css";

export function Dragons() {
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState("");
  const [inputOld, setInputOld] = useState("");

  const [update, setUpdate] = useState(false);
  const [inputNameUpdate, setInputNameUpdate] = useState("");
  const [inputOldUpdate, setInputOldUpdate] = useState("");
  const [dragonIdUpdate, setDragonIdUpdate] = useState("");

  const dragons = useSelector(selectDragons);
  const nbDragons = useSelector(selectNbDragons);

  const handleCreateDragon = () => {
    const id = uuid();
    dispatch(createDragon({ id: id, name: inputName, old: inputOld }));
    dispatch(incrementAsync(1));
    setInputName("");
    setInputOld("");
  };

  const handleDeleteDragon = (id) => {
    dispatch(deleteDragon(id));
    dispatch(incrementAsync(-1));
  };

  const handleUpdateDragon = (dragon) => {
    setDragonIdUpdate(dragon.id);
    setInputNameUpdate(dragon.name);
    setInputOldUpdate(dragon.old);
    setUpdate(true);
  };

  const handleConfirmUpdateDragon = (dragon) => {
    dispatch(
      updateDragon({
        dragon,
        updateValues: { name: inputNameUpdate, old: inputOldUpdate },
      })
    );
    setUpdate(false);
  };

  return (
    <div>
      <h1 className="font-carter-one title">DRAGONS</h1>
      <div className="createContainer">
        <p className="titleCreate">Créer un dragon</p>

        <div className="inputsContainer">
          <div>
            <label className="label">NOM</label>
            <input
              type="text"
              className="input inputName"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
          </div>

          <div>
            <label className="label">AGE</label>
            <input
              type="number"
              className="input"
              min={0}
              value={inputOld}
              onChange={(e) => setInputOld(e.target.value)}
            />
          </div>
        </div>

        <button className="buttonCreate" onClick={handleCreateDragon}>
          Ajouter un dragon
        </button>
      </div>

      <p className="textNbDragons">Nombre de dragons : {nbDragons}</p>

      <p className="textDragons">Dragons :</p>
      <table className="tableDragons">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Age</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>

        <tbody>
          {dragons.map((dragon) => (
            <tr key={dragon.id}>
              <td>
                {update && dragon.id === dragonIdUpdate ? (
                  <input
                    type="text"
                    className="inputUpdate inputNameUpdate"
                    value={inputNameUpdate}
                    onChange={(e) => setInputNameUpdate(e.target.value)}
                  />
                ) : (
                  dragon.name
                )}
              </td>

              <td>
                {update && dragon.id === dragonIdUpdate ? (
                  <input
                    type="text"
                    className="inputUpdate inputOldUpdate"
                    value={inputOldUpdate}
                    onChange={(e) => setInputOldUpdate(e.target.value)}
                  />
                ) : (
                  dragon.old
                )}
              </td>

              <td>
                {update && dragon.id === dragonIdUpdate ? (
                  <div className="buttons">
                    <button
                      className="button"
                      onClick={() => handleConfirmUpdateDragon(dragon)}
                    >
                      Confirmer
                    </button>
                    <button className="button" onClick={() => setUpdate(false)}>
                      Annuler
                    </button>
                  </div>
                ) : (
                  <button
                    className="button"
                    onClick={() => handleUpdateDragon(dragon)}
                  >
                    Modifier
                  </button>
                )}
              </td>

              <td>
                <button
                  className="button"
                  onClick={() => handleDeleteDragon(dragon.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
