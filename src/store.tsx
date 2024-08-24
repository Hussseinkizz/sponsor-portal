import { StateRadio } from "state-radio-react";

const { channels } = StateRadio();

export const authChannel = channels.addChannel("auth", null);

// authChannel.subscribe((newAuth) => {
//   console.log("auth state updated", newAuth);
// });
