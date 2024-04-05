const express = require("express");
const app = express();
const indexRouter = require('./src/routes/indexRouter');
const cors = require('cors');
const port = process.env.PORT | 3000;

require('dotenv').config();
require('./src/db/db');
app.use(express.json());
app.use(cors());

app.use(express.static('../frontend/dist'));

app.use("/api/v1",indexRouter);

// 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        "success":false,
        "message":"Something went wrong"
    })
  });

app.listen(port,()=>{
    console.log('server running on: ',port);
});

