import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";
import { Globals } from "../constants/globals";

export class FileUtil {
  async getTestDataCsv() {
    return parse(
      fs.readFileSync(path.join(__dirname, Globals.TEST_DATA_FILE)),
      { skip_empty_lines: true, columns: true }
    );
  }
}
