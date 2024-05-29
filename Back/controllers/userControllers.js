const databasePool = require("../database.js");

exports.getUserList = async (req, res) => {
  try {
    const [userList] = await databasePool.query(`SELECT * FROM User`);
    return res.status(200).json({
      msg: "Lista utenti",
      userList,
    });
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [user] = await databasePool.query(
      `
              SELECT * 
              FROM user 
              WHERE email = ?
              AND password = ?
          `,
      [email, password]
    );

    if (user.length > 0) {
      return res.status(200).json({
        msg: `Bentornato ${user[0].email}`,
        canLogin: true,
        user,
      });
    }
    return res.status(200).json({
      msg: "email o password errati!",
      canLogin: false,
      user,
    });
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
};

exports.registration = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (username.length < 16 && password.length < 8) {
      const [user] = await databasePool.execute(
        `INSERT INTO user(name, email, password) VALUES (?, ?, ?)`,
        [username, email, password]
      );
      return res.status(200).json({
        msg: "Benvenuto",
      });
    }
    if (username.length > 16) {
      return res.status(400).json({
        msg: "Username troppo lungo per la registrazione",
      });
    }
    return res.status(400).json({
      msg: "Password troppo lunga",
    });
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
};
