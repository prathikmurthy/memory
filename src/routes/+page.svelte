<script lang="ts">
    let count = 0;
</script>

<style>
    p {
        color:green
    }
</style>

<h1>Welcome to SvelteKit</h1>
<h1>{count}</h1>
<button on:click={() => count++}>Increment</button>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/about">About Page</a>
