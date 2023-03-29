<script lang="ts">

    import { supabase, currentUser } from '$lib/supabase';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import { enhance } from '$app/forms';
    
    let email = ''
    let password = ''
    let errormessage: string | null = null

    // const login = async (email: string, password: string) => {
    //     errormessage = null
    //     const {data, error} = await supabase.auth.signInWithPassword({
    //         email: email,
    //         password: password,
    //     })

    //     if (error) {
    //         errormessage = error.message
    //     } else {
    //         currentUser.set(data?.user)
    //         console.log(data)
    //         goto('/')
    //     }
    // }

</script>

<style>
    /* center parent */
    #parent {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        position: relative;
        background-color: #121212;
    }

    #main {
        color: white;
        font-family: 'Kulim Park', sans-serif;


        background-color: #1E1E1E;

        padding-top: 7vh;
        padding-bottom: 7vh;
        padding-left: 8vh;
        padding-right: 8vh;

        max-width: 50vw;

        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 10;

        border-radius: 10px;

        /* add drop shadow */
        box-shadow: 10vh 10vh 200px 0 rgba(41, 63, 210, 0.5), -10vh -10vh 200px 0 rgba(40, 35, 111, 1);

        /* white outline */
        border: 5px solid rgba(255, 255, 255, 0.5);
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* add space between elements */
        gap: 1vh;
        font-size: larger;
    }

    p {
        font-size: medium;
    }
    
    #background {
        position: fixed;
        display: block;
        background-image: url('/waves.png');
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(10px);
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 1;
    }

</style>

<main>
    <div id="parent">
        <div id="main">
            <h1>Login</h1>
            
            <p>Log in to your account</p>
            
            <form method="POST" use:enhance>
                
                {#if errormessage}
                
                <p style="text-align: center; color: red;">{errormessage}</p>
                
                {/if}
                
                <label for="email">Email</label>
                
                <input type="email" name="email" bind:value={email} />
                
                <label for="password">Password</label>
                
                <input type="password" name="password" bind:value={password} />
                
                <button type="submit">Log in</button>
                
            </form>
            
            <p>Don't have an account? <a href="/signup" target="_self">Sign up</a></p>
            
        </div>
    </div>
    <div id="background"></div>
</main>