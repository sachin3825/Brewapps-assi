const Book = require("../models/Book");

exports.createBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;

    if (!title || !author || !summary) {
      return res.status(403).json({
        success: false,
        message: "All the fields are required",
      });
    }

    const book = await Book.create({
      title,
      author,
      summary,
    });

    return res.status(200).json({
      success: true,
      message: "book entry create successfully",
      book,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    return res.status(200).json({
      success: true,
      data: allBooks,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: `Can't fetch books data`,
      error: error.message,
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const bookId = req.params.id;

    if (!title || !author || !summary) {
      return res.status(400).json({
        success: false,
        message: "All the fields are required",
      });
    }

    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      {
        title,
        author,
        summary,
      },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Book updated successfully",
      book: updatedBook,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;

    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;

    const deletedBook = await Book.findByIdAndRemove(bookId);

    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      book: deletedBook,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
