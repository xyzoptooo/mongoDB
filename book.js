const { MongoClient } = require("mongodb");

// Replace with your connection string (local or MongoDB Atlas)
const uri = "mongodb://localhost:27017"; // or your Atlas connection string
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("library"); // Database: library
    const books = db.collection("books"); // Collection: books

    // Add books
    const result = await books.insertMany([
      { title: "Atomic Habits", author: "James Clear", year: 2018 },
      { title: "The Pragmatic Programmer", author: "Andy Hunt", year: 1999 },
      { title: "Clean Code", author: "Robert C. Martin", year: 2008 }
    ]);

    console.log(`${result.insertedCount} books added!`);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
