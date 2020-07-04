require('dotenv').config()
const express = require("express");
const PORT = process.env.PORT || 4000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

//--------------registering cors -----------------
app.use(cors());
//----------------configure body parser --------------
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//---------------configure morgan  --------
app.use(morgan("dev"));

require("./config/mongoose")(app);
require("./api/routehandler")(app);

// define first route
app.get("/", (req, res) => {
    res.json({
        data: "Hello MEIN developers...The I stands for Ionic😎😎"
    });
});

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});