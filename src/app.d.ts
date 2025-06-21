// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

import {
  KVNamespace,
  DurableObjectNamespace,
  type ExecutionContext,
  D1Database,
} from "@cloudflare/workers-types";
import type { WebSocketServer } from "$lib/cloudflare/workers/src/index";
import type { Env } from "@livestore/sync-cf/cf-worker";

export interface PlatformEnv extends Env {
  WEBSOCKET_SERVER: DurableObjectNamespace<WebSocketServer>;
}

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    interface Platform {
      env?: PlatformEnv;
      context: ExecutionContext;
      caches: CacheStorage & { default: Cache };
    }
  }
}

export {};
