import express from "express";

const tableRouter = express.Router();

tableRouter.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});
tableRouter.get("/table-form", (req, res) => {
  res.render("tableForm", { title: "Table Form" });
});
tableRouter.post("/table-form", (req, res) => {
  console.log(req.body);
  const { table, from, to } = req.body;
  const parseFrom = parseInt(from, 10);
  const parseTo = parseInt(to, 10);
  const tableData = parseInt(table, 10);
  if (isNaN(parseFrom) || isNaN(parseTo) || isNaN(tableData)) {
    return res.status(400).send("Invalid input: all fields must be numbers.");
  }

  res.render("table", {
    from: parseFrom,
    to: parseTo,
    table: tableData,
    title: `Table of ${tableData}`,
  });
});

export { tableRouter };
