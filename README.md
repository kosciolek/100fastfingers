# 100fastfingers

Because sometimes 10 ain't enough: Chrome Extension + Nodejs server + Tesseract.

Cheating software for [10fastfingers.com](https://10fastfingers.com/).

Handles both the normal races, **and the AntiCheat guard**.

- [100fastfingers](#100fastfingers)
  - [Demo](#demo)
  - [Installation](#installation)
    - [Server](#server)
    - [Extension](#extension)
  - [Usage](#usage)
  - [Languages](#languages)

---

## Demo

![](https://i.imgur.com/93Jv7Cm.png)

![](https://i.imgur.com/BcmeK25.png)

![](https://i.imgur.com/uAvvf4T.png)

---

## Installation

### Server

Install Tesseract and desired language packs. [Tesseract docs.](https://tesseract-ocr.github.io/tessdoc/)

Start the server with:

```sh
TESSERACT_BIN=tesseract/binary/path yarn server:start
```

### Extension

```
cd ext && yarn build
```

The `ext/dist` directory is ready to be loaded as an extension with Chrome's developer mode enabled.

## Usage

Open the extension's popup.

In the **Normal** tab, you may submit fake tests. Select the desired WPM (mind that it's an approximation, and the result might be 20-30 higher on occasion).

Once a high-scoring test is submitted, you will be forced to pass an AntiCheat test.

In the **AntiCheat** tab, you may submit AntiCheat tests. Press the **RUN ANTICHEAT** button and, once enough time has passed, press **SUBMIT RECOGNIZED**.

Not every AntiCheat image is recognized properly - some of them are too unreadable. You may click the **RESET** button to return to the starting point, and repeat the procedure until you get a satisfactory result.

## Languages

Though only Polish is supported so far, the Tesseract server request's body already has a `lang` field which is forwarded directly to Tesseract, and thus it's enough to change client logic:

- The `lang` field in the request body
- Possibly 10fastfingers requests to indicate a different language
