<script lang="ts">

    import { supabase, currentUser } from '../lib/supabase';

    let email = '';
    let password = '';

        
    // check if the user is logged in
    // onMount(async () => {
    //     const { data, error } = await supabase.auth.getSession();

    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log(data);
    //     }
    // });

    const login = async (email: string, password: string) => {
        // log in the user
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }
    };

    const createAccount = async (email: string, password: string) => {
        // create a new user
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            console.log(error);
        } else {
            console.log("Account created!");
            currentUser.set(data?.user);
        }
    };
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

<!-- create input fields for the buttons -->
<input type="text" placeholder="Email" bind:value={email} />
<input type="password" placeholder="Password" bind:value={password}/>
<!-- buttons which use the fields -->
<button on:click={() => login(email, password)}>Login</button>
<button on:click={() => createAccount(email, password)}>Create Account</button>
<!-- logout button -->
<button on:click={() => supabase.auth.signOut()}>Logout</button>

<!-- display the user's email -->
<p>{$currentUser?.email == undefined ? "Not Logged In" : $currentUser.email}</p>

