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

router.post("/addProject", function (req, res, next) {
  fs.readFile("./data/projects.json", "utf8", (err, data) => {
    if (err) {
      const obj = {
        success: false,
        message: "Error reading file",
        fullError: err,
      };
      res.send(obj);
    } else {
      const obj = JSON.parse(data);
      obj.push(req.body);
      fs.writeFile("./data/projects.json", JSON.stringify(obj), (err) => {
        if (err) {
          const obj = {
            success: false,
            message: "Error writing file",
            fullError: err,
          };
          res.send(obj);
        } else {
          const obj = {
            success: true,
            message: "Project added",
          };
          res.send(obj);
        }
      });
    }
  });
});

module.exports = router;
