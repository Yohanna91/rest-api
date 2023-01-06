
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }));

// GET = Get all books
app.get("/books", (req, res) => {
  fetch("http://localhost:3000/books")
  .then(res => res.json())
  .then(books => {
    res.json(books)
  })
})

// POST = Add a new book
app.post("/books", (req, res) => {
  fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req.body)
  })
  res.send("Book tillagd!!!!")
})

// PUT = Update a single book
app.put("/books/:id", (req, res) => {
  fetch("http://localhost:3000/books/" + req.params.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body)
  })
  res.send("Book " + req.params.id + " uppdaterad!")
})

// DELETE = Delete a single book
app.delete("/books/:id", (req, res) => {
  fetch("http://localhost:3000/books/" + req.params.id, {
    method: "DELETE"
  })
  res.send("Boken är borttagen!")
})

app.get("*", (req, res) => {
  res.status(404).send("404 Page not found")
})

app.listen(4000, () => {
console.log("lyssnar på port 4000")
}) 
  