const express = require("express");
const bodyParser = require("body-parser");
const PORT = (process.env.PORT = 5000);

const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" },
  ];

  res.json(customers);
});

app.listen(PORT, console.log(`Listening to ${PORT}`));
