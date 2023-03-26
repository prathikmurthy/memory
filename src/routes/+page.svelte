<script lang="ts">
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    // import { supabase, currentUser } from '../lib/supabase';
    import type { PageData } from './$types';

    export let data: PageData;

    let insertRowValue = '';

    const insertRow = async (insertRowValue: string) => {
        // insert a row into the table
        // const { data, error } = await supabase
        //     .from('test')
        //     .insert([
        //         { uid: $currentUser?.id, value: parseInt(insertRowValue) },
        //     ]);

        // if (error) {
        //     console.log(error);
        // } else {
        //     console.log(data);
        // }
    }

    // function logout() {
    //     supabase.auth.signOut()
    //     goto('/login');
    // }

</script>

<!-- make the buttons look nice -->
<style>
  button {
    background: #eee;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5em 1em;
    margin: 0.5em;
  }
</style>

<!-- input field and button which calls insertRow with input field value -->
<input type="text" placeholder="Insert Row" bind:value={insertRowValue} />
<button on:click={() => insertRow(insertRowValue)}>Insert Row</button>

<!-- display the user's email -->
<p>{data.user}</p>

