import express from "express"
import cors from "cors"
import pg from "pg"

const PORT = 3001

const pool = new pg.Pool({ database: "CRUDdb" })

  const app = express();
  app.use(cors());
  app.use(express.json());


  app.get("/api/CRUD", (req, res) => {
    pool.query("SELECT * FROM CRUD").then((result) => {
      res.send(result.rows);
    });
  });

function getSpecial(idParam){
  app.get(`/api/CRUD/:idParam`, (req, res) => {
    const { id } = req.params;
    pool.query("SELECT * FROM CRUD WHERE id = $1", [id]).then((result) => {
      res.send(result.rows);
    });
  });
}

  app.delete("/api/CRUD/:id", async (req, res) => {
    const { id } = req.params;

    await pool.query("DELETE FROM CRUD WHERE id = $1", [id]);
    res.sendStatus(200);
  });

  app.patch("/api/CRUD/:id", async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    const result = await pool.query(
      "UPDATE CRUD SET description=$1 WHERE id=$2 RETURNING *",
      [description, id]
    );
    res.send(result.rows[0]);
  })


app.listen(PORT, ()=>{
    console.log("Listening to port:" + PORT)
})

