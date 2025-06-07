const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // or your Atlas connection string
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("library"); // Your database
    const books = db.collection("books");

    const allBooks = await books.find().toArray();

    console.log("Books in database:");
    allBooks.forEach((book, index) => {
      console.log(`${index + 1}. ${book.title} by ${book.author} (${book.year})`);
    });
  } finally {
    await client.close();
  }
}

run().catch(console.error);
