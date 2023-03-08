<script lang="ts">
    import { getUser } from "@lucia-auth/sveltekit/client";
    const user = getUser();
</script>

<nav class="flex h-12 w-full items-center justify-between bg-gray-800">
    <span class="ml-4 flex h-full flex-col justify-center text-xl font-bold">
        <a href="/">Svelte Link</a>
    </span>
    {#if $user}
        <div class="mr-auto ml-10 flex h-full items-center">
            <a href="/links" class="hover:text-orange-600">Links</a>
        </div>
        <div class="flex h-full items-center gap-4">
            <div class="flex h-full items-center gap-3">
                <span class="font-bold">{$user.username}</span>
                <img src={$user.image} alt="avatar" class="h-8 w-8 rounded-full" />
            </div>
            <form action="/logout" method="post">
                <button
                    class="mr-4 flex h-8 w-20 items-center justify-center rounded-lg bg-orange-600 py-0.5 px-2 font-bold hover:bg-orange-700 active:bg-orange-800"
                >
                    Logout
                </button>
            </form>
        </div>
    {:else}
        <a
            href="/login"
            class="mr-4 flex h-8 w-20 items-center justify-center rounded-lg bg-orange-600 py-0.5 px-2 font-bold hover:bg-orange-700 active:bg-orange-800"
        >
            Login
        </a>
    {/if}
</nav>
