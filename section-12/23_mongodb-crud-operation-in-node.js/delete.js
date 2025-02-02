import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017/");

await client.connect();

const db = client.db("school2");

// Delete a collection
// const studentsCollection = db.collection("students");
// console.log(await studentsCollection.drop());

// Delete a document
// const teachersCollection = db.collection("teachers");
// const a = await teachersCollection.deleteOne({
//   _id: new ObjectId("679035dae900efa95c46f63f"),
// });

// Delete a field or property
// const teachersCollection = db.collection("teachers");
// const a = await teachersCollection.updateOne(
//   {
//     _id: new ObjectId("679035dae900efa95c46f640"),
//   },
//   { $unset: { age: "" } }
// );

// console.log(a);

// Delete a Database
console.log(await db.dropDatabase());

client.close();
