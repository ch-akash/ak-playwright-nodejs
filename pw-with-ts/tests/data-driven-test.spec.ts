import { test } from "playwright/test";
import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";

//Read a CSV file
test("CSV Based test data", async ({ page }) => {
  const csvData = parse(
    fs.readFileSync(path.join(__dirname, "test-data/sample-csv.csv")),
    { skip_empty_lines: true, columns: true }
  );

  for (const data of csvData) {
    console.log(
      `CSV Data is ${data.Column_1},${data.Column_2},${data.Column_3}`
    );
  }
});

//Read .env file
test("Read test env vars from .env file", async ({ page }) => {
  console.log(`The env var loaded is: ${process.env.ENVPARAMONE}`);
});
