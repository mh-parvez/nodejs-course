import { z } from "zod/v4";

const schema = z.object({
  name: z
    .string("Please enter a valid string.")
    .min(3, "Please enter at least 3 characters")
    .max(100, "Please enter at max 100 characters"),
  age: z.number().lt(120, "Age can not be greater that 119"),
  email: z.email().optional(),
});

const rawData = { name: "ProCodrr", age: 40, email: "abcd@gmail.com" };

const result = schema.safeParse(rawData);

if (result.success) {
  console.log(result.data);
} else {
  console.log(result.error.issues);
}

console.log("object");
