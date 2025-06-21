import { makeWorker } from "@livestore/adapter-web/worker";
import { makeCfSync } from "@livestore/sync-cf";
import { schema } from "./schema.js";

makeWorker({
  schema,
  sync: {
    backend: makeCfSync({ url: `${self.location.origin}/workers` }),
    initialSyncOptions: { _tag: "Blocking", timeout: 5000 },
  },
});
