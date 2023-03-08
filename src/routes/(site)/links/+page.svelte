<script lang="ts">
    import type { PageData } from "./$types";
    import { invalidateAll } from "$app/navigation";

    export let data: PageData;

    const handleDelete = async (id: number) => {
        await fetch("/api/links", {
            method: "delete",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({ linkId: id })
        });
        await invalidateAll();
    };
</script>

<h1 class="mt-10 text-center text-3xl font-bold">Shortened links</h1>
<table class="mt-8 w-full border border-solid border-gray-50">
    <thead class="border border-solid border-gray-50 bg-gray-800">
        <th class="border border-solid border-gray-50 py-2">Short link</th>
        <th class="border border-solid border-gray-50 py-2">Full link</th>
        <th class="border border-solid border-gray-50 py-2">Visits</th>
        <th class="border border-solid border-gray-50 py-2">Actions</th>
    </thead>
    {#each data.links || [] as link}
        <tr class="border border-solid border-gray-50">
            <td class="border border-solid border-gray-50 py-1 px-2">/{link.shortLink}</td>
            <td class="border border-solid border-gray-50 py-1 px-2">{link.fullLink}</td>
            <td class="border border-solid border-gray-50 py-1 px-2">{link.visits}</td>
            <td class="border border-solid border-gray-50 py-1 px-2 text-center">
                <button
                    on:click={() => handleDelete(link.id)}
                    class="rounded-lg bg-red-600 py-1 px-2 font-bold hover:bg-red-700 active:bg-red-800"
                    >Delete</button
                >
            </td>
        </tr>
    {/each}
</table>
