import type { PlatformEnv } from "$src/app";
import { makeDurableObject, makeWorker } from "@livestore/sync-cf/cf-worker";

export class WebSocketServer extends makeDurableObject({
  onPush: async (message) => {
    console.log("onPush", message.batch);
  },
  onPull: async (message) => {
    console.log("onPull", message);
  },
}) {}

export default makeWorker<PlatformEnv>({
  durableObject: { name: "WEBSOCKET_SERVER" },
});
