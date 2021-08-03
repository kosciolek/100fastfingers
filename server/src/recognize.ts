import * as cp from "child_process";
import { promises as fsp } from "fs";
import { imgPath, TESSERACT_BIN } from "./const";

export async function recognize(
  img: ArrayBuffer,
  lang = "pol"
): Promise<string> {
  await fsp.writeFile(imgPath, new Uint8Array(img));
  return new Promise((res) =>
    cp.exec(
      `${TESSERACT_BIN} ${imgPath} stdout -l ${lang || "pol"}`,
      (error, stdout) => {
        res(stdout);
      }
    )
  );
}
