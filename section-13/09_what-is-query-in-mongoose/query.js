import User from "./UserModel.js";

const query = User.where("age")
  .gte(12)
  .lte(15)
  .select("name age")
  .sort({ age: -1 })
  .exec();

// console.log(query.projection());
// console.log(query.getQuery());

console.log(await query);
