const express = require("express");
const router = express.Router();
const {
  createBook,
  getAllBooks,
  updateBook,
  getBookById,
} = require("../controllers/book");

router.post("/create-book", createBook);
router.get("/getAllbooks", getAllBooks);
router.put("/updateBook/:id", updateBook);
router.get("/getBook/:id", getBookById);

module.exports = router;
