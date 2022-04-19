var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET users listing. */
router.get("/getProjects", function (req, res, next) {
  fs.readFile("./data/projects.json", "utf8", (err, data) => {
    if (err) {
      const obj = {
        success: false,
        message: "Error reading file",
        fullError: err,
      };
      res.send(obj);
    } else res.send(data);
  });
});

module.exports = router;
