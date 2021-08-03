import { submitChallenge } from "./submitChallenge";
import { Message } from "../api/Message";
import {
  REQUEST_SUBMIT_CHALLENGE,
  RequestSubmitChallenge,
} from "../api/RequestSubmitChallenge";
import { getAntiCheatImage } from "./getAntiCheatImage";
import { OkMessage } from "../api/OkMessage";

chrome.runtime.onMessage.addListener((
  request: Message,
  sender,
  sendResponse
) => {
  switch (request.type) {
    case REQUEST_SUBMIT_CHALLENGE:
      // eslint-disable-next-line no-case-declarations
      const msg = request as RequestSubmitChallenge;
      submitChallenge(msg.wpm);
      sendResponse({ type: "OK" } as OkMessage);
      break;
    case "GET_ANTICHEAT_IMAGE":
      getAntiCheatImage().then((img) => sendResponse(img));
      break;
    default:
      throw new Error("Unrecognized message.");
  }

  return true;
});
