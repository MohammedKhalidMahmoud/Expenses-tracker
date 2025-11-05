import { User, Expense, Category } from "./models/index.js";

export async function syncTables() {
  try {
    await Promise.all([
      User.sync({ alter: true }),
      Category.sync({ alter: true }),
      Expense.sync({ alter: true }),
    ]);
    console.log("✅ Database synced successfully");
  } catch (error) {
    if (error instanceof Error)
      console.error("❌ Database sync failed:", error.message);
    else {
      console.error("❌ Database sync failed:", error);
    }
  }
}
