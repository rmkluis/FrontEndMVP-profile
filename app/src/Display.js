import React, { useEffect, useState } from 'react'
import Table from './Table.js'
import {EmpHistory, EmpHistoryChunk} from './EmpHistory.js'
import { SkillsChunkFront, SkillsChunkBack } from './Skills.js';

function Display(props) {

///////////////////////////////////////// GET ALL ----- Read Request
  const [CRUD, setCrud] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/CRUD")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCrud(data);
        console.log(CRUD);
      });
  }, []);
  ///////////////////////////////////////// Draw Table-Row-Start -----Create Request
  const createNewRow = (
    <button
      className="button"
      onClick={() => {
        //////post request here
        fetch("http://localhost:3001/api/CRUD", {
          method: "POST",
        }).then((res) =>
          res.json().then((data) => {
            setCrud(data);
          })
        );
      }}
    >
      Create New Entry
    </button>
  );
  ///////////////////////////////////////// Table Mapping Function ---- sent as prop to Table.js
  let TableMapper = () => {
      return CRUD.map((row) => {
        return (
          <tr key={row.id}>
            <td
              contentEditable
              onInput={(event) => console.log(event.target.innerText)}
            >
              {row.slot1}
            </td>
            <td
              contentEditable
              onInput={(event) => console.log(event.target.innerText)}
            >
              {row.slot2}
            </td>
            <td
              contentEditable
              onInput={(event) => console.log(event.target.innerText)}
            >
              {row.slot3}
            </td>
          </tr>
        );
      });
  }
  ///////////////////////////////////////// Draw Table-Start
  const [displayTable, setDisplayTable] = useState(false);
  let drawTableButton = (
    <button
      className="button"
      onClick={() => {
        displayTable?setDisplayTable(false):setDisplayTable(true);
        }
      }
    >
      SQL CRUD (Create Read Update Delete) Table
    </button>
  );
  ///////////////////////////////////////// Draw Table-End
  ////////////////////////////////////////////////////////////////////////////////// Display return area
  return (
    <div className='displayOuter'>
      <div className="display">
        {/* ///////////////////////////////////////// Draw Table */}
        {props.skillsDisplay && <SkillsChunkFront />}
        {props.skillsDisplay && <SkillsChunkBack />}
        <div className="buttonBox">
          {props.skillsDisplay ? drawTableButton : null}
          {props.skillsDisplay && displayTable ? (<button className="button" onClick={() => {}}>Save to Database</button>) : null}
          {props.skillsDisplay && displayTable ? createNewRow : null}
        </div>
        {props.skillsDisplay && displayTable  ? (<Table TableMapper={TableMapper} />) : null}
        {props.empHistoryDisplay ? <EmpHistoryChunk /> : null}
      </div>
    </div>
  );
}

export { Display }

