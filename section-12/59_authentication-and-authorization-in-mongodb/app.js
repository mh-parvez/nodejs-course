import { MongoClient } from "mongodb";

// const connectionUrl = "mongodb://anurag:anurag@127.0.0.1:27018/storageApp";
const connectionUrl =
  "mongodb://anurag:anurag123@ec2-54-208-96-115.compute-1.amazonaws.com/storageApp";

const client = new MongoClient(connectionUrl);

await client.connect();

const db = client.db();
const collection = db.collection("users");
const data = await collection.find().toArray();

console.log(data);
client.close();
