const databasePool = require("../database.js");

exports.getCategory = async (req, res) => {
  try {
    const [categoryList] = await databasePool.query(`SELECT * FROM category`);
    return res.status(200).json({
      msg: "Category",
      categoryList,
    });
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
};
