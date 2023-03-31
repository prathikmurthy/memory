<script lang="ts">
    import Notes from "./notes.svelte";
    import QuickNote from "./quicknote.svelte";



</script>

<style>
    main {
        /* width: 100%; */
        height: 100vh;
        /* background: #1E1E1E; */

        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
    }
</style>

<main>
    <QuickNote />
    <Notes />
</main>