import React from "react";

function Table({ CRUD }) {
  // console.log(CRUD)
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>slot1</th>
            <th>slot2</th>
            <th>slot3</th>
          </tr>
        </thead>
        <tbody>
          {CRUD.map((row) => {
            return (
              <tr key={row.id}>
                <td contentEditable onInput={event => console.log(event.target.innerText)}>{row.slot1}</td>
                <td contentEditable onInput={event => console.log(event.target.innerText)}>{row.slot2}</td>
                <td contentEditable onInput={event => console.log(event.target.innerText)}>{row.slot3}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
