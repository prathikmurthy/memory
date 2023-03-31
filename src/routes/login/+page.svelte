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
        background: #121212;
    }

    #main {

        backdrop-filter: blur(100px);
        background: rgba(0,0,0, 0.3);    
        color: white;
        font-family: 'Kulim Park', sans-serif;

        /* background: none; */

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

    #ulcircle {
        position: absolute;
        width: 40vw;
        height: 40vh;
        filter: blur(100px);
        border-radius: 50%;
        background: rgba(19, 54, 148, 0.8);
        z-index: 0;
        top: 12vh;
        left: 28vh;
    }
    #brcircle {
        position: absolute;
        width: 40vw;
        height: 40vh;
        filter: blur(100px);
        border-radius: 50%;
        background: rgba(19, 54, 148, 0.8);
        z-index: 0;
        bottom: 12vh;
        right: 20vh;
    }

</style>

<main>
    <div id="parent">
        <div id="ulcircle"></div>
        <div id="brcircle"></div>
        <div id="main">
            <div id="test">
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
    </div>
    <!-- <div id="background"></div> -->
</main>