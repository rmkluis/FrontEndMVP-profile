import React from "react";
import {TableMapper} from "./Display.js"



function Table(props) {
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
            {props.TableMapper()}
        </tbody>
      </table>
    </>
  );
}

export default Table;
