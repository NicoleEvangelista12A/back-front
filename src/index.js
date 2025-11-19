import express from "express"
import cors from "cors"
import mysql from "mysql2"

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env

const app = express()
const port = 3000
app.use(cors())
app.use( express.json())

// GET, POST, DELETE, PATCH, PUT

app.get("/", (request, response) => {
  const selectCommand = `
    SELECT name, email, age, nickname
    FROM marciomarcal_02ta
  `;
});


app.post("/cadastrar", (request, response) => {
  const {name, email, age, nickname, passaword} =request.body.user
  
  const insertCommand = `
  INSERT INTO nicolebarros_02ta(name, email, age, nickname, passaword)
  VALUES(?, ?, ?, ?, ?)
  `
  database.query(insertCommand [name, email, age, nickname, passaword], (error) => {
    if (error) {
    console.log(error)
    return
}

 response.json(users)

  })

 
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`)
})

const database = mysql.createPool({
  host: "DB_HOST",
  user: "DB_USER",
  password: "DB_PASSWORD",
  database: "DB_NAME",
  connectionLimit: 10
})
