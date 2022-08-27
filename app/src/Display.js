import React, { useEffect, useState } from 'react'
import Table from './Table.js'

function Display() {
  const [CRUD, setCrud] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/CRUD")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCrud(data);
        console.log(CRUD)
      });
  }, []);

  const [displayTable, setDisplayTable] = useState(false);
  let drawTable = <Table CRUD={CRUD} />

  return (
    <>
      <div className="display">
        <button
          onClick={() => {
            if(displayTable){setDisplayTable(false)}
            else {setDisplayTable(true)}
            console.log("Why won't you display?" + displayTable);
          }}
        >
          Display CRUD table
        </button>
        {displayTable ? drawTable : 0}
      </div>
    </>
  );
}

export default Display