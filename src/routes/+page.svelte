<script lang="ts">
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import Dashboard from '../components/dashboard/dashboard.svelte';
    // import { supabase, currentUser } from '../lib/supabase';
    import type { PageData } from './$types';

    export let data: PageData;

    let insertRowValue = '';

    const insertRow = async (insertRowValue: string) => {
        // insert a row into the table
        const { error } = await data.supabase
            .from('test')
            .insert([
                { uid: data.session.data.session?.user.id, value: parseInt(insertRowValue) },
            ]);

        if (error) {
            console.log(error); 
        }
    }

</script>

<style>
    main {
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        background-color: #121212;
        position: relative;
    }

    #background {
        z-index: 1;
        background-image: url(waves.png);
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        filter: blur(30px) brightness(0.4) contrast(125%);
    }

    #main-wrapper {
        
        max-width: 80vw;
        color: white;

        margin-top: 4vh;

        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        

    }

    #dashboard-wrapper {
        
        margin-top: 4vh;

        width: 80%;

        
    }

    #text-wrapper {
        width: 100%;
    }

    h1 {
        font-family: 'Kulim Park', sans-serif;
        font-size: 2.5rem;
        font-weight: 400;
        margin-bottom: 0;
        font-weight: lighter;
        text-align: left;
    }

    .text-accent {
        color: #449fc2;
        font-weight: bold;
        font-style: italic;
    }

</style>

<main>
    <!-- <div id="outer-wrapper"> -->
        <div id="main-wrapper">
            <div id="text-wrapper">
                <h1>welcome back, <span class="text-accent">Prathik</span></h1>
            </div>
            <div id="dashboard-wrapper">
                <Dashboard />
            </div>
        </div>
        <!-- <div id="background"></div> -->
    <!-- </div> -->
</main>