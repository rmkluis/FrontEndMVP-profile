import React from 'react'


function Table({ CRUD }) {
    // console.log(CRUD)
  return (
    <>
      {CRUD.map((row) => {
        return(
        <table key={row.id}>
            <tbody>
          <tr>
            <td>{row.slot1}</td>
          </tr>
          <tr>
            <td>{row.slot2}</td>
          </tr>
          <tr>
            <td>{row.slot3}</td>
          </tr>
          </tbody>
        </table>)
      })}
      </>
  );
}

export default Table