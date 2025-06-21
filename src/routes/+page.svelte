<script lang="ts">
    import { makePersistedAdapter } from "@livestore/adapter-web";
    import { createStore } from "$lib/livestore/adapter.svelte";
    import { schema } from "$lib/livestore/schema";
    import Header from "$lib/components/header.svelte";
    import MainSection from "$lib/components/main-section.svelte";
    import Footer from "$lib/components/footer.svelte";
    import type { Adapter } from "@livestore/livestore";
    import { onMount } from "svelte";

    let adapter: Adapter;

    onMount(async () => {
        const { default: LiveStoreWorker } = await import(
            "$lib/livestore/worker?worker"
        );
        const { default: LiveStoreSharedWorker } = await import(
            "@livestore/adapter-web/shared-worker?sharedworker"
        );

        adapter = makePersistedAdapter({
            storage: { type: "opfs" },
            worker: LiveStoreWorker,
            sharedWorker: LiveStoreSharedWorker,
        });
    });
</script>

{#if adapter != null}
    {#await createStore({ adapter, schema, storeId: "default" })}
        <div>Loading LiveStore...</div>
    {:then store}
        <section class="todoapp">
            <Header {store} />
            <MainSection {store} />
            <Footer {store} />
        </section>
    {/await}
{/if}
