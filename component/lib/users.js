import db from "./db";


export async function createUsers(email, password) {
  if (typeof email !== "string" || typeof password !== "string") {
    throw new Error("Invalid input: Email and password must be strings.");
  }

  const result = db
    .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
    .run(email, password);

  return result.lastInsertRowid; // ✅ Ensure correct property name
}
