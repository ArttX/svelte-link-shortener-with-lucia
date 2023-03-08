<script lang="ts">
    import type { ActionData } from "./$types";
    import { page } from "$app/stores";

    export let form: ActionData;
</script>

<h1 class="mt-32 mb-8 text-center text-3xl font-bold">Svelte Link Shortener</h1>
<form method="post" class="mx-auto flex w-1/2 flex-col items-center justify-center gap-4">
    <input
        name="full-link"
        type="text"
        placeholder="Enter full link"
        required
        class="w-full rounded-lg bg-gray-600 py-1 px-2 text-lg"
    />
    <div
        class="flex w-full items-center rounded-lg bg-gray-600 px-2 text-center text-lg text-gray-300 focus-within:outline focus-within:outline-1 focus-within:outline-offset-2 focus-within:outline-white"
    >
        <label for="short-link">{$page.url.origin}/</label>
        <input
            id="short-link"
            name="short-link"
            type="text"
            placeholder="Enter short link"
            required
            class="w-full rounded-lg bg-gray-600 py-1 px-2 text-lg outline-none"
        />
    </div>
    <button
        type="submit"
        class="h-10 w-28 rounded-lg bg-orange-600 font-bold hover:bg-orange-700 active:bg-orange-800"
    >
        Shorten
    </button>
</form>
<div class="mt-4 text-center">
    {#if form}
        {#if form.success}
            <span class="text-green-500">{form.message}</span>
        {:else}
            <span class="text-red-500">{form.message}</span>
        {/if}
    {/if}
</div>
