import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017/");

await client.connect();

const db = client.db("school");
const studentsCollection = db.collection("students");

// const a = await studentsCollection.updateOne(
//   { _id: new ObjectId("6790367f12aaab70d178d6fb") },
//   { $set: { class: 10, age: 17 } }
// );
// const a = await studentsCollection.replaceOne(
//   { _id: new ObjectId("6790367f12aaab70d178d6fb") },
//   { test: "Testing" }
// );
console.log(a);
client.close();
