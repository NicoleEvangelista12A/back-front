import express from "express"
import person from './person.js';
import cors from "cors"
const app = express()
const port = 3000
app.use(cors())

// GET, POST, DELETE, PATCH, PUT

app.get("/", (request, response) => {
  response.json(persons)
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`)
})
