import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from "$env/static/public";
import { createClient } from "@supabase/supabase-js";
import { writable } from "svelte/store";

export const supabase = createClient( `${PUBLIC_SUPABASE_URL}`, `${PUBLIC_SUPABASE_KEY}` );

export const currentUser = writable((await supabase.auth.getUser()).data.user);

supabase.auth.onAuthStateChange(async () => {
    currentUser.set((await supabase.auth.getUser()).data.user);
    console.log("Auth state changed")
});
