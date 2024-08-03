const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./database/connectDB");
const userRoutes = require('./routes/user.routes.js');

const bookingRoutes = require('./routes/booking.routes.js');

const app = express();

PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);


connectDB()
  .then(
    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
    })
  )
  .catch(() => {
    console.log("Error while listing Server");
  });
