<script lang="ts">

    import { supabase, currentUser } from '$lib/supabase';
    import { goto } from '$app/navigation';
    import { enhance } from '$app/forms';

    let email = ''
    let password = ''
    let errormessage: string | null = null

    const create = async (email: string, password: string) => {
        errormessage = null
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) {
            errormessage = error.message
        } else {
            currentUser.set(data?.user)
            goto('/')
        }
    }

</script>

<style>
    /* make this look nice */
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    /* make buttons nice */
    button {
        background: #eee;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 0.5em 1em;
    }

    /* make input nice */
    input {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 0.5em 1em;
    }
</style>

<main>
    
        <h1>Create Account</h1>
    
        <p>Create a new account</p>
    
        <form method="POST" use:enhance>
                        
            {#if errormessage}
    
                <p style="text-align: center; color: red;">{errormessage}</p>
    
            {/if}

            <label for="email">Email</label>
    
            <input type="email" name="email" bind:value={email} />
    
            <label for="password">Password</label>
    
            <input type="password" name="password" bind:value={password} />
    
            <button type="submit">Create</button>
    
        </form>
    
        <p>Have an account already? <a href="/login" target="_self">Log in</a></p>
</main>