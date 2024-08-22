import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import booksRoute from './routes/booksRoute.js';   

export const PORT = process.env.PORT || 5555;

// Correctly format the MongoDB connection string
export const mongoDBURL = "mongodb+srv://aryanandhaaryanandha5:<db_password>@cluster0.f73tq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', booksRoute);  

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("App connected to MongoDB");
    app.listen(PORT, () => {
      // Use backticks for template strings
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
