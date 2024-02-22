const { client } = require("./connectDB.js");

const connecttoDb = async () => {
  try {
    await client.connect();
    console.log("Connection established");
  } catch (err) {
    console.log("Connecting to Database", err);
  }
};
connecttoDb();

const getAll = async (req, res) => {
  await client.query("select * from books", (err, ress) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(ress.rows);
      const data = ress.rows;
      res.status(200).json({ data });
    }
    console.log("GetAll executed");
  });
};

const searchOne = async (req, res) => {
  try {
    const { author } = req.params;
    console.log(req.params);
    const result = await client.query(
      "SELECT * FROM books WHERE aurthor = $1",
      [author]
    );
    const data = result.rows;
    console.log("SearchOne executed");
    res.status(200).json({ data });
  } catch (error) {
    console.error("Error searching for books:", error);
    res
      .status(500)
      .json({ error: "An error occurred while searching for books" });
  }
};

const getFirst = async (req, res) => {
  await client.query("SELECT * FROM books LIMIT 8", (err, ress) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(ress.rows);
      const data = ress.rows;
      res.status(200).json({ data });
    }
    console.log("GetAll executed");
  });
};

const getSecond = async (req, res) => {
  await client.query("select * from books LIMIT 8 OFFSET 8", (err, ress) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(ress.rows);
      const data = ress.rows;
      res.status(200).json({ data });
    }
    console.log("GetAll executed");
  });
};

const getThird = async (req, res) => {
  await client.query("select * from books LIMIT 8 OFFSET 16", (err, ress) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(ress.rows);
      const data = ress.rows;
      res.status(200).json({ data });
    }
    console.log("GetAll executed");
  });
};

const getFourth = async (req, res) => {
  await client.query("select * from books LIMIT 8 OFFSET 24", (err, ress) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(ress.rows);
      const data = ress.rows;
      res.status(200).json({ data });
    }
    console.log("GetAll executed");
  });
};
module.exports = {
  getAll,
  searchOne,
  getFirst,
  getSecond,
  getThird,
  getFourth,
};
