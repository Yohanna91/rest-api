
const fs = require("fs")
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))

// GET = Get all books
app.get("/books", (req, res) => {
  fs.readFile("db.json", 'utf-8', function(err, data) {
    const booksObject = JSON.parse(data);
    res.json(booksObject)
  })
})

// POST = Add a new book
app.post("/books", (req, res) => {
  fs.readFile("db.json", 'utf-8', function(err, data) {
    const booksObject = JSON.parse(data);
    booksObject["books"].push(req.body)
    fs.writeFileSync("db.json", JSON.stringify(booksObject), "utf-8")
    res.send(booksObject)
  })
})

// PUT = Update a single book
app.put("/books/:id", (req, res) => {
  fs.readFile("db.json", 'utf-8', function(err, data) {
    const booksObject = JSON.parse(data);
    const result = booksObject["books"].filter(book => book.id == req.params.id)[0]
    result.title = req.body.title || result.title
    result.author = req.body.author || result.author
    result.published = req.body.published || result.published
    booksObject["books"].forEach((book, index) => {
      if (book.id == result.id) {
        booksObject["books"][index] = result
        fs.writeFileSync("db.json", JSON.stringify(booksObject), "utf-8")
        res.send(booksObject["books"][index])
      }
    })
  })
})

// DELETE = Delete a single book
app.delete("/books/:id", (req, res) => {
  fs.readFile("db.json", 'utf-8', function(err, data) {
    const booksObject = JSON.parse(data);
    booksObject["books"].forEach((book, index) => {
      if (book.id == req.params.id) {
        booksObject["books"].splice(index, 1)
      }
    })
    fs.writeFileSync("db.json", JSON.stringify(booksObject), "utf-8")
    res.send(booksObject)
  })
})

app.get("*", (req, res) => {
  res.status(404).send("Page not found.")
})

app.listen(4000, () => {
console.log("lyssnar på port 4000")
}) 
  