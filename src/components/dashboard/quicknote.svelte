<script lang="ts">
import FaBolt from 'svelte-icons/fa/FaBolt.svelte'
</script>

<style>
    main {
        height: 7vh;
        width: 80%;
        margin-top: 3vh;
        margin-bottom: 3vh;

        border-radius: 1vw;
        border-color: #1E1E1E;
        border-style: solid;
        border-width: 0.3vw;

        font-size: medium;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        /* background-color: aquamarine; */
    }
    
    /* make icon smaller */
    #icon-wrapper {
        height: 3.5vh;
        width: 6vw;
        color: aqua
        /* background-color: #1E1E1E; */
    }

    #text-wrapper > input {
        font-size: 4vh;
        font-family: 'Kulim Park', sans-serif;
        color: #5a5959;
        background-color: transparent;
        width: 100%;
    }


</style>

<main>
    <div id="icon-wrapper">
        <FaBolt />
    </div>
    <div id="text-wrapper">
        <input type="text" placeholder="Create a Quick Note" />
    </div>
</main>