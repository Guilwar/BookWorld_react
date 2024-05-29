const databasePool = require("../database.js");

exports.getBooks = async (req, res) => {
  try {
    const [bookList] = await databasePool.query(`SELECT * FROM book`);
    return res.status(200).json({
      msg: "Libri",
      bookList,
    });
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
};
