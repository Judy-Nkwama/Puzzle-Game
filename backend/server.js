const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello");
});


app.get("/api/v1/get-users-data", (req, res) => {
  fs.readFile("enyuksekscore.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading data");
    } else {
      const dataArray = data
        .trim()
        .split("\n")
        .map((line) => JSON.parse(line));
      if (dataArray.length === 0) {
        res.status(404).send("Data not found");
      } else {
        res.send(dataArray);
      }
    }
  });
});


app.post("/api/v1/save/users-data", (req, res) => {
  const data = req.body;

  if (!data.username || !data.score) {
    res.status(400).send("Invalid data");
  } else {
    fs.readFile("enyuksekscore.txt", (err, fileData) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading data");
      } else {
        let existingData = [];
        if (fileData.length > 0) {
          existingData = JSON.parse(fileData);
        }

        const index = existingData.findIndex(
          (d) => d.username === data.username
        );
        if (index === -1) {
          existingData.push(data);
        } else {
          if (data.score > existingData[index].score) {
            existingData[index].score = data.score;
          }
        }

        fs.writeFile(
          "enyuksekscore.txt",
          JSON.stringify(existingData),
          (err) => {
            if (err) {
              console.error(err);
              res.status(500).send("Error saving data");
            } else {
              console.log("Data saved successfully");
              res.send("Data saved successfully");
            }
          }
        );
      }
    });
  }
});


app.listen(5000, () => {
  console.log("App running on port 5000");
});
