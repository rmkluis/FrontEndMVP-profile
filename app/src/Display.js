import React, { useEffect, useState } from 'react'
import Table from './Table.js'
import {EmpHistory, EmpHistoryChunk} from './EmpHistory.js'
import { SkillsChunkFront, SkillsChunkBack } from './Skills.js';

function Display(props) {
  ///////////////////////////////////////// GET ALL
  //Get specific by using array at index
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

  ///////////////////////////////////////// Draw Table-Start
  const [displayTable, setDisplayTable] = useState(false);
  let drawTable = <Table CRUD={CRUD} />;
  let drawTableButton = (
    <button
      className="button"
      onClick={() => {
        if (displayTable) {
          setDisplayTable(false);
        } else {
          setDisplayTable(true);
        }
      }}
    >
      SQL CRUD (Create Read Update Delete) Table
    </button>
  );
  ///////////////////////////////////////// Draw Table-End
  ///////////////////////////////////////// Draw Table-Row-End
  const createNewRow = (
    <button
      className="button"
      onClick={() => {
        //////post request here
        fetch("http://localhost:3001/api/CRUD", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: "React Hooks POST Request Example" }),
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
  ///////////////////////////////////////// Draw Table-Row-End

  return (
    <>
      <div className="display">
        {/* ///////////////////////////////////////// Draw Table */}
        {props.skillsDisplay && <SkillsChunkFront />}
        {props.skillsDisplay && <SkillsChunkBack />}
        {props.skillsDisplay ? drawTableButton : null}
        {props.skillsDisplay && displayTable ? drawTable : null}
        {props.skillsDisplay && displayTable ? (
          <button className="button" onClick={() => {}}>
            Save to Database
          </button>
        ) : null}
        {props.skillsDisplay && displayTable ? createNewRow : null}
        {props.empHistoryDisplay ? <EmpHistoryChunk /> : null}
      </div>
    </>
  );
}

export { Display}